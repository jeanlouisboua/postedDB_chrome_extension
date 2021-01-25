const socketClusterClient = require("socketcluster-client");
var _ = require('underscore');

chrome.runtime.onInstalled.addListener(function () {
  console.log("Background is running....");
  chrome.storage.sync.set({ endpoint: "http://18.218.79.85:8000" }, function () {
    console.log('endpoint stored sucessfully !');
  })
});

function start() {
  var socket = socketClusterClient.create({
    hostname: '18.218.79.85',
    port: 8000
  });

  (async () => {
    for await (let { event } of socket.listener('connect')) {

      (async () => {
        for await (let data of socket.receiver('create_database')) {
          const promise = indexedDB.databases();
          var duplicate;
          promise.then(databases => {
            duplicate = _.find(databases, function (idb) {
              return idb.name === data.db_name;
            })
          })

          const request = indexedDB.open(data.db_name, 1);
          let db;
          request.onupgradeneeded = function () {
            const db = request.result;
            (data.object_store_list).forEach((storeObj, index) => {
              var store = db.createObjectStore(storeObj.name, { keyPath: storeObj.keyPath });
              if (storeObj.index_list) {
                (storeObj.index_list).forEach((item, index) => {
                  if (item.unique === undefined || item.unique === "undefined") {
                    store.createIndex(item.name, item.field);
                  } else {
                    store.createIndex(item.name, item.field, { unique: true });
                  }

                  if (storeObj.initial_data_list) {
                    (storeObj.initial_data_list).forEach((item, index) => {
                      store.put(item);
                    });
                  }
                });
              }
            });
          };

          request.onsuccess = function () {
            db = request.result;
            if (duplicate) {
              socket.transmit('create_database', "Database already exists, upgrade it to add object stores");
            } else {
              socket.transmit('create_database', { name: db.name, version: db.version });
            }
          };

          request.onerror = function () {
            console.log("Error", request.error);
          };
        }
      })();

      (async () => {
        for await (let data of socket.receiver('upgrade_database')) {
          const request = indexedDB.open(data.db_name, data.version);
          let db, up = false;
          request.onupgradeneeded = function (event) {
            const db = request.result;
            if (event.oldVersion < data.version) {
              up = true;
            }
            (data.object_store_list).forEach((storeObj, index) => {
              if (!_.contains(db.objectStoreNames, storeObj.name)) {
                var store = db.createObjectStore(storeObj.name, { keyPath: storeObj.keyPath });
                if (storeObj.index_list) {
                  (storeObj.index_list).forEach((item, index) => {
                    if (item.unique === undefined || item.unique === "undefined") {
                      store.createIndex(item.name, item.field);
                    } else {
                      store.createIndex(item.name, item.field, { unique: true });
                    }

                    if (storeObj.initial_data_list) {
                      (storeObj.initial_data_list).forEach((item, index) => {
                        store.put(item);
                      });
                    }

                  });
                }

              }
            });

          }

          request.onsuccess = function () {
            db = request.result;
            if (up === true) {
              socket.transmit('upgrade_database', { name: db.name, version: db.version });
            } else {
              socket.transmit('upgrade_database', "Upgrade aborted, version is equal or lower than your current database !");
            }
          };

          request.onerror = function () {
            console.log("Error", request.error);
          };

        }
      })();

      (async () => {
        for await (let data of socket.receiver('populate_database')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              var request;
              (data.object_list).forEach((item, index) => {
                request = store.add(item);
              });

              request.onsuccess = function () {
                socket.transmit('populate_database', data);
              };

              request.onerror = function () {
                console.log("Error", request.error);
              };

              tx.oncomplete = function () {
                console.log("transacton complete successfully !")
              };

            } else {
              socket.transmit('populate_database', "Object store <" + data.object_store + "> not found !");
            }
          };
        }
      })();

      (async () => {
        for await (let data of socket.receiver('search_single_by_index')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              const index = store.index(data.index);
              const request = index.get(data.field);
              request.onsuccess = function () {
                const matching = request.result;
                if (matching !== undefined) {
                  console.log(matching);
                } else {
                  console.long("No match found !")
                }
                socket.transmit('search_single_by_index', matching);

              };
            } else {
              socket.transmit('search_single_by_index', "Object store <" + data.object_store + "> not found !");
            }
          }
        }
      })();

      (async () => {
        for await (let data of socket.receiver('search_all_by_index')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              const index = store.index(data.index);
              if (data.limit === undefined || data.limit === "undefined") {
                var request = index.getAll(data.field);
              } else {
                var request = index.getAll(data.field, data.limit);
              }

              request.onsuccess = function () {
                if (request.result !== undefined) {
                  console.log("Objects", request.result);
                } else {
                  console.log("No such Objects");
                }
                socket.transmit('search_all_by_index', request.result);
              };
            } else {
              socket.transmit('search_all_by_index', "Object store <" + data.object_store + "> not found !");
            }
          }
        }
      })();

      (async () => {
        for await (let data of socket.receiver('get_count')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              if (data.bound) {
                var bound = data.bound.replace("[", "").replace("]", "").split(",");
                var request = store.count(IDBKeyRange.bound(Number(bound[0]), Number(bound[1])));
              } else if (data.lowerBound) {
                var lowerBound = data.lowerBound.replace("[", "").replace("]", "").split();
                var request = store.count(IDBKeyRange.lowerBound(Number(lowerBound[0]), true));
              } else if (data.upperBound) {
                var upperBound = data.upperBound.replace("[", "").replace("]", "").split();
                var request = store.count(IDBKeyRange.upperBound(Number(upperBound[0]), true));
              }

              request.onsuccess = function () {
                if (request.result !== undefined) {
                  console.log("count", request.result);
                } else {
                  console.log("No Object found");
                }
                socket.transmit('get_count', request.result);
              };
            } else {
              socket.transmit('get_count', "Object store <" + data.object_store + "> not found !");
            }
          }

        }
      })();

      (async () => {
        for await (let data of socket.receiver('get_all_by_range')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              if (data.bound) {
                var bound = data.bound.replace("[", "").replace("]", "").split(",");
                var request = store.getAll(IDBKeyRange.bound(Number(bound[0]), Number(bound[1])));
              } else if (data.lowerBound) {
                var lowerBound = data.lowerBound.replace("[", "").replace("]", "").split();
                var request = store.getAll(IDBKeyRange.lowerBound(Number(lowerBound[0]), true));
              } else if (data.upperBound) {
                var upperBound = data.upperBound.replace("[", "").replace("]", "").split();
                var request = store.getAll(IDBKeyRange.upperBound(Number(upperBound[0]), true));
              }

              request.onsuccess = function () {
                if (request.result !== undefined) {
                  console.log("result", request.result);
                } else {
                  console.log("No Object found");
                }
                socket.transmit('get_all_by_range', request.result);
              };
            } else {
              socket.transmit('get_all_by_range', "Object store <" + data.object_store + "> not found !");
            }
          }

        }
      })();

      (async () => {
        for await (let data of socket.receiver('get_first_by_range')) {
          const openRequest = indexedDB.open(data.db_name);
          openRequest.onsuccess = function () {
            let db = openRequest.result;
            if (_.contains(db.objectStoreNames, data.object_store)) {
              const tx = db.transaction(data.object_store, "readwrite");
              const store = tx.objectStore(data.object_store);
              if (data.bound) {
                var bound = data.bound.replace("[", "").replace("]", "").split(",");
                var request = store.get(IDBKeyRange.bound(Number(bound[0]), Number(bound[1])));
              } else if (data.lowerBound) {
                var lowerBound = data.lowerBound.replace("[", "").replace("]", "").split();
                var request = store.get(IDBKeyRange.lowerBound(Number(lowerBound[0]), true));
              } else if (data.upperBound) {
                var upperBound = data.upperBound.replace("[", "").replace("]", "").split();
                var request = store.get(IDBKeyRange.upperBound(Number(upperBound[0]), true));
              }

              request.onsuccess = function () {
                if (request.result !== undefined) {
                  console.log("result", request.result);

                } else {
                  console.log("No Object found");
                }
                socket.transmit("get_first_by_range", request.result);
              };

              request.onerror = function () {
                console.log(request.error)
              }

            } else {
              socket.transmit('get_first_by_range', "Object store <" + data.object_store + "> not found !");
            }

          }
        }
      })();

    }
  })();

}

start();
