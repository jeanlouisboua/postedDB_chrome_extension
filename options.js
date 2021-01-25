const button = document.getElementById("save");

button.addEventListener('click', function() {
    var url = document.getElementById("url").value;
    console.log("button clicked : "+ url);
  chrome.storage.sync.set({endpoint: url}, function() {
    console.log('endpoint is ' + url);
    url.disabled = true;
    setTimeout(function(){
         window.close();
    },2000);
  }) 
});
