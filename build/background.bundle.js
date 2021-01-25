/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncIterator.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "../node_modules/base64-js/index.js":
/*!******************************************!*\
  !*** ../node_modules/base64-js/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "../node_modules/ieee754/index.js":
/*!****************************************!*\
  !*** ../node_modules/ieee754/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "../node_modules/isarray/index.js":
/*!****************************************!*\
  !*** ../node_modules/isarray/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "../node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!**********************************************************************!*\
  !*** ../node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "../node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "../node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "../node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/querystring-es3/decode.js":
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),

/***/ "../node_modules/querystring-es3/encode.js":
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/encode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (_typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (_typeof(obj) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ }),

/***/ "../node_modules/querystring-es3/index.js":
/*!************************************************!*\
  !*** ../node_modules/querystring-es3/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../node_modules/querystring-es3/encode.js");

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./background.js":
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _asyncIterator = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "../node_modules/@babel/runtime/helpers/asyncIterator.js");

var socketClusterClient = __webpack_require__(/*! socketcluster-client */ "./node_modules/socketcluster-client/index.js");

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");

chrome.runtime.onInstalled.addListener(function () {
  console.log("Background is running....");
  chrome.storage.sync.set({
    endpoint: "http://18.218.79.85:8000"
  }, function () {
    console.log('endpoint stored sucessfully !');
  });
});

function start() {
  var socket = socketClusterClient.create({
    hostname: '18.218.79.85',
    port: 8000
  });

  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value10, event;

    return _regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context9.prev = 2;
            _iterator = _asyncIterator(socket.listener('connect'));

          case 4:
            _context9.next = 6;
            return _iterator.next();

          case 6:
            _step = _context9.sent;
            _iteratorNormalCompletion = _step.done;
            _context9.next = 10;
            return _step.value;

          case 10:
            _value = _context9.sent;

            if (_iteratorNormalCompletion) {
              _context9.next = 24;
              break;
            }

            _value10 = _value, event = _value10.event;

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
              var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2, _value2, duplicate;

              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _context.prev = 2;

                      _loop = function _loop() {
                        var data = _value2;
                        var promise = indexedDB.databases();
                        promise.then(function (databases) {
                          duplicate = _.find(databases, function (idb) {
                            return idb.name === data.db_name;
                          });
                        });
                        var request = indexedDB.open(data.db_name, 1);
                        var db = void 0;

                        request.onupgradeneeded = function () {
                          var db = request.result;
                          data.object_store_list.forEach(function (storeObj, index) {
                            var store = db.createObjectStore(storeObj.name, {
                              keyPath: storeObj.keyPath
                            });

                            if (storeObj.index_list) {
                              storeObj.index_list.forEach(function (item, index) {
                                if (item.unique === undefined || item.unique === "undefined") {
                                  store.createIndex(item.name, item.field);
                                } else {
                                  store.createIndex(item.name, item.field, {
                                    unique: true
                                  });
                                }

                                if (storeObj.initial_data_list) {
                                  storeObj.initial_data_list.forEach(function (item, index) {
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
                            socket.transmit('create_database', {
                              name: db.name,
                              version: db.version
                            });
                          }
                        };

                        request.onerror = function () {
                          console.log("Error", request.error);
                        };
                      };

                      _iterator2 = _asyncIterator(socket.receiver('create_database'));

                    case 5:
                      _context.next = 7;
                      return _iterator2.next();

                    case 7:
                      _step2 = _context.sent;
                      _iteratorNormalCompletion2 = _step2.done;
                      _context.next = 11;
                      return _step2.value;

                    case 11:
                      _value2 = _context.sent;

                      if (_iteratorNormalCompletion2) {
                        _context.next = 17;
                        break;
                      }

                      _loop();

                    case 14:
                      _iteratorNormalCompletion2 = true;
                      _context.next = 5;
                      break;

                    case 17:
                      _context.next = 23;
                      break;

                    case 19:
                      _context.prev = 19;
                      _context.t0 = _context["catch"](2);
                      _didIteratorError2 = true;
                      _iteratorError2 = _context.t0;

                    case 23:
                      _context.prev = 23;
                      _context.prev = 24;

                      if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
                        _context.next = 28;
                        break;
                      }

                      _context.next = 28;
                      return _iterator2["return"]();

                    case 28:
                      _context.prev = 28;

                      if (!_didIteratorError2) {
                        _context.next = 31;
                        break;
                      }

                      throw _iteratorError2;

                    case 31:
                      return _context.finish(28);

                    case 32:
                      return _context.finish(23);

                    case 33:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
              var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _loop2, _iterator3, _step3, _value3;

              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _iteratorNormalCompletion3 = true;
                      _didIteratorError3 = false;
                      _context2.prev = 2;

                      _loop2 = function _loop2() {
                        var data = _value3;
                        var request = indexedDB.open(data.db_name, data.version);
                        var db = void 0,
                            up = false;

                        request.onupgradeneeded = function (event) {
                          var db = request.result;

                          if (event.oldVersion < data.version) {
                            up = true;
                          }

                          data.object_store_list.forEach(function (storeObj, index) {
                            if (!_.contains(db.objectStoreNames, storeObj.name)) {
                              var store = db.createObjectStore(storeObj.name, {
                                keyPath: storeObj.keyPath
                              });

                              if (storeObj.index_list) {
                                storeObj.index_list.forEach(function (item, index) {
                                  if (item.unique === undefined || item.unique === "undefined") {
                                    store.createIndex(item.name, item.field);
                                  } else {
                                    store.createIndex(item.name, item.field, {
                                      unique: true
                                    });
                                  }

                                  if (storeObj.initial_data_list) {
                                    storeObj.initial_data_list.forEach(function (item, index) {
                                      store.put(item);
                                    });
                                  }
                                });
                              }
                            }
                          });
                        };

                        request.onsuccess = function () {
                          db = request.result;

                          if (up === true) {
                            socket.transmit('upgrade_database', {
                              name: db.name,
                              version: db.version
                            });
                          } else {
                            socket.transmit('upgrade_database', "Upgrade aborted, version is equal or lower than your current database !");
                          }
                        };

                        request.onerror = function () {
                          console.log("Error", request.error);
                        };
                      };

                      _iterator3 = _asyncIterator(socket.receiver('upgrade_database'));

                    case 5:
                      _context2.next = 7;
                      return _iterator3.next();

                    case 7:
                      _step3 = _context2.sent;
                      _iteratorNormalCompletion3 = _step3.done;
                      _context2.next = 11;
                      return _step3.value;

                    case 11:
                      _value3 = _context2.sent;

                      if (_iteratorNormalCompletion3) {
                        _context2.next = 17;
                        break;
                      }

                      _loop2();

                    case 14:
                      _iteratorNormalCompletion3 = true;
                      _context2.next = 5;
                      break;

                    case 17:
                      _context2.next = 23;
                      break;

                    case 19:
                      _context2.prev = 19;
                      _context2.t0 = _context2["catch"](2);
                      _didIteratorError3 = true;
                      _iteratorError3 = _context2.t0;

                    case 23:
                      _context2.prev = 23;
                      _context2.prev = 24;

                      if (!(!_iteratorNormalCompletion3 && _iterator3["return"] != null)) {
                        _context2.next = 28;
                        break;
                      }

                      _context2.next = 28;
                      return _iterator3["return"]();

                    case 28:
                      _context2.prev = 28;

                      if (!_didIteratorError3) {
                        _context2.next = 31;
                        break;
                      }

                      throw _iteratorError3;

                    case 31:
                      return _context2.finish(28);

                    case 32:
                      return _context2.finish(23);

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _loop3, _iterator4, _step4, _value4;

              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _iteratorNormalCompletion4 = true;
                      _didIteratorError4 = false;
                      _context3.prev = 2;

                      _loop3 = function _loop3() {
                        var data = _value4;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);
                            var request;
                            data.object_list.forEach(function (item, index) {
                              request = store.add(item);
                            });

                            request.onsuccess = function () {
                              socket.transmit('populate_database', data);
                            };

                            request.onerror = function () {
                              console.log("Error", request.error);
                            };

                            tx.oncomplete = function () {
                              console.log("transacton complete successfully !");
                            };
                          } else {
                            socket.transmit('populate_database', "Object store <" + data.object_store + "> not found !");
                          }
                        };
                      };

                      _iterator4 = _asyncIterator(socket.receiver('populate_database'));

                    case 5:
                      _context3.next = 7;
                      return _iterator4.next();

                    case 7:
                      _step4 = _context3.sent;
                      _iteratorNormalCompletion4 = _step4.done;
                      _context3.next = 11;
                      return _step4.value;

                    case 11:
                      _value4 = _context3.sent;

                      if (_iteratorNormalCompletion4) {
                        _context3.next = 17;
                        break;
                      }

                      _loop3();

                    case 14:
                      _iteratorNormalCompletion4 = true;
                      _context3.next = 5;
                      break;

                    case 17:
                      _context3.next = 23;
                      break;

                    case 19:
                      _context3.prev = 19;
                      _context3.t0 = _context3["catch"](2);
                      _didIteratorError4 = true;
                      _iteratorError4 = _context3.t0;

                    case 23:
                      _context3.prev = 23;
                      _context3.prev = 24;

                      if (!(!_iteratorNormalCompletion4 && _iterator4["return"] != null)) {
                        _context3.next = 28;
                        break;
                      }

                      _context3.next = 28;
                      return _iterator4["return"]();

                    case 28:
                      _context3.prev = 28;

                      if (!_didIteratorError4) {
                        _context3.next = 31;
                        break;
                      }

                      throw _iteratorError4;

                    case 31:
                      return _context3.finish(28);

                    case 32:
                      return _context3.finish(23);

                    case 33:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
              var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _loop4, _iterator5, _step5, _value5;

              return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _iteratorNormalCompletion5 = true;
                      _didIteratorError5 = false;
                      _context4.prev = 2;

                      _loop4 = function _loop4() {
                        var data = _value5;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);
                            var index = store.index(data.index);
                            var request = index.get(data.field);

                            request.onsuccess = function () {
                              var matching = request.result;

                              if (matching !== undefined) {
                                console.log(matching);
                              } else {
                                console["long"]("No match found !");
                              }

                              socket.transmit('search_single_by_index', matching);
                            };
                          } else {
                            socket.transmit('search_single_by_index', "Object store <" + data.object_store + "> not found !");
                          }
                        };
                      };

                      _iterator5 = _asyncIterator(socket.receiver('search_single_by_index'));

                    case 5:
                      _context4.next = 7;
                      return _iterator5.next();

                    case 7:
                      _step5 = _context4.sent;
                      _iteratorNormalCompletion5 = _step5.done;
                      _context4.next = 11;
                      return _step5.value;

                    case 11:
                      _value5 = _context4.sent;

                      if (_iteratorNormalCompletion5) {
                        _context4.next = 17;
                        break;
                      }

                      _loop4();

                    case 14:
                      _iteratorNormalCompletion5 = true;
                      _context4.next = 5;
                      break;

                    case 17:
                      _context4.next = 23;
                      break;

                    case 19:
                      _context4.prev = 19;
                      _context4.t0 = _context4["catch"](2);
                      _didIteratorError5 = true;
                      _iteratorError5 = _context4.t0;

                    case 23:
                      _context4.prev = 23;
                      _context4.prev = 24;

                      if (!(!_iteratorNormalCompletion5 && _iterator5["return"] != null)) {
                        _context4.next = 28;
                        break;
                      }

                      _context4.next = 28;
                      return _iterator5["return"]();

                    case 28:
                      _context4.prev = 28;

                      if (!_didIteratorError5) {
                        _context4.next = 31;
                        break;
                      }

                      throw _iteratorError5;

                    case 31:
                      return _context4.finish(28);

                    case 32:
                      return _context4.finish(23);

                    case 33:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
              var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _loop5, _iterator6, _step6, _value6;

              return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _iteratorNormalCompletion6 = true;
                      _didIteratorError6 = false;
                      _context5.prev = 2;

                      _loop5 = function _loop5() {
                        var data = _value6;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);
                            var index = store.index(data.index);

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
                        };
                      };

                      _iterator6 = _asyncIterator(socket.receiver('search_all_by_index'));

                    case 5:
                      _context5.next = 7;
                      return _iterator6.next();

                    case 7:
                      _step6 = _context5.sent;
                      _iteratorNormalCompletion6 = _step6.done;
                      _context5.next = 11;
                      return _step6.value;

                    case 11:
                      _value6 = _context5.sent;

                      if (_iteratorNormalCompletion6) {
                        _context5.next = 17;
                        break;
                      }

                      _loop5();

                    case 14:
                      _iteratorNormalCompletion6 = true;
                      _context5.next = 5;
                      break;

                    case 17:
                      _context5.next = 23;
                      break;

                    case 19:
                      _context5.prev = 19;
                      _context5.t0 = _context5["catch"](2);
                      _didIteratorError6 = true;
                      _iteratorError6 = _context5.t0;

                    case 23:
                      _context5.prev = 23;
                      _context5.prev = 24;

                      if (!(!_iteratorNormalCompletion6 && _iterator6["return"] != null)) {
                        _context5.next = 28;
                        break;
                      }

                      _context5.next = 28;
                      return _iterator6["return"]();

                    case 28:
                      _context5.prev = 28;

                      if (!_didIteratorError6) {
                        _context5.next = 31;
                        break;
                      }

                      throw _iteratorError6;

                    case 31:
                      return _context5.finish(28);

                    case 32:
                      return _context5.finish(23);

                    case 33:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
              var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _loop6, _iterator7, _step7, _value7;

              return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _iteratorNormalCompletion7 = true;
                      _didIteratorError7 = false;
                      _context6.prev = 2;

                      _loop6 = function _loop6() {
                        var data = _value7;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);

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
                        };
                      };

                      _iterator7 = _asyncIterator(socket.receiver('get_count'));

                    case 5:
                      _context6.next = 7;
                      return _iterator7.next();

                    case 7:
                      _step7 = _context6.sent;
                      _iteratorNormalCompletion7 = _step7.done;
                      _context6.next = 11;
                      return _step7.value;

                    case 11:
                      _value7 = _context6.sent;

                      if (_iteratorNormalCompletion7) {
                        _context6.next = 17;
                        break;
                      }

                      _loop6();

                    case 14:
                      _iteratorNormalCompletion7 = true;
                      _context6.next = 5;
                      break;

                    case 17:
                      _context6.next = 23;
                      break;

                    case 19:
                      _context6.prev = 19;
                      _context6.t0 = _context6["catch"](2);
                      _didIteratorError7 = true;
                      _iteratorError7 = _context6.t0;

                    case 23:
                      _context6.prev = 23;
                      _context6.prev = 24;

                      if (!(!_iteratorNormalCompletion7 && _iterator7["return"] != null)) {
                        _context6.next = 28;
                        break;
                      }

                      _context6.next = 28;
                      return _iterator7["return"]();

                    case 28:
                      _context6.prev = 28;

                      if (!_didIteratorError7) {
                        _context6.next = 31;
                        break;
                      }

                      throw _iteratorError7;

                    case 31:
                      return _context6.finish(28);

                    case 32:
                      return _context6.finish(23);

                    case 33:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
              var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _loop7, _iterator8, _step8, _value8;

              return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _iteratorNormalCompletion8 = true;
                      _didIteratorError8 = false;
                      _context7.prev = 2;

                      _loop7 = function _loop7() {
                        var data = _value8;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);

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
                        };
                      };

                      _iterator8 = _asyncIterator(socket.receiver('get_all_by_range'));

                    case 5:
                      _context7.next = 7;
                      return _iterator8.next();

                    case 7:
                      _step8 = _context7.sent;
                      _iteratorNormalCompletion8 = _step8.done;
                      _context7.next = 11;
                      return _step8.value;

                    case 11:
                      _value8 = _context7.sent;

                      if (_iteratorNormalCompletion8) {
                        _context7.next = 17;
                        break;
                      }

                      _loop7();

                    case 14:
                      _iteratorNormalCompletion8 = true;
                      _context7.next = 5;
                      break;

                    case 17:
                      _context7.next = 23;
                      break;

                    case 19:
                      _context7.prev = 19;
                      _context7.t0 = _context7["catch"](2);
                      _didIteratorError8 = true;
                      _iteratorError8 = _context7.t0;

                    case 23:
                      _context7.prev = 23;
                      _context7.prev = 24;

                      if (!(!_iteratorNormalCompletion8 && _iterator8["return"] != null)) {
                        _context7.next = 28;
                        break;
                      }

                      _context7.next = 28;
                      return _iterator8["return"]();

                    case 28:
                      _context7.prev = 28;

                      if (!_didIteratorError8) {
                        _context7.next = 31;
                        break;
                      }

                      throw _iteratorError8;

                    case 31:
                      return _context7.finish(28);

                    case 32:
                      return _context7.finish(23);

                    case 33:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
              var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _loop8, _iterator9, _step9, _value9;

              return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _iteratorNormalCompletion9 = true;
                      _didIteratorError9 = false;
                      _context8.prev = 2;

                      _loop8 = function _loop8() {
                        var data = _value9;
                        var openRequest = indexedDB.open(data.db_name);

                        openRequest.onsuccess = function () {
                          var db = openRequest.result;

                          if (_.contains(db.objectStoreNames, data.object_store)) {
                            var tx = db.transaction(data.object_store, "readwrite");
                            var store = tx.objectStore(data.object_store);

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
                              console.log(request.error);
                            };
                          } else {
                            socket.transmit('get_first_by_range', "Object store <" + data.object_store + "> not found !");
                          }
                        };
                      };

                      _iterator9 = _asyncIterator(socket.receiver('get_first_by_range'));

                    case 5:
                      _context8.next = 7;
                      return _iterator9.next();

                    case 7:
                      _step9 = _context8.sent;
                      _iteratorNormalCompletion9 = _step9.done;
                      _context8.next = 11;
                      return _step9.value;

                    case 11:
                      _value9 = _context8.sent;

                      if (_iteratorNormalCompletion9) {
                        _context8.next = 17;
                        break;
                      }

                      _loop8();

                    case 14:
                      _iteratorNormalCompletion9 = true;
                      _context8.next = 5;
                      break;

                    case 17:
                      _context8.next = 23;
                      break;

                    case 19:
                      _context8.prev = 19;
                      _context8.t0 = _context8["catch"](2);
                      _didIteratorError9 = true;
                      _iteratorError9 = _context8.t0;

                    case 23:
                      _context8.prev = 23;
                      _context8.prev = 24;

                      if (!(!_iteratorNormalCompletion9 && _iterator9["return"] != null)) {
                        _context8.next = 28;
                        break;
                      }

                      _context8.next = 28;
                      return _iterator9["return"]();

                    case 28:
                      _context8.prev = 28;

                      if (!_didIteratorError9) {
                        _context8.next = 31;
                        break;
                      }

                      throw _iteratorError9;

                    case 31:
                      return _context8.finish(28);

                    case 32:
                      return _context8.finish(23);

                    case 33:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, null, [[2, 19, 23, 33], [24,, 28, 32]]);
            }))();

          case 21:
            _iteratorNormalCompletion = true;
            _context9.next = 4;
            break;

          case 24:
            _context9.next = 30;
            break;

          case 26:
            _context9.prev = 26;
            _context9.t0 = _context9["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context9.t0;

          case 30:
            _context9.prev = 30;
            _context9.prev = 31;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context9.next = 35;
              break;
            }

            _context9.next = 35;
            return _iterator["return"]();

          case 35:
            _context9.prev = 35;

            if (!_didIteratorError) {
              _context9.next = 38;
              break;
            }

            throw _iteratorError;

          case 38:
            return _context9.finish(35);

          case 39:
            return _context9.finish(30);

          case 40:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 26, 30, 40], [31,, 35, 39]]);
  }))();
}

start();

/***/ }),

/***/ "./node_modules/ag-channel/index.js":
/*!******************************************!*\
  !*** ./node_modules/ag-channel/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConsumableStream = __webpack_require__(/*! consumable-stream */ "./node_modules/consumable-stream/index.js");

var AGChannel = /*#__PURE__*/function (_ConsumableStream) {
  "use strict";

  _inherits(AGChannel, _ConsumableStream);

  var _super = _createSuper(AGChannel);

  function AGChannel(name, client, eventDemux, dataDemux) {
    var _this;

    _classCallCheck(this, AGChannel);

    _this = _super.call(this);
    _this.PENDING = AGChannel.PENDING;
    _this.SUBSCRIBED = AGChannel.SUBSCRIBED;
    _this.UNSUBSCRIBED = AGChannel.UNSUBSCRIBED;
    _this.name = name;
    _this.client = client;
    _this._eventDemux = eventDemux;
    _this._dataStream = dataDemux.stream(_this.name);
    return _this;
  }

  _createClass(AGChannel, [{
    key: "createConsumer",
    value: function createConsumer(timeout) {
      return this._dataStream.createConsumer(timeout);
    }
  }, {
    key: "listener",
    value: function listener(eventName) {
      return this._eventDemux.stream("".concat(this.name, "/").concat(eventName));
    }
  }, {
    key: "close",
    value: function close() {
      this.client.closeChannel(this.name);
    }
  }, {
    key: "kill",
    value: function kill() {
      this.client.killChannel(this.name);
    }
  }, {
    key: "killOutputConsumer",
    value: function killOutputConsumer(consumerId) {
      if (this.hasOutputConsumer(consumerId)) {
        this.client.killChannelOutputConsumer(consumerId);
      }
    }
  }, {
    key: "killListenerConsumer",
    value: function killListenerConsumer(consumerId) {
      if (this.hasAnyListenerConsumer(consumerId)) {
        this.client.killChannelListenerConsumer(consumerId);
      }
    }
  }, {
    key: "getOutputConsumerStats",
    value: function getOutputConsumerStats(consumerId) {
      if (this.hasOutputConsumer(consumerId)) {
        return this.client.getChannelOutputConsumerStats(consumerId);
      }

      return undefined;
    }
  }, {
    key: "getListenerConsumerStats",
    value: function getListenerConsumerStats(consumerId) {
      if (this.hasAnyListenerConsumer(consumerId)) {
        return this.client.getChannelListenerConsumerStats(consumerId);
      }

      return undefined;
    }
  }, {
    key: "getBackpressure",
    value: function getBackpressure() {
      return this.client.getChannelBackpressure(this.name);
    }
  }, {
    key: "getListenerConsumerBackpressure",
    value: function getListenerConsumerBackpressure(consumerId) {
      if (this.hasAnyListenerConsumer(consumerId)) {
        return this.client.getChannelListenerConsumerBackpressure(consumerId);
      }

      return 0;
    }
  }, {
    key: "getOutputConsumerBackpressure",
    value: function getOutputConsumerBackpressure(consumerId) {
      if (this.hasOutputConsumer(consumerId)) {
        return this.client.getChannelOutputConsumerBackpressure(consumerId);
      }

      return 0;
    }
  }, {
    key: "closeOutput",
    value: function closeOutput() {
      this.client.channelCloseOutput(this.name);
    }
  }, {
    key: "closeListener",
    value: function closeListener(eventName) {
      this.client.channelCloseListener(this.name, eventName);
    }
  }, {
    key: "closeAllListeners",
    value: function closeAllListeners() {
      this.client.channelCloseAllListeners(this.name);
    }
  }, {
    key: "killOutput",
    value: function killOutput() {
      this.client.channelKillOutput(this.name);
    }
  }, {
    key: "killListener",
    value: function killListener(eventName) {
      this.client.channelKillListener(this.name, eventName);
    }
  }, {
    key: "killAllListeners",
    value: function killAllListeners() {
      this.client.channelKillAllListeners(this.name);
    }
  }, {
    key: "getOutputConsumerStatsList",
    value: function getOutputConsumerStatsList() {
      return this.client.channelGetOutputConsumerStatsList(this.name);
    }
  }, {
    key: "getListenerConsumerStatsList",
    value: function getListenerConsumerStatsList(eventName) {
      return this.client.channelGetListenerConsumerStatsList(this.name, eventName);
    }
  }, {
    key: "getAllListenersConsumerStatsList",
    value: function getAllListenersConsumerStatsList() {
      return this.client.channelGetAllListenersConsumerStatsList(this.name);
    }
  }, {
    key: "getOutputBackpressure",
    value: function getOutputBackpressure() {
      return this.client.channelGetOutputBackpressure(this.name);
    }
  }, {
    key: "getListenerBackpressure",
    value: function getListenerBackpressure(eventName) {
      return this.client.channelGetListenerBackpressure(this.name, eventName);
    }
  }, {
    key: "getAllListenersBackpressure",
    value: function getAllListenersBackpressure() {
      return this.client.channelGetAllListenersBackpressure(this.name);
    }
  }, {
    key: "hasOutputConsumer",
    value: function hasOutputConsumer(consumerId) {
      return this.client.channelHasOutputConsumer(this.name, consumerId);
    }
  }, {
    key: "hasListenerConsumer",
    value: function hasListenerConsumer(eventName, consumerId) {
      return this.client.channelHasListenerConsumer(this.name, eventName, consumerId);
    }
  }, {
    key: "hasAnyListenerConsumer",
    value: function hasAnyListenerConsumer(consumerId) {
      return this.client.channelHasAnyListenerConsumer(this.name, consumerId);
    }
  }, {
    key: "subscribe",
    value: function subscribe(options) {
      this.client.subscribe(this.name, options);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.client.unsubscribe(this.name);
    }
  }, {
    key: "isSubscribed",
    value: function isSubscribed(includePending) {
      return this.client.isSubscribed(this.name, includePending);
    }
  }, {
    key: "transmitPublish",
    value: function transmitPublish(data) {
      return this.client.transmitPublish(this.name, data);
    }
  }, {
    key: "invokePublish",
    value: function invokePublish(data) {
      return this.client.invokePublish(this.name, data);
    }
  }, {
    key: "state",
    get: function get() {
      return this.client.getChannelState(this.name);
    },
    set: function set(value) {
      throw new Error('Cannot directly set channel state');
    }
  }, {
    key: "options",
    get: function get() {
      return this.client.getChannelOptions(this.name);
    },
    set: function set(value) {
      throw new Error('Cannot directly set channel options');
    }
  }]);

  return AGChannel;
}(ConsumableStream);

AGChannel.PENDING = 'pending';
AGChannel.SUBSCRIBED = 'subscribed';
AGChannel.UNSUBSCRIBED = 'unsubscribed';
module.exports = AGChannel;

/***/ }),

/***/ "./node_modules/ag-request/index.js":
/*!******************************************!*\
  !*** ./node_modules/ag-request/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scErrors = __webpack_require__(/*! sc-errors */ "./node_modules/sc-errors/index.js");

var InvalidActionError = scErrors.InvalidActionError;

function AGRequest(socket, id, procedureName, data) {
  var _this = this;

  this.socket = socket;
  this.id = id;
  this.procedure = procedureName;
  this.data = data;
  this.sent = false;

  this._respond = function (responseData, options) {
    if (_this.sent) {
      throw new InvalidActionError("Response to request ".concat(_this.id, " has already been sent"));
    }

    _this.sent = true;

    _this.socket.sendObject(responseData, options);
  };

  this.end = function (data, options) {
    var responseData = {
      rid: _this.id
    };

    if (data !== undefined) {
      responseData.data = data;
    }

    _this._respond(responseData, options);
  };

  this.error = function (error, options) {
    var responseData = {
      rid: _this.id,
      error: scErrors.dehydrateError(error)
    };

    _this._respond(responseData, options);
  };
}

module.exports = AGRequest;

/***/ }),

/***/ "./node_modules/async-stream-emitter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/async-stream-emitter/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var StreamDemux = __webpack_require__(/*! stream-demux */ "./node_modules/stream-demux/index.js");

function AsyncStreamEmitter() {
  this._listenerDemux = new StreamDemux();
}

AsyncStreamEmitter.prototype.emit = function (eventName, data) {
  this._listenerDemux.write(eventName, data);
};

AsyncStreamEmitter.prototype.listener = function (eventName) {
  return this._listenerDemux.stream(eventName);
};

AsyncStreamEmitter.prototype.closeListener = function (eventName) {
  this._listenerDemux.close(eventName);
};

AsyncStreamEmitter.prototype.closeAllListeners = function () {
  this._listenerDemux.closeAll();
};

AsyncStreamEmitter.prototype.getListenerConsumerStats = function (consumerId) {
  return this._listenerDemux.getConsumerStats(consumerId);
};

AsyncStreamEmitter.prototype.getListenerConsumerStatsList = function (eventName) {
  return this._listenerDemux.getConsumerStatsList(eventName);
};

AsyncStreamEmitter.prototype.getAllListenersConsumerStatsList = function () {
  return this._listenerDemux.getConsumerStatsListAll();
};

AsyncStreamEmitter.prototype.killListener = function (eventName) {
  this._listenerDemux.kill(eventName);
};

AsyncStreamEmitter.prototype.killAllListeners = function () {
  this._listenerDemux.killAll();
};

AsyncStreamEmitter.prototype.killListenerConsumer = function (consumerId) {
  this._listenerDemux.killConsumer(consumerId);
};

AsyncStreamEmitter.prototype.getListenerBackpressure = function (eventName) {
  return this._listenerDemux.getBackpressure(eventName);
};

AsyncStreamEmitter.prototype.getAllListenersBackpressure = function () {
  return this._listenerDemux.getBackpressureAll();
};

AsyncStreamEmitter.prototype.getListenerConsumerBackpressure = function (consumerId) {
  return this._listenerDemux.getConsumerBackpressure(consumerId);
};

AsyncStreamEmitter.prototype.hasListenerConsumer = function (eventName, consumerId) {
  return this._listenerDemux.hasConsumer(eventName, consumerId);
};

AsyncStreamEmitter.prototype.hasAnyListenerConsumer = function (consumerId) {
  return this._listenerDemux.hasConsumerAll(consumerId);
};

module.exports = AsyncStreamEmitter;

/***/ }),

/***/ "./node_modules/clone-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Module dependenices
 */

var clone = __webpack_require__(/*! shallow-clone */ "./node_modules/shallow-clone/index.js");

var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);

    case 'array':
      return cloneArrayDeep(val, instanceClone);

    default:
      {
        return clone(val);
      }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }

  if (instanceClone || isPlainObject(val)) {
    var res = new val.constructor();

    for (var key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }

    return res;
  }

  return val;
}

function cloneArrayDeep(val, instanceClone) {
  var res = new val.constructor(val.length);

  for (var i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }

  return res;
}
/**
 * Expose `cloneDeep`
 */


module.exports = cloneDeep;

/***/ }),

/***/ "./node_modules/consumable-stream/index.js":
/*!*************************************************!*\
  !*** ./node_modules/consumable-stream/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var ConsumableStream = /*#__PURE__*/function () {
  "use strict";

  function ConsumableStream() {
    _classCallCheck(this, ConsumableStream);
  }

  _createClass(ConsumableStream, [{
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(timeout) {
        var asyncIterator, result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asyncIterator = this.createConsumer(timeout);
                _context.next = 3;
                return asyncIterator.next();

              case 3:
                result = _context.sent;
                asyncIterator["return"]();
                return _context.abrupt("return", result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function next(_x) {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "once",
    value: function () {
      var _once = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(timeout) {
        var result;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.next(timeout);

              case 2:
                result = _context2.sent;

                if (!result.done) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return new Promise(function () {});

              case 6:
                return _context2.abrupt("return", result.value);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function once(_x2) {
        return _once.apply(this, arguments);
      }

      return once;
    }()
  }, {
    key: "createConsumer",
    value: function createConsumer() {
      throw new TypeError('Method must be overriden by subclass');
    }
  }, {
    key: Symbol.asyncIterator,
    value: function value() {
      return this.createConsumer();
    }
  }]);

  return ConsumableStream;
}();

module.exports = ConsumableStream;

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (typeof ctor !== 'function') return false; // If has modified prototype

  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
};

/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

module.exports = function isObject(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = _typeof(val);

  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';

  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';

    case 'Promise':
      return 'promise';
    // Set, Map, WeakSet, WeakMap

    case 'WeakMap':
      return 'weakmap';

    case 'WeakSet':
      return 'weakset';

    case 'Map':
      return 'map';

    case 'Set':
      return 'set';
    // 8-bit typed arrays

    case 'Int8Array':
      return 'int8array';

    case 'Uint8Array':
      return 'uint8array';

    case 'Uint8ClampedArray':
      return 'uint8clampedarray';
    // 16-bit typed arrays

    case 'Int16Array':
      return 'int16array';

    case 'Uint16Array':
      return 'uint16array';
    // 32-bit typed arrays

    case 'Int32Array':
      return 'int32array';

    case 'Uint32Array':
      return 'uint32array';

    case 'Float32Array':
      return 'float32array';

    case 'Float64Array':
      return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  } // Non-plain objects


  type = toString.call(val);

  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators

    case '[object Map Iterator]':
      return 'mapiterator';

    case '[object Set Iterator]':
      return 'setiterator';

    case '[object String Iterator]':
      return 'stringiterator';

    case '[object Array Iterator]':
      return 'arrayiterator';
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val["throw"] === 'function' && typeof val["return"] === 'function' && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }

  return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */


function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }

  return false;
}

/***/ }),

/***/ "./node_modules/linked-list/_source/linked-list.js":
/*!*********************************************************!*\
  !*** ./node_modules/linked-list/_source/linked-list.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Constants.
 */

var errorMessage;
errorMessage = 'An argument without append, prepend, ' + 'or detach methods was given to `List';
/**
 * Creates a new List: A linked list is a bit like an Array, but
 * knows nothing about how many items are in it, and knows only about its
 * first (`head`) and last (`tail`) items. Each item (e.g. `head`, `tail`,
 * &c.) knows which item comes before or after it (its more like the
 * implementation of the DOM in JavaScript).
 * @global
 * @private
 * @constructor
 * @class Represents an instance of List.
 */

function List()
/*items...*/
{
  if (arguments.length) {
    return List.from(arguments);
  }
}

var ListPrototype;
ListPrototype = List.prototype;
/**
 * Creates a new list from the arguments (each a list item) passed in.
 * @name List.of
 * @param {...ListItem} [items] - Zero or more items to attach.
 * @returns {list} - A new instance of List.
 */

List.of = function ()
/*items...*/
{
  return List.from.call(this, arguments);
};
/**
 * Creates a new list from the given array-like object (each a list item)
 * passed in.
 * @name List.from
 * @param {ListItem[]} [items] - The items to append.
 * @returns {list} - A new instance of List.
 */


List.from = function (items) {
  var list = new this(),
      length,
      iterator,
      item;

  if (items && (length = items.length)) {
    iterator = -1;

    while (++iterator < length) {
      item = items[iterator];

      if (item !== null && item !== undefined) {
        list.append(item);
      }
    }
  }

  return list;
};
/**
 * List#head
 * Default to `null`.
 */


ListPrototype.head = null;
/**
 * List#tail
 * Default to `null`.
 */

ListPrototype.tail = null;
/**
 * Returns the list's items as an array. This does *not* detach the items.
 * @name List#toArray
 * @returns {ListItem[]} - An array of (still attached) ListItems.
 */

ListPrototype.toArray = function () {
  var item = this.head,
      result = [];

  while (item) {
    result.push(item);
    item = item.next;
  }

  return result;
};
/**
 * Prepends the given item to the list: Item will be the new first item
 * (`head`).
 * @name List#prepend
 * @param {ListItem} item - The item to prepend.
 * @returns {ListItem} - An instance of ListItem (the given item).
 */


ListPrototype.prepend = function (item) {
  if (!item) {
    return false;
  }

  if (!item.append || !item.prepend || !item.detach) {
    throw new Error(errorMessage + '#prepend`.');
  }

  var self, head; // Cache self.

  self = this; // If self has a first item, defer prepend to the first items prepend
  // method, and return the result.

  head = self.head;

  if (head) {
    return head.prepend(item);
  } // ...otherwise, there is no `head` (or `tail`) item yet.
  // Detach the prependee.


  item.detach(); // Set the prependees parent list to reference self.

  item.list = self; // Set self's first item to the prependee, and return the item.

  self.head = item;
  return item;
};
/**
 * Appends the given item to the list: Item will be the new last item (`tail`)
 * if the list had a first item, and its first item (`head`) otherwise.
 * @name List#append
 * @param {ListItem} item - The item to append.
 * @returns {ListItem} - An instance of ListItem (the given item).
 */


ListPrototype.append = function (item) {
  if (!item) {
    return false;
  }

  if (!item.append || !item.prepend || !item.detach) {
    throw new Error(errorMessage + '#append`.');
  }

  var self, head, tail; // Cache self.

  self = this; // If self has a last item, defer appending to the last items append
  // method, and return the result.

  tail = self.tail;

  if (tail) {
    return tail.append(item);
  } // If self has a first item, defer appending to the first items append
  // method, and return the result.


  head = self.head;

  if (head) {
    return head.append(item);
  } // ...otherwise, there is no `tail` or `head` item yet.
  // Detach the appendee.


  item.detach(); // Set the appendees parent list to reference self.

  item.list = self; // Set self's first item to the appendee, and return the item.

  self.head = item;
  return item;
};
/**
 * Creates a new ListItem: A linked list item is a bit like DOM node:
 * It knows only about its "parent" (`list`), the item before it (`prev`),
 * and the item after it (`next`).
 * @global
 * @private
 * @constructor
 * @class Represents an instance of ListItem.
 */


function ListItem() {}

List.Item = ListItem;
var ListItemPrototype = ListItem.prototype;
ListItemPrototype.next = null;
ListItemPrototype.prev = null;
ListItemPrototype.list = null;
/**
 * Detaches the item operated on from its parent list.
 * @name ListItem#detach
 * @returns {ListItem} - The item operated on.
 */

ListItemPrototype.detach = function () {
  // Cache self, the parent list, and the previous and next items.
  var self = this,
      list = self.list,
      prev = self.prev,
      next = self.next; // If the item is already detached, return self.

  if (!list) {
    return self;
  } // If self is the last item in the parent list, link the lists last item
  // to the previous item.


  if (list.tail === self) {
    list.tail = prev;
  } // If self is the first item in the parent list, link the lists first item
  // to the next item.


  if (list.head === self) {
    list.head = next;
  } // If both the last and first items in the parent list are the same,
  // remove the link to the last item.


  if (list.tail === list.head) {
    list.tail = null;
  } // If a previous item exists, link its next item to selfs next item.


  if (prev) {
    prev.next = next;
  } // If a next item exists, link its previous item to selfs previous item.


  if (next) {
    next.prev = prev;
  } // Remove links from self to both the next and previous items, and to the
  // parent list.


  self.prev = self.next = self.list = null; // Return self.

  return self;
};
/**
 * Prepends the given item *before* the item operated on.
 * @name ListItem#prepend
 * @param {ListItem} item - The item to prepend.
 * @returns {ListItem} - The item operated on, or false when that item is not
 * attached.
 */


ListItemPrototype.prepend = function (item) {
  if (!item || !item.append || !item.prepend || !item.detach) {
    throw new Error(errorMessage + 'Item#prepend`.');
  } // Cache self, the parent list, and the previous item.


  var self = this,
      list = self.list,
      prev = self.prev; // If self is detached, return false.

  if (!list) {
    return false;
  } // Detach the prependee.


  item.detach(); // If self has a previous item...

  if (prev) {
    // ...link the prependees previous item, to selfs previous item.
    item.prev = prev; // ...link the previous items next item, to self.

    prev.next = item;
  } // Set the prependees next item to self.


  item.next = self; // Set the prependees parent list to selfs parent list.

  item.list = list; // Set the previous item of self to the prependee.

  self.prev = item; // If self is the first item in the parent list, link the lists first item
  // to the prependee.

  if (self === list.head) {
    list.head = item;
  } // If the the parent list has no last item, link the lists last item to
  // self.


  if (!list.tail) {
    list.tail = self;
  } // Return the prependee.


  return item;
};
/**
 * Appends the given item *after* the item operated on.
 * @name ListItem#append
 * @param {ListItem} item - The item to append.
 * @returns {ListItem} - The item operated on, or false when that item is not
 * attached.
 */


ListItemPrototype.append = function (item) {
  // If item is falsey, return false.
  if (!item || !item.append || !item.prepend || !item.detach) {
    throw new Error(errorMessage + 'Item#append`.');
  } // Cache self, the parent list, and the next item.


  var self = this,
      list = self.list,
      next = self.next; // If self is detached, return false.

  if (!list) {
    return false;
  } // Detach the appendee.


  item.detach(); // If self has a next item...

  if (next) {
    // ...link the appendees next item, to selfs next item.
    item.next = next; // ...link the next items previous item, to the appendee.

    next.prev = item;
  } // Set the appendees previous item to self.


  item.prev = self; // Set the appendees parent list to selfs parent list.

  item.list = list; // Set the next item of self to the appendee.

  self.next = item; // If the the parent list has no last item or if self is the parent lists
  // last item, link the lists last item to the appendee.

  if (self === list.tail || !list.tail) {
    list.tail = item;
  } // Return the appendee.


  return item;
};
/**
 * Expose `List`.
 */


module.exports = List;

/***/ }),

/***/ "./node_modules/linked-list/index.js":
/*!*******************************************!*\
  !*** ./node_modules/linked-list/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./_source/linked-list.js */ "./node_modules/linked-list/_source/linked-list.js");

/***/ }),

/***/ "./node_modules/sc-errors/decycle.js":
/*!*******************************************!*\
  !*** ./node_modules/sc-errors/decycle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

// Based on https://github.com/dscape/cycle/blob/master/cycle.js
module.exports = function decycle(object) {
  // Make a deep copy of an object or array, assuring that there is at most
  // one instance of each object or array in the resulting structure. The
  // duplicate references (which might be forming cycles) are replaced with
  // an object of the form
  //      {$ref: PATH}
  // where the PATH is a JSONPath string that locates the first occurance.
  // So,
  //      var a = [];
  //      a[0] = a;
  //      return JSON.stringify(JSON.decycle(a));
  // produces the string '[{"$ref":"$"}]'.
  // JSONPath is used to locate the unique object. $ indicates the top level of
  // the object or array. [NUMBER] or [STRING] indicates a child member or
  // property.
  var objects = [],
      // Keep a reference to each unique object or array
  paths = []; // Keep the path to each unique object or array

  return function derez(value, path) {
    // The derez recurses through the object, producing the deep copy.
    var i, // The loop counter
    name, // Property name
    nu; // The new object or array
    // typeof null === 'object', so go on if this value is really an object but not
    // one of the weird builtin objects.

    if (_typeof(value) === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String)) {
      // If the value is an object or array, look to see if we have already
      // encountered it. If so, return a $ref/path object. This is a hard way,
      // linear search that will get slower as the number of unique objects grows.
      for (i = 0; i < objects.length; i += 1) {
        if (objects[i] === value) {
          return {
            $ref: paths[i]
          };
        }
      } // Otherwise, accumulate the unique value and its path.


      objects.push(value);
      paths.push(path); // If it is an array, replicate the array.

      if (Object.prototype.toString.apply(value) === '[object Array]') {
        nu = [];

        for (i = 0; i < value.length; i += 1) {
          nu[i] = derez(value[i], path + '[' + i + ']');
        }
      } else {
        // If it is an object, replicate the object.
        nu = {};

        for (name in value) {
          if (Object.prototype.hasOwnProperty.call(value, name)) {
            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
          }
        }
      }

      return nu;
    }

    return value;
  }(object, '$');
};

/***/ }),

/***/ "./node_modules/sc-errors/index.js":
/*!*****************************************!*\
  !*** ./node_modules/sc-errors/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var decycle = __webpack_require__(/*! ./decycle */ "./node_modules/sc-errors/decycle.js");

var isStrict = function () {
  return !this;
}();

function AuthTokenExpiredError(message, expiry) {
  this.name = 'AuthTokenExpiredError';
  this.message = message;
  this.expiry = expiry;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

AuthTokenExpiredError.prototype = Object.create(Error.prototype);

function AuthTokenInvalidError(message) {
  this.name = 'AuthTokenInvalidError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

AuthTokenInvalidError.prototype = Object.create(Error.prototype);

function AuthTokenNotBeforeError(message, date) {
  this.name = 'AuthTokenNotBeforeError';
  this.message = message;
  this.date = date;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

AuthTokenNotBeforeError.prototype = Object.create(Error.prototype); // For any other auth token error.

function AuthTokenError(message) {
  this.name = 'AuthTokenError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

AuthTokenError.prototype = Object.create(Error.prototype); // For any other auth error; not specifically related to the auth token itself.

function AuthError(message) {
  this.name = 'AuthError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

AuthError.prototype = Object.create(Error.prototype);

function SilentMiddlewareBlockedError(message, type) {
  this.name = 'SilentMiddlewareBlockedError';
  this.message = message;
  this.type = type;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

SilentMiddlewareBlockedError.prototype = Object.create(Error.prototype);

function InvalidActionError(message) {
  this.name = 'InvalidActionError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

InvalidActionError.prototype = Object.create(Error.prototype);

function InvalidArgumentsError(message) {
  this.name = 'InvalidArgumentsError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

InvalidArgumentsError.prototype = Object.create(Error.prototype);

function InvalidOptionsError(message) {
  this.name = 'InvalidOptionsError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

InvalidOptionsError.prototype = Object.create(Error.prototype);

function InvalidMessageError(message) {
  this.name = 'InvalidMessageError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

InvalidMessageError.prototype = Object.create(Error.prototype);

function SocketProtocolError(message, code) {
  this.name = 'SocketProtocolError';
  this.message = message;
  this.code = code;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

SocketProtocolError.prototype = Object.create(Error.prototype);

function ServerProtocolError(message) {
  this.name = 'ServerProtocolError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

ServerProtocolError.prototype = Object.create(Error.prototype);

function HTTPServerError(message) {
  this.name = 'HTTPServerError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

HTTPServerError.prototype = Object.create(Error.prototype);

function ResourceLimitError(message) {
  this.name = 'ResourceLimitError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

ResourceLimitError.prototype = Object.create(Error.prototype);

function TimeoutError(message) {
  this.name = 'TimeoutError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

TimeoutError.prototype = Object.create(Error.prototype);

function BadConnectionError(message, type) {
  this.name = 'BadConnectionError';
  this.message = message;
  this.type = type;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

BadConnectionError.prototype = Object.create(Error.prototype);

function BrokerError(message) {
  this.name = 'BrokerError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

BrokerError.prototype = Object.create(Error.prototype);

function ProcessExitError(message, code) {
  this.name = 'ProcessExitError';
  this.message = message;
  this.code = code;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

ProcessExitError.prototype = Object.create(Error.prototype);

function UnknownError(message) {
  this.name = 'UnknownError';
  this.message = message;

  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = new Error().stack;
  }
}

UnknownError.prototype = Object.create(Error.prototype); // Expose all error types.

module.exports = {
  AuthTokenExpiredError: AuthTokenExpiredError,
  AuthTokenInvalidError: AuthTokenInvalidError,
  AuthTokenNotBeforeError: AuthTokenNotBeforeError,
  AuthTokenError: AuthTokenError,
  AuthError: AuthError,
  SilentMiddlewareBlockedError: SilentMiddlewareBlockedError,
  InvalidActionError: InvalidActionError,
  InvalidArgumentsError: InvalidArgumentsError,
  InvalidOptionsError: InvalidOptionsError,
  InvalidMessageError: InvalidMessageError,
  SocketProtocolError: SocketProtocolError,
  ServerProtocolError: ServerProtocolError,
  HTTPServerError: HTTPServerError,
  ResourceLimitError: ResourceLimitError,
  TimeoutError: TimeoutError,
  BadConnectionError: BadConnectionError,
  BrokerError: BrokerError,
  ProcessExitError: ProcessExitError,
  UnknownError: UnknownError
};
module.exports.socketProtocolErrorStatuses = {
  1001: 'Socket was disconnected',
  1002: 'A WebSocket protocol error was encountered',
  1003: 'Server terminated socket because it received invalid data',
  1005: 'Socket closed without status code',
  1006: 'Socket hung up',
  1007: 'Message format was incorrect',
  1008: 'Encountered a policy violation',
  1009: 'Message was too big to process',
  1010: 'Client ended the connection because the server did not comply with extension requirements',
  1011: 'Server encountered an unexpected fatal condition',
  4000: 'Server ping timed out',
  4001: 'Client pong timed out',
  4002: 'Server failed to sign auth token',
  4003: 'Failed to complete handshake',
  4004: 'Client failed to save auth token',
  4005: 'Did not receive #handshake from client before timeout',
  4006: 'Failed to bind socket to message broker',
  4007: 'Client connection establishment timed out',
  4008: 'Server rejected handshake from client',
  4009: 'Server received a message before the client handshake'
};
module.exports.socketProtocolIgnoreStatuses = {
  1000: 'Socket closed normally',
  1001: 'Socket hung up'
}; // Properties related to error domains cannot be serialized.

var unserializableErrorProperties = {
  domain: 1,
  domainEmitter: 1,
  domainThrown: 1
}; // Convert an error into a JSON-compatible type which can later be hydrated
// back to its *original* form.

module.exports.dehydrateError = function dehydrateError(error, includeStackTrace) {
  var dehydratedError;

  if (error && _typeof(error) === 'object') {
    dehydratedError = {
      message: error.message
    };

    if (includeStackTrace) {
      dehydratedError.stack = error.stack;
    }

    for (var i in error) {
      if (!unserializableErrorProperties[i]) {
        dehydratedError[i] = error[i];
      }
    }
  } else if (typeof error === 'function') {
    dehydratedError = '[function ' + (error.name || 'anonymous') + ']';
  } else {
    dehydratedError = error;
  }

  return decycle(dehydratedError);
}; // Convert a dehydrated error back to its *original* form.


module.exports.hydrateError = function hydrateError(error) {
  var hydratedError = null;

  if (error != null) {
    if (_typeof(error) === 'object') {
      hydratedError = new Error(error.message);

      for (var i in error) {
        if (error.hasOwnProperty(i)) {
          hydratedError[i] = error[i];
        }
      }
    } else {
      hydratedError = error;
    }
  }

  return hydratedError;
};

module.exports.decycle = decycle;

/***/ }),

/***/ "./node_modules/sc-formatter/index.js":
/*!********************************************!*\
  !*** ./node_modules/sc-formatter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var validJSONStartRegex = /^[ \n\r\t]*[{\[]/;

var arrayBufferToBase64 = function arrayBufferToBase64(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer);
  var len = bytes.length;
  var base64 = '';

  for (var i = 0; i < len; i += 3) {
    base64 += base64Chars[bytes[i] >> 2];
    base64 += base64Chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += base64Chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += base64Chars[bytes[i + 2] & 63];
  }

  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }

  return base64;
};

var binaryToBase64Replacer = function binaryToBase64Replacer(key, value) {
  if (global.ArrayBuffer && value instanceof global.ArrayBuffer) {
    return {
      base64: true,
      data: arrayBufferToBase64(value)
    };
  } else if (global.Buffer) {
    if (value instanceof global.Buffer) {
      return {
        base64: true,
        data: value.toString('base64')
      };
    } // Some versions of Node.js convert Buffers to Objects before they are passed to
    // the replacer function - Because of this, we need to rehydrate Buffers
    // before we can convert them to base64 strings.


    if (value && value.type === 'Buffer' && Array.isArray(value.data)) {
      var rehydratedBuffer;

      if (global.Buffer.from) {
        rehydratedBuffer = global.Buffer.from(value.data);
      } else {
        rehydratedBuffer = new global.Buffer(value.data);
      }

      return {
        base64: true,
        data: rehydratedBuffer.toString('base64')
      };
    }
  }

  return value;
}; // Decode the data which was transmitted over the wire to a JavaScript Object in a format which SC understands.
// See encode function below for more details.


module.exports.decode = function (input) {
  if (input == null) {
    return null;
  } // Leave ping or pong message as is


  if (input === '#1' || input === '#2') {
    return input;
  }

  var message = input.toString(); // Performance optimization to detect invalid JSON packet sooner.

  if (!validJSONStartRegex.test(message)) {
    return message;
  }

  try {
    return JSON.parse(message);
  } catch (err) {}

  return message;
}; // Encode a raw JavaScript object (which is in the SC protocol format) into a format for
// transfering it over the wire. In this case, we just convert it into a simple JSON string.
// If you want to create your own custom codec, you can encode the object into any format
// (e.g. binary ArrayBuffer or string with any kind of compression) so long as your decode
// function is able to rehydrate that object back into its original JavaScript Object format
// (which adheres to the SC protocol).
// See https://github.com/SocketCluster/socketcluster/blob/master/socketcluster-protocol.md
// for details about the SC protocol.


module.exports.encode = function (object) {
  // Leave ping or pong message as is
  if (object === '#1' || object === '#2') {
    return object;
  }

  return JSON.stringify(object, binaryToBase64Replacer);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/shallow-clone/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */


var valueOf = Symbol.prototype.valueOf;

var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();

    case 'object':
      return Object.assign({}, val);

    case 'date':
      return new val.constructor(Number(val));

    case 'map':
      return new Map(val);

    case 'set':
      return new Set(val);

    case 'buffer':
      return cloneBuffer(val);

    case 'symbol':
      return cloneSymbol(val);

    case 'arraybuffer':
      return cloneArrayBuffer(val);

    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);

    case 'regexp':
      return cloneRegExp(val);

    case 'error':
      return Object.create(val);

    default:
      {
        return val;
      }
  }
}

function cloneRegExp(val) {
  var flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
  var re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  var res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  var len = val.length;
  var buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}
/**
 * Expose `clone`
 */


module.exports = clone;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/socketcluster-client/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socketcluster-client/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AGClientSocket = __webpack_require__(/*! ./lib/clientsocket */ "./node_modules/socketcluster-client/lib/clientsocket.js");

var factory = __webpack_require__(/*! ./lib/factory */ "./node_modules/socketcluster-client/lib/factory.js");

var version = '16.0.2';
module.exports.factory = factory;
module.exports.AGClientSocket = AGClientSocket;

module.exports.create = function (options) {
  return factory.create(_objectSpread(_objectSpread({}, options), {}, {
    version: version
  }));
};

module.exports.version = version;

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/auth.js":
/*!*******************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/auth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function AuthEngine() {
  this._internalStorage = {};
  this.isLocalStorageEnabled = this._checkLocalStorageEnabled();
}

AuthEngine.prototype._checkLocalStorageEnabled = function () {
  var err;

  try {
    // Some browsers will throw an error here if localStorage is disabled.
    global.localStorage; // Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
    // throw QuotaExceededError. We're going to detect this and avoid hard to debug edge cases.

    global.localStorage.setItem('__scLocalStorageTest', 1);
    global.localStorage.removeItem('__scLocalStorageTest');
  } catch (e) {
    err = e;
  }

  return !err;
};

AuthEngine.prototype.saveToken = function (name, token, options) {
  if (this.isLocalStorageEnabled && global.localStorage) {
    global.localStorage.setItem(name, token);
  } else {
    this._internalStorage[name] = token;
  }

  return Promise.resolve(token);
};

AuthEngine.prototype.removeToken = function (name) {
  var loadPromise = this.loadToken(name);

  if (this.isLocalStorageEnabled && global.localStorage) {
    global.localStorage.removeItem(name);
  } else {
    delete this._internalStorage[name];
  }

  return loadPromise;
};

AuthEngine.prototype.loadToken = function (name) {
  var token;

  if (this.isLocalStorageEnabled && global.localStorage) {
    token = global.localStorage.getItem(name);
  } else {
    token = this._internalStorage[name] || null;
  }

  return Promise.resolve(token);
};

module.exports = AuthEngine;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/clientsocket.js":
/*!***************************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/clientsocket.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StreamDemux = __webpack_require__(/*! stream-demux */ "./node_modules/stream-demux/index.js");

var AsyncStreamEmitter = __webpack_require__(/*! async-stream-emitter */ "./node_modules/async-stream-emitter/index.js");

var AGChannel = __webpack_require__(/*! ag-channel */ "./node_modules/ag-channel/index.js");

var AuthEngine = __webpack_require__(/*! ./auth */ "./node_modules/socketcluster-client/lib/auth.js");

var formatter = __webpack_require__(/*! sc-formatter */ "./node_modules/sc-formatter/index.js");

var AGTransport = __webpack_require__(/*! ./transport */ "./node_modules/socketcluster-client/lib/transport.js");

var querystring = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");

var LinkedList = __webpack_require__(/*! linked-list */ "./node_modules/linked-list/index.js");

var cloneDeep = __webpack_require__(/*! clone-deep */ "./node_modules/clone-deep/index.js");

var Buffer = __webpack_require__(/*! buffer/ */ "../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

var wait = __webpack_require__(/*! ./wait */ "./node_modules/socketcluster-client/lib/wait.js");

var scErrors = __webpack_require__(/*! sc-errors */ "./node_modules/sc-errors/index.js");

var InvalidArgumentsError = scErrors.InvalidArgumentsError;
var InvalidMessageError = scErrors.InvalidMessageError;
var InvalidActionError = scErrors.InvalidActionError;
var SocketProtocolError = scErrors.SocketProtocolError;
var TimeoutError = scErrors.TimeoutError;
var BadConnectionError = scErrors.BadConnectionError;
var isBrowser = typeof window !== 'undefined';

function AGClientSocket(socketOptions) {
  var _this = this;

  AsyncStreamEmitter.call(this);
  var defaultOptions = {
    path: '/socketcluster/',
    secure: false,
    protocolScheme: null,
    socketPath: null,
    autoConnect: true,
    autoReconnect: true,
    autoSubscribeOnConnect: true,
    connectTimeout: 20000,
    ackTimeout: 10000,
    timestampRequests: false,
    timestampParam: 't',
    authTokenName: 'socketcluster.authToken',
    binaryType: 'arraybuffer',
    batchOnHandshake: false,
    batchOnHandshakeDuration: 100,
    batchInterval: 50,
    protocolVersion: 2,
    wsOptions: {},
    cloneData: false
  };
  var opts = Object.assign(defaultOptions, socketOptions);
  this.id = null;
  this.version = opts.version || null;
  this.protocolVersion = opts.protocolVersion;
  this.state = this.CLOSED;
  this.authState = this.UNAUTHENTICATED;
  this.signedAuthToken = null;
  this.authToken = null;
  this.pendingReconnect = false;
  this.pendingReconnectTimeout = null;
  this.preparingPendingSubscriptions = false;
  this.clientId = opts.clientId;
  this.wsOptions = opts.wsOptions;
  this.connectTimeout = opts.connectTimeout;
  this.ackTimeout = opts.ackTimeout;
  this.channelPrefix = opts.channelPrefix || null;
  this.disconnectOnUnload = opts.disconnectOnUnload == null ? true : opts.disconnectOnUnload;
  this.authTokenName = opts.authTokenName; // pingTimeout will be connectTimeout at the start, but it will
  // be updated with values provided by the 'connect' event

  opts.pingTimeout = opts.connectTimeout;
  this.pingTimeout = opts.pingTimeout;
  this.pingTimeoutDisabled = !!opts.pingTimeoutDisabled;
  var maxTimeout = Math.pow(2, 31) - 1;

  var verifyDuration = function verifyDuration(propertyName) {
    if (_this[propertyName] > maxTimeout) {
      throw new InvalidArgumentsError("The ".concat(propertyName, " value provided exceeded the maximum amount allowed"));
    }
  };

  verifyDuration('connectTimeout');
  verifyDuration('ackTimeout');
  verifyDuration('pingTimeout');
  this.connectAttempts = 0;
  this.isBatching = false;
  this.batchOnHandshake = opts.batchOnHandshake;
  this.batchOnHandshakeDuration = opts.batchOnHandshakeDuration;
  this._batchingIntervalId = null;
  this._outboundBuffer = new LinkedList();
  this._channelMap = {};
  this._channelEventDemux = new StreamDemux();
  this._channelDataDemux = new StreamDemux();
  this._receiverDemux = new StreamDemux();
  this._procedureDemux = new StreamDemux();
  this.options = opts;
  this._cid = 1;

  this.options.callIdGenerator = function () {
    return _this._cid++;
  };

  if (this.options.autoReconnect) {
    if (this.options.autoReconnectOptions == null) {
      this.options.autoReconnectOptions = {};
    } // Add properties to the this.options.autoReconnectOptions object.
    // We assign the reference to a reconnectOptions variable to avoid repetition.


    var reconnectOptions = this.options.autoReconnectOptions;

    if (reconnectOptions.initialDelay == null) {
      reconnectOptions.initialDelay = 10000;
    }

    if (reconnectOptions.randomness == null) {
      reconnectOptions.randomness = 10000;
    }

    if (reconnectOptions.multiplier == null) {
      reconnectOptions.multiplier = 1.5;
    }

    if (reconnectOptions.maxDelay == null) {
      reconnectOptions.maxDelay = 60000;
    }
  }

  if (this.options.subscriptionRetryOptions == null) {
    this.options.subscriptionRetryOptions = {};
  }

  if (this.options.authEngine) {
    this.auth = this.options.authEngine;
  } else {
    this.auth = new AuthEngine();
  }

  if (this.options.codecEngine) {
    this.codec = this.options.codecEngine;
  } else {
    // Default codec engine
    this.codec = formatter;
  }

  if (this.options.protocol) {
    var protocolOptionError = new InvalidArgumentsError('The "protocol" option does not affect socketcluster-client - ' + 'If you want to utilize SSL/TLS, use "secure" option instead');

    this._onError(protocolOptionError);
  }

  this.options.query = opts.query || {};

  if (typeof this.options.query === 'string') {
    this.options.query = querystring.parse(this.options.query);
  }

  if (isBrowser && this.disconnectOnUnload && global.addEventListener && global.removeEventListener) {
    this._handleBrowserUnload();
  }

  if (this.options.autoConnect) {
    this.connect();
  }
}

AGClientSocket.prototype = Object.create(AsyncStreamEmitter.prototype);
AGClientSocket.CONNECTING = AGClientSocket.prototype.CONNECTING = AGTransport.prototype.CONNECTING;
AGClientSocket.OPEN = AGClientSocket.prototype.OPEN = AGTransport.prototype.OPEN;
AGClientSocket.CLOSED = AGClientSocket.prototype.CLOSED = AGTransport.prototype.CLOSED;
AGClientSocket.AUTHENTICATED = AGClientSocket.prototype.AUTHENTICATED = 'authenticated';
AGClientSocket.UNAUTHENTICATED = AGClientSocket.prototype.UNAUTHENTICATED = 'unauthenticated';
AGClientSocket.SUBSCRIBED = AGClientSocket.prototype.SUBSCRIBED = AGChannel.SUBSCRIBED;
AGClientSocket.PENDING = AGClientSocket.prototype.PENDING = AGChannel.PENDING;
AGClientSocket.UNSUBSCRIBED = AGClientSocket.prototype.UNSUBSCRIBED = AGChannel.UNSUBSCRIBED;
AGClientSocket.ignoreStatuses = scErrors.socketProtocolIgnoreStatuses;
AGClientSocket.errorStatuses = scErrors.socketProtocolErrorStatuses;
Object.defineProperty(AGClientSocket.prototype, 'isBufferingBatch', {
  get: function get() {
    return this.transport.isBufferingBatch;
  }
});

AGClientSocket.prototype.getBackpressure = function () {
  return Math.max(this.getAllListenersBackpressure(), this.getAllReceiversBackpressure(), this.getAllProceduresBackpressure(), this.getAllChannelsBackpressure());
};

AGClientSocket.prototype._handleBrowserUnload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
  var _this2 = this;

  var unloadHandler, isUnloadHandlerAttached, attachUnloadHandler, detachUnloadHandler;
  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          unloadHandler = function unloadHandler() {
            _this2.disconnect();
          };

          isUnloadHandlerAttached = false;

          attachUnloadHandler = function attachUnloadHandler() {
            if (!isUnloadHandlerAttached) {
              isUnloadHandlerAttached = true;
              global.addEventListener('beforeunload', unloadHandler, false);
            }
          };

          detachUnloadHandler = function detachUnloadHandler() {
            if (isUnloadHandlerAttached) {
              isUnloadHandlerAttached = false;
              global.removeEventListener('beforeunload', unloadHandler, false);
            }
          };

          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var consumer, packet;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    consumer = _this2.listener('connecting').createConsumer();

                  case 1:
                    if (false) {}

                    _context.next = 4;
                    return consumer.next();

                  case 4:
                    packet = _context.sent;

                    if (!packet.done) {
                      _context.next = 7;
                      break;
                    }

                    return _context.abrupt("break", 10);

                  case 7:
                    attachUnloadHandler();
                    _context.next = 1;
                    break;

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();

          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
            var consumer, packet;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    consumer = _this2.listener('close').createConsumer();

                  case 1:
                    if (false) {}

                    _context2.next = 4;
                    return consumer.next();

                  case 4:
                    packet = _context2.sent;

                    if (!packet.done) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("break", 10);

                  case 7:
                    detachUnloadHandler();
                    _context2.next = 1;
                    break;

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }))();

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));

AGClientSocket.prototype._setAuthToken = function (data) {
  var _this3 = this;

  this._changeToAuthenticatedState(data.token);

  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this3.auth.saveToken(_this3.authTokenName, data.token, {});

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);

            _this3._onError(_context4.t0);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }))();
};

AGClientSocket.prototype._removeAuthToken = function (data) {
  var _this4 = this;

  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    var oldAuthToken;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this4.auth.removeToken(_this4.authTokenName);

          case 3:
            oldAuthToken = _context5.sent;
            _context5.next = 10;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);

            // Non-fatal error - Do not close the connection
            _this4._onError(_context5.t0);

            return _context5.abrupt("return");

          case 10:
            _this4.emit('removeAuthToken', {
              oldAuthToken: oldAuthToken
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }))();

  this._changeToUnauthenticatedStateAndClearTokens();
};

AGClientSocket.prototype._privateDataHandlerMap = {
  '#publish': function publish(data) {
    var undecoratedChannelName = this._undecorateChannelName(data.channel);

    var isSubscribed = this.isSubscribed(undecoratedChannelName, true);

    if (isSubscribed) {
      this._channelDataDemux.write(undecoratedChannelName, data.data);
    }
  },
  '#kickOut': function kickOut(data) {
    var undecoratedChannelName = this._undecorateChannelName(data.channel);

    var channel = this._channelMap[undecoratedChannelName];

    if (channel) {
      this.emit('kickOut', {
        channel: undecoratedChannelName,
        message: data.message
      });

      this._channelEventDemux.write("".concat(undecoratedChannelName, "/kickOut"), {
        message: data.message
      });

      this._triggerChannelUnsubscribe(channel);
    }
  },
  '#setAuthToken': function setAuthToken(data) {
    if (data) {
      this._setAuthToken(data);
    }
  },
  '#removeAuthToken': function removeAuthToken(data) {
    this._removeAuthToken(data);
  }
};
AGClientSocket.prototype._privateRPCHandlerMap = {
  '#setAuthToken': function setAuthToken(data, request) {
    if (data) {
      this._setAuthToken(data);

      request.end();
    } else {
      request.error(new InvalidMessageError('No token data provided by #setAuthToken event'));
    }
  },
  '#removeAuthToken': function removeAuthToken(data, request) {
    this._removeAuthToken(data);

    request.end();
  }
};

AGClientSocket.prototype.getState = function () {
  return this.state;
};

AGClientSocket.prototype.getBytesReceived = function () {
  return this.transport.getBytesReceived();
};

AGClientSocket.prototype.deauthenticate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
  var _this5 = this;

  return _regeneratorRuntime.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
            var oldAuthToken;
            return _regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return _this5.auth.removeToken(_this5.authTokenName);

                  case 3:
                    oldAuthToken = _context6.sent;
                    _context6.next = 10;
                    break;

                  case 6:
                    _context6.prev = 6;
                    _context6.t0 = _context6["catch"](0);

                    _this5._onError(_context6.t0);

                    return _context6.abrupt("return");

                  case 10:
                    _this5.emit('removeAuthToken', {
                      oldAuthToken: oldAuthToken
                    });

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, null, [[0, 6]]);
          }))();

          if (this.state !== this.CLOSED) {
            this.transmit('#removeAuthToken');
          }

          this._changeToUnauthenticatedStateAndClearTokens();

          _context7.next = 5;
          return wait(0);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7, this);
}));

AGClientSocket.prototype.connect = function () {
  var _this6 = this;

  if (this.state === this.CLOSED) {
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    clearTimeout(this._reconnectTimeoutRef);
    this.state = this.CONNECTING;
    this.emit('connecting', {});

    if (this.transport) {
      this.transport.clearAllListeners();
    }

    var transportHandlers = {
      onOpen: function onOpen(value) {
        _this6.state = _this6.OPEN;

        _this6._onOpen(value);
      },
      onOpenAbort: function onOpenAbort(value) {
        if (_this6.state !== _this6.CLOSED) {
          _this6.state = _this6.CLOSED;

          _this6._destroy(value.code, value.reason, true);
        }
      },
      onClose: function onClose(value) {
        if (_this6.state !== _this6.CLOSED) {
          _this6.state = _this6.CLOSED;

          _this6._destroy(value.code, value.reason);
        }
      },
      onEvent: function onEvent(value) {
        _this6.emit(value.event, value.data);
      },
      onError: function onError(value) {
        _this6._onError(value.error);
      },
      onInboundInvoke: function onInboundInvoke(value) {
        _this6._onInboundInvoke(value);
      },
      onInboundTransmit: function onInboundTransmit(value) {
        _this6._onInboundTransmit(value.event, value.data);
      }
    };
    this.transport = new AGTransport(this.auth, this.codec, this.options, this.wsOptions, transportHandlers);
  }
};

AGClientSocket.prototype.reconnect = function (code, reason) {
  this.disconnect(code, reason);
  this.connect();
};

AGClientSocket.prototype.disconnect = function (code, reason) {
  code = code || 1000;

  if (typeof code !== 'number') {
    throw new InvalidArgumentsError('If specified, the code argument must be a number');
  }

  var isConnecting = this.state === this.CONNECTING;

  if (isConnecting || this.state === this.OPEN) {
    this.state = this.CLOSED;

    this._destroy(code, reason, isConnecting);

    this.transport.close(code, reason);
  } else {
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    clearTimeout(this._reconnectTimeoutRef);
  }
};

AGClientSocket.prototype._changeToUnauthenticatedStateAndClearTokens = function () {
  if (this.authState !== this.UNAUTHENTICATED) {
    var oldAuthState = this.authState;
    var oldAuthToken = this.authToken;
    var oldSignedAuthToken = this.signedAuthToken;
    this.authState = this.UNAUTHENTICATED;
    this.signedAuthToken = null;
    this.authToken = null;
    var stateChangeData = {
      oldAuthState: oldAuthState,
      newAuthState: this.authState
    };
    this.emit('authStateChange', stateChangeData);
    this.emit('deauthenticate', {
      oldSignedAuthToken: oldSignedAuthToken,
      oldAuthToken: oldAuthToken
    });
  }
};

AGClientSocket.prototype._changeToAuthenticatedState = function (signedAuthToken) {
  this.signedAuthToken = signedAuthToken;
  this.authToken = this._extractAuthTokenData(signedAuthToken);

  if (this.authState !== this.AUTHENTICATED) {
    var oldAuthState = this.authState;
    this.authState = this.AUTHENTICATED;
    var stateChangeData = {
      oldAuthState: oldAuthState,
      newAuthState: this.authState,
      signedAuthToken: signedAuthToken,
      authToken: this.authToken
    };

    if (!this.preparingPendingSubscriptions) {
      this.processPendingSubscriptions();
    }

    this.emit('authStateChange', stateChangeData);
  }

  this.emit('authenticate', {
    signedAuthToken: signedAuthToken,
    authToken: this.authToken
  });
};

AGClientSocket.prototype.decodeBase64 = function (encodedString) {
  return Buffer.from(encodedString, 'base64').toString('utf8');
};

AGClientSocket.prototype.encodeBase64 = function (decodedString) {
  return Buffer.from(decodedString, 'utf8').toString('base64');
};

AGClientSocket.prototype._extractAuthTokenData = function (signedAuthToken) {
  var tokenParts = (signedAuthToken || '').split('.');
  var encodedTokenData = tokenParts[1];

  if (encodedTokenData != null) {
    var tokenData = encodedTokenData;

    try {
      tokenData = this.decodeBase64(tokenData);
      return JSON.parse(tokenData);
    } catch (e) {
      return tokenData;
    }
  }

  return null;
};

AGClientSocket.prototype.getAuthToken = function () {
  return this.authToken;
};

AGClientSocket.prototype.getSignedAuthToken = function () {
  return this.signedAuthToken;
}; // Perform client-initiated authentication by providing an encrypted token string.


AGClientSocket.prototype.authenticate = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(signedAuthToken) {
    var _this7 = this;

    var authStatus;
    return _regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return this.invoke('#authenticate', signedAuthToken);

          case 3:
            authStatus = _context9.sent;
            _context9.next = 12;
            break;

          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](0);

            if (_context9.t0.name !== 'BadConnectionError' && _context9.t0.name !== 'TimeoutError') {
              // In case of a bad/closed connection or a timeout, we maintain the last
              // known auth state since those errors don't mean that the token is invalid.
              this._changeToUnauthenticatedStateAndClearTokens();
            }

            _context9.next = 11;
            return wait(0);

          case 11:
            throw _context9.t0;

          case 12:
            if (authStatus && authStatus.isAuthenticated != null) {
              // If authStatus is correctly formatted (has an isAuthenticated property),
              // then we will rehydrate the authError.
              if (authStatus.authError) {
                authStatus.authError = scErrors.hydrateError(authStatus.authError);
              }
            } else {
              // Some errors like BadConnectionError and TimeoutError will not pass a valid
              // authStatus object to the current function, so we need to create it ourselves.
              authStatus = {
                isAuthenticated: this.authState,
                authError: null
              };
            }

            if (authStatus.isAuthenticated) {
              this._changeToAuthenticatedState(signedAuthToken);
            } else {
              this._changeToUnauthenticatedStateAndClearTokens();
            }

            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
              return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return _this7.auth.saveToken(_this7.authTokenName, signedAuthToken, {});

                    case 3:
                      _context8.next = 8;
                      break;

                    case 5:
                      _context8.prev = 5;
                      _context8.t0 = _context8["catch"](0);

                      _this7._onError(_context8.t0);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, null, [[0, 5]]);
            }))();

            _context9.next = 17;
            return wait(0);

          case 17:
            return _context9.abrupt("return", authStatus);

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[0, 6]]);
  }));

  return function (_x) {
    return _ref8.apply(this, arguments);
  };
}();

AGClientSocket.prototype._tryReconnect = function (initialDelay) {
  var _this8 = this;

  var exponent = this.connectAttempts++;
  var reconnectOptions = this.options.autoReconnectOptions;
  var timeout;

  if (initialDelay == null || exponent > 0) {
    var initialTimeout = Math.round(reconnectOptions.initialDelay + (reconnectOptions.randomness || 0) * Math.random());
    timeout = Math.round(initialTimeout * Math.pow(reconnectOptions.multiplier, exponent));
  } else {
    timeout = initialDelay;
  }

  if (timeout > reconnectOptions.maxDelay) {
    timeout = reconnectOptions.maxDelay;
  }

  clearTimeout(this._reconnectTimeoutRef);
  this.pendingReconnect = true;
  this.pendingReconnectTimeout = timeout;
  this._reconnectTimeoutRef = setTimeout(function () {
    _this8.connect();
  }, timeout);
};

AGClientSocket.prototype._onOpen = function (status) {
  var _this9 = this;

  if (this.isBatching) {
    this._startBatching();
  } else if (this.batchOnHandshake) {
    this._startBatching();

    setTimeout(function () {
      if (!_this9.isBatching) {
        _this9._stopBatching();
      }
    }, this.batchOnHandshakeDuration);
  }

  this.preparingPendingSubscriptions = true;

  if (status) {
    this.id = status.id;
    this.pingTimeout = status.pingTimeout;

    if (status.isAuthenticated) {
      this._changeToAuthenticatedState(status.authToken);
    } else {
      this._changeToUnauthenticatedStateAndClearTokens();
    }
  } else {
    // This can happen if auth.loadToken (in transport.js) fails with
    // an error - This means that the signedAuthToken cannot be loaded by
    // the auth engine and therefore, we need to unauthenticate the client.
    this._changeToUnauthenticatedStateAndClearTokens();
  }

  this.connectAttempts = 0;

  if (this.options.autoSubscribeOnConnect) {
    this.processPendingSubscriptions();
  } // If the user invokes the callback while in autoSubscribeOnConnect mode, it
  // won't break anything.


  this.emit('connect', _objectSpread(_objectSpread({}, status), {}, {
    processPendingSubscriptions: function processPendingSubscriptions() {
      _this9.processPendingSubscriptions();
    }
  }));

  if (this.state === this.OPEN) {
    this._flushOutboundBuffer();
  }
};

AGClientSocket.prototype._onError = function (error) {
  this.emit('error', {
    error: error
  });
};

AGClientSocket.prototype._suspendSubscriptions = function () {
  var _this10 = this;

  Object.keys(this._channelMap).forEach(function (channelName) {
    var channel = _this10._channelMap[channelName];

    _this10._triggerChannelUnsubscribe(channel, true);
  });
};

AGClientSocket.prototype._abortAllPendingEventsDueToBadConnection = function (failureType) {
  var currentNode = this._outboundBuffer.head;
  var nextNode;

  while (currentNode) {
    nextNode = currentNode.next;
    var eventObject = currentNode.data;
    clearTimeout(eventObject.timeout);
    delete eventObject.timeout;
    currentNode.detach();
    currentNode = nextNode;
    var callback = eventObject.callback;

    if (callback) {
      delete eventObject.callback;
      var errorMessage = "Event \"".concat(eventObject.event, "\" was aborted due to a bad connection");
      var error = new BadConnectionError(errorMessage, failureType);
      callback.call(eventObject, error, eventObject);
    } // Cleanup any pending response callback in the transport layer too.


    if (eventObject.cid) {
      this.transport.cancelPendingResponse(eventObject.cid);
    }
  }
};

AGClientSocket.prototype._destroy = function (code, reason, openAbort) {
  this.id = null;

  this._cancelBatching();

  if (this.transport) {
    this.transport.clearAllListeners();
  }

  this.pendingReconnect = false;
  this.pendingReconnectTimeout = null;
  clearTimeout(this._reconnectTimeoutRef);

  this._suspendSubscriptions();

  if (openAbort) {
    this.emit('connectAbort', {
      code: code,
      reason: reason
    });
  } else {
    this.emit('disconnect', {
      code: code,
      reason: reason
    });
  }

  this.emit('close', {
    code: code,
    reason: reason
  });

  if (!AGClientSocket.ignoreStatuses[code]) {
    var closeMessage;

    if (reason) {
      closeMessage = 'Socket connection closed with status code ' + code + ' and reason: ' + reason;
    } else {
      closeMessage = 'Socket connection closed with status code ' + code;
    }

    var err = new SocketProtocolError(AGClientSocket.errorStatuses[code] || closeMessage, code);

    this._onError(err);
  }

  this._abortAllPendingEventsDueToBadConnection(openAbort ? 'connectAbort' : 'disconnect'); // Try to reconnect
  // on server ping timeout (4000)
  // or on client pong timeout (4001)
  // or on close without status (1005)
  // or on handshake failure (4003)
  // or on handshake rejection (4008)
  // or on socket hung up (1006)


  if (this.options.autoReconnect) {
    if (code === 4000 || code === 4001 || code === 1005) {
      // If there is a ping or pong timeout or socket closes without
      // status, don't wait before trying to reconnect - These could happen
      // if the client wakes up after a period of inactivity and in this case we
      // want to re-establish the connection as soon as possible.
      this._tryReconnect(0); // Codes 4500 and above will be treated as permanent disconnects.
      // Socket will not try to auto-reconnect.

    } else if (code !== 1000 && code < 4500) {
      this._tryReconnect();
    }
  }
};

AGClientSocket.prototype._onInboundTransmit = function (event, data) {
  var handler = this._privateDataHandlerMap[event];

  if (handler) {
    handler.call(this, data);
  } else {
    this._receiverDemux.write(event, data);
  }
};

AGClientSocket.prototype._onInboundInvoke = function (request) {
  var procedure = request.procedure,
      data = request.data;
  var handler = this._privateRPCHandlerMap[procedure];

  if (handler) {
    handler.call(this, data, request);
  } else {
    this._procedureDemux.write(procedure, request);
  }
};

AGClientSocket.prototype.decode = function (message) {
  return this.transport.decode(message);
};

AGClientSocket.prototype.encode = function (object) {
  return this.transport.encode(object);
};

AGClientSocket.prototype._flushOutboundBuffer = function () {
  var currentNode = this._outboundBuffer.head;
  var nextNode;

  while (currentNode) {
    nextNode = currentNode.next;
    var eventObject = currentNode.data;
    currentNode.detach();
    this.transport.transmitObject(eventObject);
    currentNode = nextNode;
  }
};

AGClientSocket.prototype._handleEventAckTimeout = function (eventObject, eventNode) {
  if (eventNode) {
    eventNode.detach();
  }

  delete eventObject.timeout;
  var callback = eventObject.callback;

  if (callback) {
    delete eventObject.callback;
    var error = new TimeoutError("Event response for \"".concat(eventObject.event, "\" timed out"));
    callback.call(eventObject, error, eventObject);
  } // Cleanup any pending response callback in the transport layer too.


  if (eventObject.cid) {
    this.transport.cancelPendingResponse(eventObject.cid);
  }
};

AGClientSocket.prototype._processOutboundEvent = function (event, data, options, expectResponse) {
  var _this11 = this;

  options = options || {};

  if (this.state === this.CLOSED) {
    this.connect();
  }

  var eventObject = {
    event: event
  };
  var promise;

  if (expectResponse) {
    promise = new Promise(function (resolve, reject) {
      eventObject.callback = function (err, data) {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      };
    });
  } else {
    promise = Promise.resolve();
  }

  var eventNode = new LinkedList.Item();

  if (this.options.cloneData) {
    eventObject.data = cloneDeep(data);
  } else {
    eventObject.data = data;
  }

  eventNode.data = eventObject;
  var ackTimeout = options.ackTimeout == null ? this.ackTimeout : options.ackTimeout;
  eventObject.timeout = setTimeout(function () {
    _this11._handleEventAckTimeout(eventObject, eventNode);
  }, ackTimeout);

  this._outboundBuffer.append(eventNode);

  if (this.state === this.OPEN) {
    this._flushOutboundBuffer();
  }

  return promise;
};

AGClientSocket.prototype.send = function (data) {
  this.transport.send(data);
};

AGClientSocket.prototype.transmit = function (event, data, options) {
  return this._processOutboundEvent(event, data, options);
};

AGClientSocket.prototype.invoke = function (event, data, options) {
  return this._processOutboundEvent(event, data, options, true);
};

AGClientSocket.prototype.transmitPublish = function (channelName, data) {
  var pubData = {
    channel: this._decorateChannelName(channelName),
    data: data
  };
  return this.transmit('#publish', pubData);
};

AGClientSocket.prototype.invokePublish = function (channelName, data) {
  var pubData = {
    channel: this._decorateChannelName(channelName),
    data: data
  };
  return this.invoke('#publish', pubData);
};

AGClientSocket.prototype._triggerChannelSubscribe = function (channel, subscriptionOptions) {
  var channelName = channel.name;

  if (channel.state !== AGChannel.SUBSCRIBED) {
    var oldChannelState = channel.state;
    channel.state = AGChannel.SUBSCRIBED;
    var stateChangeData = {
      oldChannelState: oldChannelState,
      newChannelState: channel.state,
      subscriptionOptions: subscriptionOptions
    };

    this._channelEventDemux.write("".concat(channelName, "/subscribeStateChange"), stateChangeData);

    this._channelEventDemux.write("".concat(channelName, "/subscribe"), {
      subscriptionOptions: subscriptionOptions
    });

    this.emit('subscribeStateChange', _objectSpread({
      channel: channelName
    }, stateChangeData));
    this.emit('subscribe', {
      channel: channelName,
      subscriptionOptions: subscriptionOptions
    });
  }
};

AGClientSocket.prototype._triggerChannelSubscribeFail = function (err, channel, subscriptionOptions) {
  var channelName = channel.name;
  var meetsAuthRequirements = !channel.options.waitForAuth || this.authState === this.AUTHENTICATED;
  var hasChannel = !!this._channelMap[channelName];

  if (hasChannel && meetsAuthRequirements) {
    delete this._channelMap[channelName];

    this._channelEventDemux.write("".concat(channelName, "/subscribeFail"), {
      error: err,
      subscriptionOptions: subscriptionOptions
    });

    this.emit('subscribeFail', {
      error: err,
      channel: channelName,
      subscriptionOptions: subscriptionOptions
    });
  }
}; // Cancel any pending subscribe callback


AGClientSocket.prototype._cancelPendingSubscribeCallback = function (channel) {
  if (channel._pendingSubscriptionCid != null) {
    this.transport.cancelPendingResponse(channel._pendingSubscriptionCid);
    delete channel._pendingSubscriptionCid;
  }
};

AGClientSocket.prototype._decorateChannelName = function (channelName) {
  if (this.channelPrefix) {
    channelName = this.channelPrefix + channelName;
  }

  return channelName;
};

AGClientSocket.prototype._undecorateChannelName = function (decoratedChannelName) {
  if (this.channelPrefix && decoratedChannelName.indexOf(this.channelPrefix) === 0) {
    return decoratedChannelName.replace(this.channelPrefix, '');
  }

  return decoratedChannelName;
};

AGClientSocket.prototype.startBatch = function () {
  this.transport.startBatch();
};

AGClientSocket.prototype.flushBatch = function () {
  this.transport.flushBatch();
};

AGClientSocket.prototype.cancelBatch = function () {
  this.transport.cancelBatch();
};

AGClientSocket.prototype._startBatching = function () {
  var _this12 = this;

  if (this._batchingIntervalId != null) {
    return;
  }

  this.startBatch();
  this._batchingIntervalId = setInterval(function () {
    _this12.flushBatch();

    _this12.startBatch();
  }, this.options.batchInterval);
};

AGClientSocket.prototype.startBatching = function () {
  this.isBatching = true;

  this._startBatching();
};

AGClientSocket.prototype._stopBatching = function () {
  if (this._batchingIntervalId != null) {
    clearInterval(this._batchingIntervalId);
  }

  this._batchingIntervalId = null;
  this.flushBatch();
};

AGClientSocket.prototype.stopBatching = function () {
  this.isBatching = false;

  this._stopBatching();
};

AGClientSocket.prototype._cancelBatching = function () {
  if (this._batchingIntervalId != null) {
    clearInterval(this._batchingIntervalId);
  }

  this._batchingIntervalId = null;
  this.cancelBatch();
};

AGClientSocket.prototype.cancelBatching = function () {
  this.isBatching = false;

  this._cancelBatching();
};

AGClientSocket.prototype._trySubscribe = function (channel) {
  var _this13 = this;

  var meetsAuthRequirements = !channel.options.waitForAuth || this.authState === this.AUTHENTICATED; // We can only ever have one pending subscribe action at any given time on a channel

  if (this.state === this.OPEN && !this.preparingPendingSubscriptions && channel._pendingSubscriptionCid == null && meetsAuthRequirements) {
    var options = {
      noTimeout: true
    };
    var subscriptionOptions = {};

    if (channel.options.waitForAuth) {
      options.waitForAuth = true;
      subscriptionOptions.waitForAuth = options.waitForAuth;
    }

    if (channel.options.data) {
      subscriptionOptions.data = channel.options.data;
    }

    channel._pendingSubscriptionCid = this.transport.invokeRaw('#subscribe', _objectSpread({
      channel: this._decorateChannelName(channel.name)
    }, subscriptionOptions), options, function (err) {
      if (err) {
        if (err.name === 'BadConnectionError') {
          // In case of a failed connection, keep the subscription
          // as pending; it will try again on reconnect.
          return;
        }

        delete channel._pendingSubscriptionCid;

        _this13._triggerChannelSubscribeFail(err, channel, subscriptionOptions);
      } else {
        delete channel._pendingSubscriptionCid;

        _this13._triggerChannelSubscribe(channel, subscriptionOptions);
      }
    });
    this.emit('subscribeRequest', {
      channel: channel.name,
      subscriptionOptions: subscriptionOptions
    });
  }
};

AGClientSocket.prototype.subscribe = function (channelName, options) {
  options = options || {};
  var channel = this._channelMap[channelName];
  var sanitizedOptions = {
    waitForAuth: !!options.waitForAuth
  };

  if (options.priority != null) {
    sanitizedOptions.priority = options.priority;
  }

  if (options.data !== undefined) {
    sanitizedOptions.data = options.data;
  }

  if (!channel) {
    channel = {
      name: channelName,
      state: AGChannel.PENDING,
      options: sanitizedOptions
    };
    this._channelMap[channelName] = channel;

    this._trySubscribe(channel);
  } else if (options) {
    channel.options = sanitizedOptions;
  }

  var channelIterable = new AGChannel(channelName, this, this._channelEventDemux, this._channelDataDemux);
  return channelIterable;
};

AGClientSocket.prototype._triggerChannelUnsubscribe = function (channel, setAsPending) {
  var channelName = channel.name;

  this._cancelPendingSubscribeCallback(channel);

  if (channel.state === AGChannel.SUBSCRIBED) {
    var stateChangeData = {
      oldChannelState: channel.state,
      newChannelState: setAsPending ? AGChannel.PENDING : AGChannel.UNSUBSCRIBED
    };

    this._channelEventDemux.write("".concat(channelName, "/subscribeStateChange"), stateChangeData);

    this._channelEventDemux.write("".concat(channelName, "/unsubscribe"), {});

    this.emit('subscribeStateChange', _objectSpread({
      channel: channelName
    }, stateChangeData));
    this.emit('unsubscribe', {
      channel: channelName
    });
  }

  if (setAsPending) {
    channel.state = AGChannel.PENDING;
  } else {
    delete this._channelMap[channelName];
  }
};

AGClientSocket.prototype._tryUnsubscribe = function (channel) {
  if (this.state === this.OPEN) {
    var options = {
      noTimeout: true
    }; // If there is a pending subscribe action, cancel the callback

    this._cancelPendingSubscribeCallback(channel); // This operation cannot fail because the TCP protocol guarantees delivery
    // so long as the connection remains open. If the connection closes,
    // the server will automatically unsubscribe the client and thus complete
    // the operation on the server side.


    var decoratedChannelName = this._decorateChannelName(channel.name);

    this.transport.transmit('#unsubscribe', decoratedChannelName, options);
  }
};

AGClientSocket.prototype.unsubscribe = function (channelName) {
  var channel = this._channelMap[channelName];

  if (channel) {
    this._triggerChannelUnsubscribe(channel);

    this._tryUnsubscribe(channel);
  }
}; // ---- Receiver logic ----


AGClientSocket.prototype.receiver = function (receiverName) {
  return this._receiverDemux.stream(receiverName);
};

AGClientSocket.prototype.closeReceiver = function (receiverName) {
  this._receiverDemux.close(receiverName);
};

AGClientSocket.prototype.closeAllReceivers = function () {
  this._receiverDemux.closeAll();
};

AGClientSocket.prototype.killReceiver = function (receiverName) {
  this._receiverDemux.kill(receiverName);
};

AGClientSocket.prototype.killAllReceivers = function () {
  this._receiverDemux.killAll();
};

AGClientSocket.prototype.killReceiverConsumer = function (consumerId) {
  this._receiverDemux.killConsumer(consumerId);
};

AGClientSocket.prototype.getReceiverConsumerStats = function (consumerId) {
  return this._receiverDemux.getConsumerStats(consumerId);
};

AGClientSocket.prototype.getReceiverConsumerStatsList = function (receiverName) {
  return this._receiverDemux.getConsumerStatsList(receiverName);
};

AGClientSocket.prototype.getAllReceiversConsumerStatsList = function () {
  return this._receiverDemux.getConsumerStatsListAll();
};

AGClientSocket.prototype.getReceiverBackpressure = function (receiverName) {
  return this._receiverDemux.getBackpressure(receiverName);
};

AGClientSocket.prototype.getAllReceiversBackpressure = function () {
  return this._receiverDemux.getBackpressureAll();
};

AGClientSocket.prototype.getReceiverConsumerBackpressure = function (consumerId) {
  return this._receiverDemux.getConsumerBackpressure(consumerId);
};

AGClientSocket.prototype.hasReceiverConsumer = function (receiverName, consumerId) {
  return this._receiverDemux.hasConsumer(receiverName, consumerId);
};

AGClientSocket.prototype.hasAnyReceiverConsumer = function (consumerId) {
  return this._receiverDemux.hasConsumerAll(consumerId);
}; // ---- Procedure logic ----


AGClientSocket.prototype.procedure = function (procedureName) {
  return this._procedureDemux.stream(procedureName);
};

AGClientSocket.prototype.closeProcedure = function (procedureName) {
  this._procedureDemux.close(procedureName);
};

AGClientSocket.prototype.closeAllProcedures = function () {
  this._procedureDemux.closeAll();
};

AGClientSocket.prototype.killProcedure = function (procedureName) {
  this._procedureDemux.kill(procedureName);
};

AGClientSocket.prototype.killAllProcedures = function () {
  this._procedureDemux.killAll();
};

AGClientSocket.prototype.killProcedureConsumer = function (consumerId) {
  this._procedureDemux.killConsumer(consumerId);
};

AGClientSocket.prototype.getProcedureConsumerStats = function (consumerId) {
  return this._procedureDemux.getConsumerStats(consumerId);
};

AGClientSocket.prototype.getProcedureConsumerStatsList = function (procedureName) {
  return this._procedureDemux.getConsumerStatsList(procedureName);
};

AGClientSocket.prototype.getAllProceduresConsumerStatsList = function () {
  return this._procedureDemux.getConsumerStatsListAll();
};

AGClientSocket.prototype.getProcedureBackpressure = function (procedureName) {
  return this._procedureDemux.getBackpressure(procedureName);
};

AGClientSocket.prototype.getAllProceduresBackpressure = function () {
  return this._procedureDemux.getBackpressureAll();
};

AGClientSocket.prototype.getProcedureConsumerBackpressure = function (consumerId) {
  return this._procedureDemux.getConsumerBackpressure(consumerId);
};

AGClientSocket.prototype.hasProcedureConsumer = function (procedureName, consumerId) {
  return this._procedureDemux.hasConsumer(procedureName, consumerId);
};

AGClientSocket.prototype.hasAnyProcedureConsumer = function (consumerId) {
  return this._procedureDemux.hasConsumerAll(consumerId);
}; // ---- Channel logic ----


AGClientSocket.prototype.channel = function (channelName) {
  var currentChannel = this._channelMap[channelName];
  var channelIterable = new AGChannel(channelName, this, this._channelEventDemux, this._channelDataDemux);
  return channelIterable;
};

AGClientSocket.prototype.closeChannel = function (channelName) {
  this.channelCloseOutput(channelName);
  this.channelCloseAllListeners(channelName);
};

AGClientSocket.prototype.closeAllChannelOutputs = function () {
  this._channelDataDemux.closeAll();
};

AGClientSocket.prototype.closeAllChannelListeners = function () {
  this._channelEventDemux.closeAll();
};

AGClientSocket.prototype.closeAllChannels = function () {
  this.closeAllChannelOutputs();
  this.closeAllChannelListeners();
};

AGClientSocket.prototype.killChannel = function (channelName) {
  this.channelKillOutput(channelName);
  this.channelKillAllListeners(channelName);
};

AGClientSocket.prototype.killAllChannelOutputs = function () {
  this._channelDataDemux.killAll();
};

AGClientSocket.prototype.killAllChannelListeners = function () {
  this._channelEventDemux.killAll();
};

AGClientSocket.prototype.killAllChannels = function () {
  this.killAllChannelOutputs();
  this.killAllChannelListeners();
};

AGClientSocket.prototype.killChannelOutputConsumer = function (consumerId) {
  this._channelDataDemux.killConsumer(consumerId);
};

AGClientSocket.prototype.killChannelListenerConsumer = function (consumerId) {
  this._channelEventDemux.killConsumer(consumerId);
};

AGClientSocket.prototype.getChannelOutputConsumerStats = function (consumerId) {
  return this._channelDataDemux.getConsumerStats(consumerId);
};

AGClientSocket.prototype.getChannelListenerConsumerStats = function (consumerId) {
  return this._channelEventDemux.getConsumerStats(consumerId);
};

AGClientSocket.prototype.getAllChannelOutputsConsumerStatsList = function () {
  return this._channelDataDemux.getConsumerStatsListAll();
};

AGClientSocket.prototype.getAllChannelListenersConsumerStatsList = function () {
  return this._channelEventDemux.getConsumerStatsListAll();
};

AGClientSocket.prototype.getChannelBackpressure = function (channelName) {
  return Math.max(this.channelGetOutputBackpressure(channelName), this.channelGetAllListenersBackpressure(channelName));
};

AGClientSocket.prototype.getAllChannelOutputsBackpressure = function () {
  return this._channelDataDemux.getBackpressureAll();
};

AGClientSocket.prototype.getAllChannelListenersBackpressure = function () {
  return this._channelEventDemux.getBackpressureAll();
};

AGClientSocket.prototype.getAllChannelsBackpressure = function () {
  return Math.max(this.getAllChannelOutputsBackpressure(), this.getAllChannelListenersBackpressure());
};

AGClientSocket.prototype.getChannelListenerConsumerBackpressure = function (consumerId) {
  return this._channelEventDemux.getConsumerBackpressure(consumerId);
};

AGClientSocket.prototype.getChannelOutputConsumerBackpressure = function (consumerId) {
  return this._channelDataDemux.getConsumerBackpressure(consumerId);
};

AGClientSocket.prototype.hasAnyChannelOutputConsumer = function (consumerId) {
  return this._channelDataDemux.hasConsumerAll(consumerId);
};

AGClientSocket.prototype.hasAnyChannelListenerConsumer = function (consumerId) {
  return this._channelEventDemux.hasConsumerAll(consumerId);
};

AGClientSocket.prototype.getChannelState = function (channelName) {
  var channel = this._channelMap[channelName];

  if (channel) {
    return channel.state;
  }

  return AGChannel.UNSUBSCRIBED;
};

AGClientSocket.prototype.getChannelOptions = function (channelName) {
  var channel = this._channelMap[channelName];

  if (channel) {
    return _objectSpread({}, channel.options);
  }

  return {};
};

AGClientSocket.prototype._getAllChannelStreamNames = function (channelName) {
  var streamNamesLookup = this._channelEventDemux.getConsumerStatsListAll().filter(function (stats) {
    return stats.stream.indexOf("".concat(channelName, "/")) === 0;
  }).reduce(function (accumulator, stats) {
    accumulator[stats.stream] = true;
    return accumulator;
  }, {});

  return Object.keys(streamNamesLookup);
};

AGClientSocket.prototype.channelCloseOutput = function (channelName) {
  this._channelDataDemux.close(channelName);
};

AGClientSocket.prototype.channelCloseListener = function (channelName, eventName) {
  this._channelEventDemux.close("".concat(channelName, "/").concat(eventName));
};

AGClientSocket.prototype.channelCloseAllListeners = function (channelName) {
  var _this14 = this;

  var listenerStreams = this._getAllChannelStreamNames(channelName).forEach(function (streamName) {
    _this14._channelEventDemux.close(streamName);
  });
};

AGClientSocket.prototype.channelKillOutput = function (channelName) {
  this._channelDataDemux.kill(channelName);
};

AGClientSocket.prototype.channelKillListener = function (channelName, eventName) {
  this._channelEventDemux.kill("".concat(channelName, "/").concat(eventName));
};

AGClientSocket.prototype.channelKillAllListeners = function (channelName) {
  var _this15 = this;

  var listenerStreams = this._getAllChannelStreamNames(channelName).forEach(function (streamName) {
    _this15._channelEventDemux.kill(streamName);
  });
};

AGClientSocket.prototype.channelGetOutputConsumerStatsList = function (channelName) {
  return this._channelDataDemux.getConsumerStatsList(channelName);
};

AGClientSocket.prototype.channelGetListenerConsumerStatsList = function (channelName, eventName) {
  return this._channelEventDemux.getConsumerStatsList("".concat(channelName, "/").concat(eventName));
};

AGClientSocket.prototype.channelGetAllListenersConsumerStatsList = function (channelName) {
  var _this16 = this;

  return this._getAllChannelStreamNames(channelName).map(function (streamName) {
    return _this16._channelEventDemux.getConsumerStatsList(streamName);
  }).reduce(function (accumulator, statsList) {
    statsList.forEach(function (stats) {
      accumulator.push(stats);
    });
    return accumulator;
  }, []);
};

AGClientSocket.prototype.channelGetOutputBackpressure = function (channelName) {
  return this._channelDataDemux.getBackpressure(channelName);
};

AGClientSocket.prototype.channelGetListenerBackpressure = function (channelName, eventName) {
  return this._channelEventDemux.getBackpressure("".concat(channelName, "/").concat(eventName));
};

AGClientSocket.prototype.channelGetAllListenersBackpressure = function (channelName) {
  var _this17 = this;

  var listenerStreamBackpressures = this._getAllChannelStreamNames(channelName).map(function (streamName) {
    return _this17._channelEventDemux.getBackpressure(streamName);
  });

  return Math.max.apply(Math, _toConsumableArray(listenerStreamBackpressures.concat(0)));
};

AGClientSocket.prototype.channelHasOutputConsumer = function (channelName, consumerId) {
  return this._channelDataDemux.hasConsumer(channelName, consumerId);
};

AGClientSocket.prototype.channelHasListenerConsumer = function (channelName, eventName, consumerId) {
  return this._channelEventDemux.hasConsumer("".concat(channelName, "/").concat(eventName), consumerId);
};

AGClientSocket.prototype.channelHasAnyListenerConsumer = function (channelName, consumerId) {
  var _this18 = this;

  return this._getAllChannelStreamNames(channelName).some(function (streamName) {
    return _this18._channelEventDemux.hasConsumer(streamName, consumerId);
  });
};

AGClientSocket.prototype.subscriptions = function (includePending) {
  var _this19 = this;

  var subs = [];
  Object.keys(this._channelMap).forEach(function (channelName) {
    if (includePending || _this19._channelMap[channelName].state === AGChannel.SUBSCRIBED) {
      subs.push(channelName);
    }
  });
  return subs;
};

AGClientSocket.prototype.isSubscribed = function (channelName, includePending) {
  var channel = this._channelMap[channelName];

  if (includePending) {
    return !!channel;
  }

  return !!channel && channel.state === AGChannel.SUBSCRIBED;
};

AGClientSocket.prototype.processPendingSubscriptions = function () {
  var _this20 = this;

  this.preparingPendingSubscriptions = false;
  var pendingChannels = [];
  Object.keys(this._channelMap).forEach(function (channelName) {
    var channel = _this20._channelMap[channelName];

    if (channel.state === AGChannel.PENDING) {
      pendingChannels.push(channel);
    }
  });
  pendingChannels.sort(function (a, b) {
    var ap = a.options.priority || 0;
    var bp = b.options.priority || 0;

    if (ap > bp) {
      return -1;
    }

    if (ap < bp) {
      return 1;
    }

    return 0;
  });
  pendingChannels.forEach(function (channel) {
    _this20._trySubscribe(channel);
  });
};

module.exports = AGClientSocket;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/factory.js":
/*!**********************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/factory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var AGClientSocket = __webpack_require__(/*! ./clientsocket */ "./node_modules/socketcluster-client/lib/clientsocket.js");

var uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");

var scErrors = __webpack_require__(/*! sc-errors */ "./node_modules/sc-errors/index.js");

var InvalidArgumentsError = scErrors.InvalidArgumentsError;

function isUrlSecure() {
  return global.location && location.protocol === 'https:';
}

function getPort(options, isSecureDefault) {
  var isSecure = options.secure == null ? isSecureDefault : options.secure;
  return options.port || (global.location && location.port ? location.port : isSecure ? 443 : 80);
}

function create(options) {
  options = options || {};

  if (options.host && !options.host.match(/[^:]+:\d{2,5}/)) {
    throw new InvalidArgumentsError('The host option should include both' + ' the hostname and the port number in the format "hostname:port"');
  }

  if (options.host && options.hostname) {
    throw new InvalidArgumentsError('The host option should already include' + ' the hostname and the port number in the format "hostname:port"' + ' - Because of this, you should never use host and hostname options together');
  }

  if (options.host && options.port) {
    throw new InvalidArgumentsError('The host option should already include' + ' the hostname and the port number in the format "hostname:port"' + ' - Because of this, you should never use host and port options together');
  }

  var isSecureDefault = isUrlSecure();
  var opts = {
    clientId: uuid.v4(),
    port: getPort(options, isSecureDefault),
    hostname: global.location && location.hostname || 'localhost',
    secure: isSecureDefault
  };
  Object.assign(opts, options);
  return new AGClientSocket(opts);
}

module.exports = {
  create: create
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/transport.js":
/*!************************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/transport.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AGRequest = __webpack_require__(/*! ag-request */ "./node_modules/ag-request/index.js");

var querystring = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");

var WebSocket;
var createWebSocket;

if (global.WebSocket) {
  WebSocket = global.WebSocket;

  createWebSocket = function createWebSocket(uri, options) {
    return new WebSocket(uri);
  };
} else {
  WebSocket = __webpack_require__(/*! ws */ "./node_modules/socketcluster-client/lib/ws-browser.js");

  createWebSocket = function createWebSocket(uri, options) {
    return new WebSocket(uri, null, options);
  };
}

var scErrors = __webpack_require__(/*! sc-errors */ "./node_modules/sc-errors/index.js");

var TimeoutError = scErrors.TimeoutError;
var BadConnectionError = scErrors.BadConnectionError;

function AGTransport(authEngine, codecEngine, options, wsOptions, handlers) {
  var _this = this;

  this.state = this.CLOSED;
  this.auth = authEngine;
  this.codec = codecEngine;
  this.options = options;
  this.wsOptions = wsOptions;
  this.protocolVersion = options.protocolVersion;
  this.connectTimeout = options.connectTimeout;
  this.pingTimeout = options.pingTimeout;
  this.pingTimeoutDisabled = !!options.pingTimeoutDisabled;
  this.callIdGenerator = options.callIdGenerator;
  this.authTokenName = options.authTokenName;
  this.isBufferingBatch = false;
  this._pingTimeoutTicker = null;
  this._callbackMap = {};
  this._batchBuffer = [];

  if (!handlers) {
    handlers = {};
  }

  this._onOpenHandler = handlers.onOpen || function () {};

  this._onOpenAbortHandler = handlers.onOpenAbort || function () {};

  this._onCloseHandler = handlers.onClose || function () {};

  this._onEventHandler = handlers.onEvent || function () {};

  this._onErrorHandler = handlers.onError || function () {};

  this._onInboundInvokeHandler = handlers.onInboundInvoke || function () {};

  this._onInboundTransmitHandler = handlers.onInboundTransmit || function () {}; // Open the connection.


  this.state = this.CONNECTING;
  var uri = this.uri();
  var wsSocket = createWebSocket(uri, wsOptions);
  wsSocket.binaryType = this.options.binaryType;
  this.socket = wsSocket;

  wsSocket.onopen = function () {
    _this._onOpen();
  };

  wsSocket.onclose = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var code;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (event.code == null) {
                // This is to handle an edge case in React Native whereby
                // event.code is undefined when the mobile device is locked.
                // TODO: This is not ideal since this condition could also apply to
                // an abnormal close (no close control frame) which would be a 1006.
                code = 1005;
              } else {
                code = event.code;
              }

              _this._destroy(code, event.reason);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  wsSocket.onmessage = function (message, flags) {
    _this._onMessage(message.data);
  };

  wsSocket.onerror = function (error) {
    // The onclose event will be called automatically after the onerror event
    // if the socket is connected - Otherwise, if it's in the middle of
    // connecting, we want to close it manually with a 1006 - This is necessary
    // to prevent inconsistent behavior when running the client in Node.js
    // vs in a browser.
    if (_this.state === _this.CONNECTING) {
      _this._destroy(1006);
    }
  };

  this._connectTimeoutRef = setTimeout(function () {
    _this._destroy(4007);

    _this.socket.close(4007);
  }, this.connectTimeout);

  if (this.protocolVersion === 1) {
    this._handlePing = function (message) {
      if (message === '#1') {
        _this._resetPingTimeout();

        if (_this.socket.readyState === _this.socket.OPEN) {
          _this.send('#2');
        }

        return true;
      }

      return false;
    };
  } else {
    this._handlePing = function (message) {
      if (message === '') {
        _this._resetPingTimeout();

        if (_this.socket.readyState === _this.socket.OPEN) {
          _this.send('');
        }

        return true;
      }

      return false;
    };
  }
}

AGTransport.CONNECTING = AGTransport.prototype.CONNECTING = 'connecting';
AGTransport.OPEN = AGTransport.prototype.OPEN = 'open';
AGTransport.CLOSED = AGTransport.prototype.CLOSED = 'closed';

AGTransport.prototype.uri = function () {
  var query = this.options.query || {};
  var scheme;

  if (this.options.protocolScheme == null) {
    scheme = this.options.secure ? 'wss' : 'ws';
  } else {
    scheme = this.options.protocolScheme;
  }

  if (this.options.timestampRequests) {
    query[this.options.timestampParam] = new Date().getTime();
  }

  query = querystring.encode(query);

  if (query.length) {
    query = '?' + query;
  }

  var host;
  var path;

  if (this.options.socketPath == null) {
    if (this.options.host) {
      host = this.options.host;
    } else {
      var port = '';

      if (this.options.port && (scheme === 'wss' && this.options.port !== 443 || scheme === 'ws' && this.options.port !== 80)) {
        port = ':' + this.options.port;
      }

      host = this.options.hostname + port;
    }

    path = this.options.path;
  } else {
    host = this.options.socketPath;
    path = ":".concat(this.options.path);
  }

  return scheme + '://' + host + path + query;
};

AGTransport.prototype._onOpen = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
  var status;
  return _regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          clearTimeout(this._connectTimeoutRef);

          this._resetPingTimeout();

          _context2.prev = 2;
          _context2.next = 5;
          return this._handshake();

        case 5:
          status = _context2.sent;
          _context2.next = 15;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);

          if (_context2.t0.statusCode == null) {
            _context2.t0.statusCode = 4003;
          }

          this._onError(_context2.t0);

          this._destroy(_context2.t0.statusCode, _context2.t0.toString());

          this.socket.close(_context2.t0.statusCode);
          return _context2.abrupt("return");

        case 15:
          this.state = this.OPEN;

          if (status) {
            this.pingTimeout = status.pingTimeout;
          }

          this._resetPingTimeout();

          this._onOpenHandler(status);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this, [[2, 8]]);
}));
AGTransport.prototype._handshake = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
  var token, options, status;
  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return this.auth.loadToken(this.authTokenName);

        case 2:
          token = _context3.sent;
          // Don't wait for this.state to be 'open'.
          // The underlying WebSocket (this.socket) is already open.
          options = {
            force: true
          };
          _context3.next = 6;
          return this.invoke('#handshake', {
            authToken: token
          }, options);

        case 6:
          status = _context3.sent;

          if (status) {
            // Add the token which was used as part of authentication attempt
            // to the status object.
            status.authToken = token;

            if (status.authError) {
              status.authError = scErrors.hydrateError(status.authError);
            }
          }

          return _context3.abrupt("return", status);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));

AGTransport.prototype._abortAllPendingEventsDueToBadConnection = function (failureType) {
  var _this2 = this;

  Object.keys(this._callbackMap || {}).forEach(function (i) {
    var eventObject = _this2._callbackMap[i];
    delete _this2._callbackMap[i];
    clearTimeout(eventObject.timeout);
    delete eventObject.timeout;
    var errorMessage = "Event \"".concat(eventObject.event, "\" was aborted due to a bad connection");
    var badConnectionError = new BadConnectionError(errorMessage, failureType);
    var callback = eventObject.callback;

    if (callback) {
      delete eventObject.callback;
      callback.call(eventObject, badConnectionError, eventObject);
    }
  });
};

AGTransport.prototype._destroy = function (code, reason) {
  var protocolReason = scErrors.socketProtocolErrorStatuses[code];

  if (!reason && scErrors.socketProtocolErrorStatuses[code]) {
    reason = scErrors.socketProtocolErrorStatuses[code];
  }

  delete this.socket.onopen;
  delete this.socket.onclose;
  delete this.socket.onmessage;
  delete this.socket.onerror;
  clearTimeout(this._connectTimeoutRef);
  clearTimeout(this._pingTimeoutTicker);

  if (this.state === this.OPEN) {
    this.state = this.CLOSED;

    this._abortAllPendingEventsDueToBadConnection('disconnect');

    this._onCloseHandler({
      code: code,
      reason: reason
    });
  } else if (this.state === this.CONNECTING) {
    this.state = this.CLOSED;

    this._abortAllPendingEventsDueToBadConnection('connectAbort');

    this._onOpenAbortHandler({
      code: code,
      reason: reason
    });
  } else if (this.state === this.CLOSED) {
    this._abortAllPendingEventsDueToBadConnection('connectAbort');
  }
};

AGTransport.prototype._processInboundPacket = function (packet, message) {
  if (packet && packet.event != null) {
    if (packet.cid == null) {
      this._onInboundTransmitHandler(_objectSpread({}, packet));
    } else {
      var request = new AGRequest(this, packet.cid, packet.event, packet.data);

      this._onInboundInvokeHandler(request);
    }
  } else if (packet && packet.rid != null) {
    var eventObject = this._callbackMap[packet.rid];

    if (eventObject) {
      clearTimeout(eventObject.timeout);
      delete eventObject.timeout;
      delete this._callbackMap[packet.rid];

      if (eventObject.callback) {
        var rehydratedError = scErrors.hydrateError(packet.error);
        eventObject.callback(rehydratedError, packet.data);
      }
    }
  } else {
    this._onEventHandler({
      event: 'raw',
      data: {
        message: message
      }
    });
  }
};

AGTransport.prototype._onMessage = function (message) {
  this._onEventHandler({
    event: 'message',
    data: {
      message: message
    }
  });

  if (this._handlePing(message)) {
    return;
  }

  var packet = this.decode(message);

  if (Array.isArray(packet)) {
    var len = packet.length;

    for (var i = 0; i < len; i++) {
      this._processInboundPacket(packet[i], message);
    }
  } else {
    this._processInboundPacket(packet, message);
  }
};

AGTransport.prototype._onError = function (error) {
  this._onErrorHandler({
    error: error
  });
};

AGTransport.prototype._resetPingTimeout = function () {
  var _this3 = this;

  if (this.pingTimeoutDisabled) {
    return;
  }

  var now = new Date().getTime();
  clearTimeout(this._pingTimeoutTicker);
  this._pingTimeoutTicker = setTimeout(function () {
    _this3._destroy(4000);

    _this3.socket.close(4000);
  }, this.pingTimeout);
};

AGTransport.prototype.clearAllListeners = function () {
  this._onOpenHandler = function () {};

  this._onOpenAbortHandler = function () {};

  this._onCloseHandler = function () {};

  this._onEventHandler = function () {};

  this._onErrorHandler = function () {};

  this._onInboundInvokeHandler = function () {};

  this._onInboundTransmitHandler = function () {};
};

AGTransport.prototype.startBatch = function () {
  this.isBufferingBatch = true;
  this._batchBuffer = [];
};

AGTransport.prototype.flushBatch = function () {
  this.isBufferingBatch = false;

  if (!this._batchBuffer.length) {
    return;
  }

  var serializedBatch = this.serializeObject(this._batchBuffer);
  this._batchBuffer = [];
  this.send(serializedBatch);
};

AGTransport.prototype.cancelBatch = function () {
  this.isBufferingBatch = false;
  this._batchBuffer = [];
};

AGTransport.prototype.getBytesReceived = function () {
  return this.socket.bytesReceived;
};

AGTransport.prototype.close = function (code, reason) {
  if (this.state === this.OPEN || this.state === this.CONNECTING) {
    code = code || 1000;

    this._destroy(code, reason);

    this.socket.close(code, reason);
  }
};

AGTransport.prototype.transmitObject = function (eventObject) {
  var simpleEventObject = {
    event: eventObject.event,
    data: eventObject.data
  };

  if (eventObject.callback) {
    simpleEventObject.cid = eventObject.cid = this.callIdGenerator();
    this._callbackMap[eventObject.cid] = eventObject;
  }

  this.sendObject(simpleEventObject);
  return eventObject.cid || null;
};

AGTransport.prototype._handleEventAckTimeout = function (eventObject) {
  if (eventObject.cid) {
    delete this._callbackMap[eventObject.cid];
  }

  delete eventObject.timeout;
  var callback = eventObject.callback;

  if (callback) {
    delete eventObject.callback;
    var error = new TimeoutError("Event response for \"".concat(eventObject.event, "\" timed out"));
    callback.call(eventObject, error, eventObject);
  }
};

AGTransport.prototype.transmit = function (event, data, options) {
  var eventObject = {
    event: event,
    data: data
  };

  if (this.state === this.OPEN || options.force) {
    this.transmitObject(eventObject);
  }

  return Promise.resolve();
};

AGTransport.prototype.invokeRaw = function (event, data, options, callback) {
  var _this4 = this;

  var eventObject = {
    event: event,
    data: data,
    callback: callback
  };

  if (!options.noTimeout) {
    eventObject.timeout = setTimeout(function () {
      _this4._handleEventAckTimeout(eventObject);
    }, this.options.ackTimeout);
  }

  var cid = null;

  if (this.state === this.OPEN || options.force) {
    cid = this.transmitObject(eventObject);
  }

  return cid;
};

AGTransport.prototype.invoke = function (event, data, options) {
  var _this5 = this;

  return new Promise(function (resolve, reject) {
    _this5.invokeRaw(event, data, options, function (err, data) {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
};

AGTransport.prototype.cancelPendingResponse = function (cid) {
  delete this._callbackMap[cid];
};

AGTransport.prototype.decode = function (message) {
  return this.codec.decode(message);
};

AGTransport.prototype.encode = function (object) {
  return this.codec.encode(object);
};

AGTransport.prototype.send = function (data) {
  if (this.socket.readyState !== this.socket.OPEN) {
    this._destroy(1005);
  } else {
    this.socket.send(data);
  }
};

AGTransport.prototype.serializeObject = function (object) {
  var str;

  try {
    str = this.encode(object);
  } catch (error) {
    this._onError(error);

    return null;
  }

  return str;
};

AGTransport.prototype.sendObject = function (object) {
  if (this.isBufferingBatch) {
    this._batchBuffer.push(object);

    return;
  }

  var str = this.serializeObject(object);

  if (str != null) {
    this.send(str);
  }
};

module.exports = AGTransport;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/wait.js":
/*!*******************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/wait.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function wait(duration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
}

module.exports = wait;

/***/ }),

/***/ "./node_modules/socketcluster-client/lib/ws-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/socketcluster-client/lib/ws-browser.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var global;

if (typeof WorkerGlobalScope !== 'undefined') {
  global = self;
} else {
  global = typeof window !== 'undefined' && window || function () {
    return this;
  }();
}

var WebSocket = global.WebSocket || global.MozWebSocket;
/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object} opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;

  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }

  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;
module.exports = WebSocket ? ws : null;

/***/ }),

/***/ "./node_modules/stream-demux/demuxed-consumable-stream.js":
/*!****************************************************************!*\
  !*** ./node_modules/stream-demux/demuxed-consumable-stream.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConsumableStream = __webpack_require__(/*! consumable-stream */ "./node_modules/consumable-stream/index.js");

var DemuxedConsumableStream = /*#__PURE__*/function (_ConsumableStream) {
  "use strict";

  _inherits(DemuxedConsumableStream, _ConsumableStream);

  var _super = _createSuper(DemuxedConsumableStream);

  function DemuxedConsumableStream(streamDemux, name) {
    var _this;

    _classCallCheck(this, DemuxedConsumableStream);

    _this = _super.call(this);
    _this.name = name;
    _this._streamDemux = streamDemux;
    return _this;
  }

  _createClass(DemuxedConsumableStream, [{
    key: "createConsumer",
    value: function createConsumer(timeout) {
      return this._streamDemux.createConsumer(this.name, timeout);
    }
  }]);

  return DemuxedConsumableStream;
}(ConsumableStream);

module.exports = DemuxedConsumableStream;

/***/ }),

/***/ "./node_modules/stream-demux/index.js":
/*!********************************************!*\
  !*** ./node_modules/stream-demux/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var WritableConsumableStream = __webpack_require__(/*! writable-consumable-stream */ "./node_modules/writable-consumable-stream/index.js");

var DemuxedConsumableStream = __webpack_require__(/*! ./demuxed-consumable-stream */ "./node_modules/stream-demux/demuxed-consumable-stream.js");

var StreamDemux = /*#__PURE__*/function () {
  "use strict";

  function StreamDemux() {
    _classCallCheck(this, StreamDemux);

    this._mainStream = new WritableConsumableStream();
  }

  _createClass(StreamDemux, [{
    key: "write",
    value: function write(streamName, value) {
      this._mainStream.write({
        stream: streamName,
        data: {
          value: value,
          done: false
        }
      });
    }
  }, {
    key: "close",
    value: function close(streamName, value) {
      this._mainStream.write({
        stream: streamName,
        data: {
          value: value,
          done: true
        }
      });
    }
  }, {
    key: "closeAll",
    value: function closeAll(value) {
      this._mainStream.close(value);
    }
  }, {
    key: "writeToConsumer",
    value: function writeToConsumer(consumerId, value) {
      this._mainStream.writeToConsumer(consumerId, {
        consumerId: consumerId,
        data: {
          value: value,
          done: false
        }
      });
    }
  }, {
    key: "closeConsumer",
    value: function closeConsumer(consumerId, value) {
      this._mainStream.closeConsumer(consumerId, {
        consumerId: consumerId,
        data: {
          value: value,
          done: true
        }
      });
    }
  }, {
    key: "getConsumerStats",
    value: function getConsumerStats(consumerId) {
      return this._mainStream.getConsumerStats(consumerId);
    }
  }, {
    key: "getConsumerStatsList",
    value: function getConsumerStatsList(streamName) {
      var consumerList = this._mainStream.getConsumerStatsList();

      return consumerList.filter(function (consumerStats) {
        return consumerStats.stream === streamName;
      });
    }
  }, {
    key: "getConsumerStatsListAll",
    value: function getConsumerStatsListAll() {
      return this._mainStream.getConsumerStatsList();
    }
  }, {
    key: "kill",
    value: function kill(streamName, value) {
      var consumerList = this.getConsumerStatsList(streamName);
      var len = consumerList.length;

      for (var i = 0; i < len; i++) {
        this.killConsumer(consumerList[i].id, value);
      }
    }
  }, {
    key: "killAll",
    value: function killAll(value) {
      this._mainStream.kill(value);
    }
  }, {
    key: "killConsumer",
    value: function killConsumer(consumerId, value) {
      this._mainStream.killConsumer(consumerId, value);
    }
  }, {
    key: "getBackpressure",
    value: function getBackpressure(streamName) {
      var consumerList = this.getConsumerStatsList(streamName);
      var len = consumerList.length;
      var maxBackpressure = 0;

      for (var i = 0; i < len; i++) {
        var consumer = consumerList[i];

        if (consumer.backpressure > maxBackpressure) {
          maxBackpressure = consumer.backpressure;
        }
      }

      return maxBackpressure;
    }
  }, {
    key: "getBackpressureAll",
    value: function getBackpressureAll() {
      return this._mainStream.getBackpressure();
    }
  }, {
    key: "getConsumerBackpressure",
    value: function getConsumerBackpressure(consumerId) {
      return this._mainStream.getConsumerBackpressure(consumerId);
    }
  }, {
    key: "hasConsumer",
    value: function hasConsumer(streamName, consumerId) {
      var consumerStats = this._mainStream.getConsumerStats(consumerId);

      return !!consumerStats && consumerStats.stream === streamName;
    }
  }, {
    key: "hasConsumerAll",
    value: function hasConsumerAll(consumerId) {
      return this._mainStream.hasConsumer(consumerId);
    }
  }, {
    key: "createConsumer",
    value: function createConsumer(streamName, timeout) {
      var mainStreamConsumer = this._mainStream.createConsumer(timeout);

      var consumerNext = mainStreamConsumer.next;
      mainStreamConsumer.next = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var packet,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                _context.next = 3;
                return consumerNext.apply(this, _args);

              case 3:
                packet = _context.sent;

                if (!packet.value) {
                  _context.next = 8;
                  break;
                }

                if (!(packet.value.stream === streamName || packet.value.consumerId === this.id)) {
                  _context.next = 8;
                  break;
                }

                if (packet.value.data.done) {
                  this["return"]();
                }

                return _context.abrupt("return", packet.value.data);

              case 8:
                if (!packet.done) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", packet);

              case 10:
                _context.next = 0;
                break;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      var consumerGetStats = mainStreamConsumer.getStats;

      mainStreamConsumer.getStats = function () {
        var stats = consumerGetStats.apply(this, arguments);
        stats.stream = streamName;
        return stats;
      };

      var consumerApplyBackpressure = mainStreamConsumer.applyBackpressure;

      mainStreamConsumer.applyBackpressure = function (packet) {
        if (packet.value) {
          if (packet.value.stream === streamName || packet.value.consumerId === this.id) {
            consumerApplyBackpressure.apply(this, arguments);
            return;
          }
        }

        if (packet.done) {
          consumerApplyBackpressure.apply(this, arguments);
        }
      };

      var consumerReleaseBackpressure = mainStreamConsumer.releaseBackpressure;

      mainStreamConsumer.releaseBackpressure = function (packet) {
        if (packet.value) {
          if (packet.value.stream === streamName || packet.value.consumerId === this.id) {
            consumerReleaseBackpressure.apply(this, arguments);
            return;
          }
        }

        if (packet.done) {
          consumerReleaseBackpressure.apply(this, arguments);
        }
      };

      return mainStreamConsumer;
    }
  }, {
    key: "stream",
    value: function stream(streamName) {
      return new DemuxedConsumableStream(this, streamName);
    }
  }]);

  return StreamDemux;
}();

module.exports = StreamDemux;

/***/ }),

/***/ "./node_modules/underscore/modules/_baseCreate.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseCreate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseCreate; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");

 // Create a naked function reference for surrogate-prototype-swapping.

function ctor() {
  return function () {};
} // An internal function for creating a new object that inherits from another.


function baseCreate(prototype) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype)) return {};
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"])(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor();
  Ctor.prototype = null;
  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_baseIteratee.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseIteratee.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseIteratee; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");






 // An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.

function baseIteratee(value, context, argCount) {
  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) return Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, context, argCount);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && !Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) return Object(_matcher_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
}

/***/ }),

/***/ "./node_modules/underscore/modules/_cb.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/_cb.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cb; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");


 // The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.

function cb(value, context, argCount) {
  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee(value, context);
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, argCount);
}

/***/ }),

/***/ "./node_modules/underscore/modules/_chainResult.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_chainResult.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainResult; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
 // Helper function to continue chaining intermediate results.

function chainResult(instance, obj) {
  return instance._chain ? Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj).chain() : obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_collectNonEnumProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/underscore/modules/_collectNonEnumProps.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectNonEnumProps; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");


 // Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.

function emulatedSet(keys) {
  var hash = {};

  for (var l = keys.length, i = 0; i < l; ++i) {
    hash[keys[i]] = true;
  }

  return {
    contains: function contains(key) {
      return hash[key];
    },
    push: function push(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
} // Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.


function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"].length;
  var constructor = obj.constructor;
  var proto = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(constructor) && constructor.prototype || _setup_js__WEBPACK_IMPORTED_MODULE_0__["ObjProto"]; // Constructor is a special case.

  var prop = 'constructor';
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"][nonEnumIdx];

    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createAssigner.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore/modules/_createAssigner.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAssigner; });
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function (obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;

    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;

      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }

    return obj;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createEscaper.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_createEscaper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEscaper; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
 // Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.

function createEscaper(map) {
  var escaper = function escaper(match) {
    return map[match];
  }; // Regexes for identifying a key that needs to be escaped.


  var source = '(?:' + Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function (string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createIndexFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_createIndexFinder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIndexFinder; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");


 // Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.

function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function (array, item, idx) {
    var i = 0,
        length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);

    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }

    if (item !== item) {
      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return idx >= 0 ? idx + i : -1;
    }

    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }

    return -1;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createPredicateIndexFinder.js":
/*!************************************************************************!*\
  !*** ./node_modules/underscore/modules/_createPredicateIndexFinder.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPredicateIndexFinder; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");

 // Internal function to generate `_.findIndex` and `_.findLastIndex`.

function createPredicateIndexFinder(dir) {
  return function (array, predicate, context) {
    predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
    var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }

    return -1;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createReduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_createReduce.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduce; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");


 // Internal helper to create a reducing function, iterating left or right.

function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function reducer(obj, iteratee, memo, initial) {
    var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;

    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }

    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }

    return memo;
  };

  return function (obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context, 4), memo, initial);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_createSizePropertyCheck.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/_createSizePropertyCheck.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSizePropertyCheck; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Common internal logic for `isArrayLike` and `isBufferLike`.

function createSizePropertyCheck(getSizeProperty) {
  return function (collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__["MAX_ARRAY_INDEX"];
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_deepGet.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_deepGet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepGet; });
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;

  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }

  return length ? obj : void 0;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_escapeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_escapeMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Internal list of HTML entities for escaping.
/* harmony default export */ __webpack_exports__["default"] = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});

/***/ }),

/***/ "./node_modules/underscore/modules/_executeBound.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_executeBound.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return executeBound; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");

 // Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.

function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) return result;
  return self;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_flatten.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");



 // Internal implementation of a recursive `flatten` function.

function flatten(input, depth, strict, output) {
  output = output || [];

  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }

  var idx = output.length;

  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input); i < length; i++) {
    var value = input[i];

    if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0,
            len = value.length;

        while (j < len) {
          output[idx++] = value[j++];
        }
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }

  return output;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_getByteLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_getByteLength.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");
 // Internal helper to obtain the `byteLength` property of an object.

/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('byteLength'));

/***/ }),

/***/ "./node_modules/underscore/modules/_getLength.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_getLength.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");
 // Internal helper to obtain the `length` property of an object.

/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('length'));

/***/ }),

/***/ "./node_modules/underscore/modules/_group.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_group.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");

 // An internal function used for aggregate "group by" operations.

function group(behavior, partition) {
  return function (obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function (value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/_has.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Internal function to check whether `key` is an own property name of `obj`.

function has(obj, key) {
  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"].call(obj, key);
}

/***/ }),

/***/ "./node_modules/underscore/modules/_hasObjectTag.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_hasObjectTag.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));

/***/ }),

/***/ "./node_modules/underscore/modules/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_isArrayLike.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");

 // Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/_isBufferLike.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_isBufferLike.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");

 // Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/_keyInObj.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/_keyInObj.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyInObj; });
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/_methodFingerprint.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_methodFingerprint.js ***!
  \***************************************************************/
/*! exports provided: ie11fingerprint, mapMethods, weakMapMethods, setMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ie11fingerprint", function() { return ie11fingerprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMethods", function() { return mapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weakMapMethods", function() { return weakMapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMethods", function() { return setMethods; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");


 // Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.

function ie11fingerprint(methods) {
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(methods);
  return function (obj) {
    if (obj == null) return false; // `Map`, `WeakMap` and `Set` have no enumerable keys.

    var keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    if (Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(keys)) return false;

    for (var i = 0; i < length; i++) {
      if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[methods[i]])) return false;
    } // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.


    return methods !== weakMapMethods || !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[forEachName]);
  };
} // In the interest of compact minification, we write
// each string in the fingerprints only once.

var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set']; // `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.

var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);

/***/ }),

/***/ "./node_modules/underscore/modules/_optimizeCb.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_optimizeCb.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return optimizeCb; });
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;

  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (value) {
        return func.call(context, value);
      };
    // The 2-argument case is omitted because we’re not using it.

    case 3:
      return function (value, index, collection) {
        return func.call(context, value, index, collection);
      };

    case 4:
      return function (accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }

  return function () {
    return func.apply(context, arguments);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_setup.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_setup.js ***!
  \***************************************************/
/*! exports provided: VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProto", function() { return ArrayProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjProto", function() { return ObjProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolProto", function() { return SymbolProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsArrayBuffer", function() { return supportsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDataView", function() { return supportsDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsArray", function() { return nativeIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeKeys", function() { return nativeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeCreate", function() { return nativeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsView", function() { return nativeIsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNaN", function() { return _isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isFinite", function() { return _isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEnumBug", function() { return hasEnumBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonEnumerableProps", function() { return nonEnumerableProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ARRAY_INDEX", function() { return MAX_ARRAY_INDEX; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

// Current version.
var VERSION = '1.12.0'; // Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.

var root = (typeof self === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(self)) == 'object' && self.self === self && self || (typeof global === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(global)) == 'object' && global.global === global && global || Function('return this')() || {}; // Save bytes in the minified (but not gzipped) version:

var ArrayProto = Array.prototype,
    ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null; // Create quick reference variables for speed access to core prototypes.

var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty; // Modern feature detection.

var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined'; // All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.

var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView; // Create references to these builtin functions because we override them.

var _isNaN = isNaN,
    _isFinite = isFinite; // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.

var hasEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // The largest integer that can be represented exactly.

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/underscore/modules/_shallowProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/_shallowProperty.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowProperty; });
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_stringTagBug.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_stringTagBug.js ***!
  \**********************************************************/
/*! exports provided: hasStringTagBug, isIE11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasStringTagBug", function() { return hasStringTagBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasObjectTag.js */ "./node_modules/underscore/modules/_hasObjectTag.js");

 // In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.

var hasStringTagBug = _setup_js__WEBPACK_IMPORTED_MODULE_0__["supportsDataView"] && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new DataView(new ArrayBuffer(8))),
    isIE11 = typeof Map !== 'undefined' && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Map());

/***/ }),

/***/ "./node_modules/underscore/modules/_tagTester.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_tagTester.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagTester; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Internal function for creating a `toString`-based type tester.

function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function (obj) {
    return _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === tag;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/_toBufferView.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_toBufferView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toBufferView; });
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");
 // Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.

function toBufferView(bufferSource) {
  return new Uint8Array(bufferSource.buffer || bufferSource, bufferSource.byteOffset || 0, Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bufferSource));
}

/***/ }),

/***/ "./node_modules/underscore/modules/_toPath.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/_toPath.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPath.js */ "./node_modules/underscore/modules/toPath.js");

 // Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.

function toPath(path) {
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath(path);
}

/***/ }),

/***/ "./node_modules/underscore/modules/_unescapeMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_unescapeMap.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");

 // Internal list of HTML entities for unescaping.

/* harmony default export */ __webpack_exports__["default"] = (Object(_invert_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/after.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/after.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return after; });
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/allKeys.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/allKeys.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allKeys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");


 // Retrieve all the enumerable property names of an object.

function allKeys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  } // Ahem, IE < 9.


  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, keys);
  return keys;
}

/***/ }),

/***/ "./node_modules/underscore/modules/before.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/before.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return before; });
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function () {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }

    if (times <= 1) func = null;
    return memo;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/bind.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/bind.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");


 // Create a function bound to a given object (assigning `this`, and arguments,
// optionally).

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (func, context, args) {
  if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func)) throw new TypeError('Bind must be called on a function');
  var bound = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (callArgs) {
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));

/***/ }),

/***/ "./node_modules/underscore/modules/bindAll.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/bindAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");


 // Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (obj, keys) {
  keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');

  while (index--) {
    var key = keys[index];
    obj[key] = Object(_bind_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj[key], obj);
  }

  return obj;
}));

/***/ }),

/***/ "./node_modules/underscore/modules/chain.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chain.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chain; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
 // Start chaining a wrapped Underscore object.

function chain(obj) {
  var instance = Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);

  instance._chain = true;
  return instance;
}

/***/ }),

/***/ "./node_modules/underscore/modules/chunk.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chunk.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chunk; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Chunk a single array into multiple arrays, each containing `count` or fewer
// items.

function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0,
      length = array.length;

  while (i < length) {
    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, i, i += count));
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/clone.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/clone.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clone; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");


 // Create a (shallow-cloned) duplicate of an object.

function clone(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return obj;
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj.slice() : Object(_extend_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, obj);
}

/***/ }),

/***/ "./node_modules/underscore/modules/compact.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compact.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compact; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
 // Trim out all falsy values from an array.

function compact(array) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Boolean);
}

/***/ }),

/***/ "./node_modules/underscore/modules/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compose.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var i = start;
    var result = args[start].apply(this, arguments);

    while (i--) {
      result = args[i].call(this, result);
    }

    return result;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constant; });
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function () {
    return value;
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/contains.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");


 // Determine if the array or object contains a given item (using `===`).

function contains(obj, item, fromIndex, guard) {
  if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return Object(_indexOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, item, fromIndex) >= 0;
}

/***/ }),

/***/ "./node_modules/underscore/modules/countBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/countBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");

 // Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.

/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key]++;else result[key] = 1;
}));

/***/ }),

/***/ "./node_modules/underscore/modules/create.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/create.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");

 // Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.

function create(prototype, props) {
  var result = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype);
  if (props) Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, props);
  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/debounce.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/debounce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");

 // When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.

function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function later(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (args) {
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = Object(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"])(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/underscore/modules/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/defaults.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");

 // Fill in a given object with default properties.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"], true));

/***/ }),

/***/ "./node_modules/underscore/modules/defer.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/defer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


 // Defers a function, scheduling it to run after the current call stack has
// cleared.

/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"], 1));

/***/ }),

/***/ "./node_modules/underscore/modules/delay.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/delay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
 // Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
}));

/***/ }),

/***/ "./node_modules/underscore/modules/difference.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/difference.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");



 // Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (array, rest) {
  rest = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rest, true, true);
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, function (value) {
    return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rest, value);
  });
}));

/***/ }),

/***/ "./node_modules/underscore/modules/each.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/each.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return each; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


 // The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.

function each(obj, iteratee, context) {
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var i, length;

  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);

    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/escape.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");

 // Function for escaping strings to HTML interpolation.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/every.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/every.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return every; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


 // Determine whether all of the elements pass a truth test.

function every(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);

  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }

  return true;
}

/***/ }),

/***/ "./node_modules/underscore/modules/extend.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/extend.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");

 // Extend a given object with all the properties in passed-in object(s).

/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/extendOwn.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/extendOwn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");

 // Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/filter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");

 // Return all the elements that pass a truth test.

function filter(obj, predicate, context) {
  var results = [];
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function (value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}

/***/ }),

/***/ "./node_modules/underscore/modules/find.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/find.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return find; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");


 // Return the first value which passes a truth test.

function find(obj, predicate, context) {
  var keyFinder = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}

/***/ }),

/***/ "./node_modules/underscore/modules/findIndex.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findIndex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");
 // Returns the first index on an array-like that passes a truth test.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));

/***/ }),

/***/ "./node_modules/underscore/modules/findKey.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/findKey.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findKey; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");

 // Returns the first key on an object that passes a truth test.

function findKey(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);

  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
      key;

  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}

/***/ }),

/***/ "./node_modules/underscore/modules/findLastIndex.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/findLastIndex.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");
 // Returns the last index on an array-like that passes a truth test.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));

/***/ }),

/***/ "./node_modules/underscore/modules/findWhere.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findWhere.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findWhere; });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");

 // Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.

function findWhere(obj, attrs) {
  return Object(_find_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}

/***/ }),

/***/ "./node_modules/underscore/modules/first.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/first.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return first; });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");
 // Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.

function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, array.length - n);
}

/***/ }),

/***/ "./node_modules/underscore/modules/flatten.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/flatten.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
 // Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.

function flatten(array, depth) {
  return Object(_flatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, depth, false);
}

/***/ }),

/***/ "./node_modules/underscore/modules/functions.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/functions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return functions; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
 // Return a sorted list of the function names available on the object.

function functions(obj) {
  var names = [];

  for (var key in obj) {
    if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj[key])) names.push(key);
  }

  return names.sort();
}

/***/ }),

/***/ "./node_modules/underscore/modules/get.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/get.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isUndefined.js */ "./node_modules/underscore/modules/isUndefined.js");


 // Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.

function get(object, path, defaultValue) {
  var value = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, Object(_toPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path));
  return Object(_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? defaultValue : value;
}

/***/ }),

/***/ "./node_modules/underscore/modules/groupBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/groupBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");

 // Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.

/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key].push(value);else result[key] = [value];
}));

/***/ }),

/***/ "./node_modules/underscore/modules/has.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/has.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");

 // Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.

function has(obj, path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;

  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, key)) return false;
    obj = obj[key];
  }

  return !!length;
}

/***/ }),

/***/ "./node_modules/underscore/modules/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/identity.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}

/***/ }),

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/*! exports provided: default, VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, isMap, isWeakMap, isSet, isWeakSet, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, get, has, mapObject, identity, constant, noop, toPath, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "./node_modules/underscore/modules/index-default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["restArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFinite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isTypedArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["allKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["functions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["methods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extendOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["has"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["propertyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["times"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unescape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["templateSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["iteratee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["negate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findLastIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortedIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["lastIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["detect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findWhere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["collect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduceRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["every"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["include"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["countBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["initial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["rest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["intersection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["difference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unzip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mixin"]; });

// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.



/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```

 // Add all of the Underscore functions to the wrapper object.

var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__); // Legacy Node.js API.


_._ = _; // Export the Underscore API.

/* harmony default export */ __webpack_exports__["default"] = (_);

/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/*! exports provided: VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, isMap, isWeakMap, isSet, isWeakSet, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, get, has, mapObject, identity, constant, noop, toPath, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _restArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull.js */ "./node_modules/underscore/modules/isNull.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _isNull_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined.js */ "./node_modules/underscore/modules/isUndefined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isElement.js */ "./node_modules/underscore/modules/isElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _isElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/underscore/modules/isDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp.js */ "./node_modules/underscore/modules/isRegExp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isError.js */ "./node_modules/underscore/modules/isError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _isError_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isArrayBuffer.js */ "./node_modules/underscore/modules/isArrayBuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _isDataView_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _isArguments_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isFinite.js */ "./node_modules/underscore/modules/isFinite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _isFinite_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _isNaN_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isEmpty.js */ "./node_modules/underscore/modules/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _isMatch_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isEqual.js */ "./node_modules/underscore/modules/isEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/underscore/modules/isMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _isMap_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isWeakMap.js */ "./node_modules/underscore/modules/isWeakMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/underscore/modules/isSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _isSet_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isWeakSet.js */ "./node_modules/underscore/modules/isWeakSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _allKeys_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/underscore/modules/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _invert_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _extend_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create.js */ "./node_modules/underscore/modules/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./clone.js */ "./node_modules/underscore/modules/clone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tap.js */ "./node_modules/underscore/modules/tap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _tap_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./get.js */ "./node_modules/underscore/modules/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./has.js */ "./node_modules/underscore/modules/has.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _has_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mapObject.js */ "./node_modules/underscore/modules/mapObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _mapObject_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _constant_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./noop.js */ "./node_modules/underscore/modules/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./toPath.js */ "./node_modules/underscore/modules/toPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _toPath_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./propertyOf.js */ "./node_modules/underscore/modules/propertyOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./times.js */ "./node_modules/underscore/modules/times.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _times_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./escape.js */ "./node_modules/underscore/modules/escape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _escape_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./unescape.js */ "./node_modules/underscore/modules/unescape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _unescape_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./template.js */ "./node_modules/underscore/modules/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _template_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./result.js */ "./node_modules/underscore/modules/result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _result_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./uniqueId.js */ "./node_modules/underscore/modules/uniqueId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chain.js */ "./node_modules/underscore/modules/chain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _chain_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _iteratee_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _partial_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./bindAll.js */ "./node_modules/underscore/modules/bindAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _bindAll_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/underscore/modules/memoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _delay_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./defer.js */ "./node_modules/underscore/modules/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _defer_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/underscore/modules/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/underscore/modules/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./wrap.js */ "./node_modules/underscore/modules/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _negate_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./compose.js */ "./node_modules/underscore/modules/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./after.js */ "./node_modules/underscore/modules/after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _after_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _before_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./once.js */ "./node_modules/underscore/modules/once.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _findKey_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _indexOf_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./lastIndexOf.js */ "./node_modules/underscore/modules/lastIndexOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./findWhere.js */ "./node_modules/underscore/modules/findWhere.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _findWhere_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./reduce.js */ "./node_modules/underscore/modules/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./reduceRight.js */ "./node_modules/underscore/modules/reduceRight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./reject.js */ "./node_modules/underscore/modules/reject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _reject_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./every.js */ "./node_modules/underscore/modules/every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./some.js */ "./node_modules/underscore/modules/some.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./invoke.js */ "./node_modules/underscore/modules/invoke.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _invoke_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./where.js */ "./node_modules/underscore/modules/where.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _where_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./min.js */ "./node_modules/underscore/modules/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/underscore/modules/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _sample_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./sortBy.js */ "./node_modules/underscore/modules/sortBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _sortBy_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./groupBy.js */ "./node_modules/underscore/modules/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _groupBy_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./indexBy.js */ "./node_modules/underscore/modules/indexBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _indexBy_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./countBy.js */ "./node_modules/underscore/modules/countBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _countBy_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./partition.js */ "./node_modules/underscore/modules/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./toArray.js */ "./node_modules/underscore/modules/toArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _toArray_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./size.js */ "./node_modules/underscore/modules/size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./omit.js */ "./node_modules/underscore/modules/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./first.js */ "./node_modules/underscore/modules/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _initial_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./last.js */ "./node_modules/underscore/modules/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./compact.js */ "./node_modules/underscore/modules/compact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _compact_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./flatten.js */ "./node_modules/underscore/modules/flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./without.js */ "./node_modules/underscore/modules/without.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _without_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./union.js */ "./node_modules/underscore/modules/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./intersection.js */ "./node_modules/underscore/modules/intersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./zip.js */ "./node_modules/underscore/modules/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./object.js */ "./node_modules/underscore/modules/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./range.js */ "./node_modules/underscore/modules/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./chunk.js */ "./node_modules/underscore/modules/chunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./mixin.js */ "./node_modules/underscore/modules/mixin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _mixin_js__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./underscore-array-methods.js */ "./node_modules/underscore/modules/underscore-array-methods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__["default"]; });

// Named Exports
// =============
//     Underscore.js 1.12.0
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
// Baseline setup.

 // Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.
// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.


























 // Functions that treat an object as a dictionary of key-value pairs.















 // Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.


















 // Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.














 // Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.








 // Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.























 // `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.


 // Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.
















 // OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),

/***/ "./node_modules/underscore/modules/indexBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
 // Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.

/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (result, value, key) {
  result[key] = value;
}));

/***/ }),

/***/ "./node_modules/underscore/modules/indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexOf.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");


 // Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/initial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/initial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initial; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.

function initial(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}

/***/ }),

/***/ "./node_modules/underscore/modules/intersection.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/intersection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intersection; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");

 // Produce an array that contains every item shared between all the
// passed-in arrays.

function intersection(array) {
  var result = [];
  var argsLength = arguments.length;

  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array); i < length; i++) {
    var item = array[i];
    if (Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, item)) continue;
    var j;

    for (j = 1; j < argsLength; j++) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[j], item)) break;
    }

    if (j === argsLength) result.push(item);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/invert.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invert.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invert; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
 // Invert the keys and values of an object. The values must be serializable.

function invert(obj) {
  var result = {};

  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);

  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/invoke.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invoke.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");




 // Invoke a method (with arguments) on every item in a collection.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (obj, path, args) {
  var contextPath, func;

  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
    func = path;
  } else {
    path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }

  return Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function (context) {
    var method = func;

    if (!method) {
      if (contextPath && contextPath.length) {
        context = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, contextPath);
      }

      if (context == null) return void 0;
      method = context[path];
    }

    return method == null ? method : method.apply(context, args);
  });
}));

/***/ }),

/***/ "./node_modules/underscore/modules/isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isArguments.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");


var isArguments = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Arguments'); // Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.

(function () {
  if (!isArguments(arguments)) {
    isArguments = function isArguments(obj) {
      return Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'callee');
    };
  }
})();

/* harmony default export */ __webpack_exports__["default"] = (isArguments);

/***/ }),

/***/ "./node_modules/underscore/modules/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

 // Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.

/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsArray"] || Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Array'));

/***/ }),

/***/ "./node_modules/underscore/modules/isArrayBuffer.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/isArrayBuffer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('ArrayBuffer'));

/***/ }),

/***/ "./node_modules/underscore/modules/isBoolean.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isBoolean.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBoolean; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Is a given value a boolean?

function isBoolean(obj) {
  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === '[object Boolean]';
}

/***/ }),

/***/ "./node_modules/underscore/modules/isDataView.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isDataView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayBuffer.js */ "./node_modules/underscore/modules/isArrayBuffer.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");




var isDataView = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('DataView'); // In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.

function ie10IsDataView(obj) {
  return obj != null && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.getInt8) && Object(_isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.buffer);
}

/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__["hasStringTagBug"] ? ie10IsDataView : isDataView);

/***/ }),

/***/ "./node_modules/underscore/modules/isDate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isDate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));

/***/ }),

/***/ "./node_modules/underscore/modules/isElement.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isElement.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isElement; });
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

/***/ }),

/***/ "./node_modules/underscore/modules/isEmpty.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEmpty.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




 // Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.

function isEmpty(obj) {
  if (obj == null) return true; // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.

  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  if (typeof length == 'number' && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) || Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj))) return length === 0;
  return Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj)) === 0;
}

/***/ }),

/***/ "./node_modules/underscore/modules/isEqual.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEqual.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEqual; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _toBufferView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_toBufferView.js */ "./node_modules/underscore/modules/_toBufferView.js");










 // We use this string twice, so give it a name for minification.

var tagDataView = '[object DataView]'; // Internal recursive comparison function for `_.isEqual`.

function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a);

  if (type !== 'function' && type !== 'object' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(b) != 'object') return false;
  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `_.isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]) a = a._wrapped;
  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]) b = b._wrapped; // Compare `[[Class]]` names.

  var className = _setup_js__WEBPACK_IMPORTED_MODULE_2__["toString"].call(a);
  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_2__["toString"].call(b)) return false; // Work around a bug in IE 10 - Edge 13.

  if (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_6__["hasStringTagBug"] && className == '[object Object]' && Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_7__["default"])(a)) {
    if (!Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)) return false;
    className = tagDataView;
  }

  switch (className) {
    // These types are compared by value.
    case '[object RegExp]': // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;

    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case '[object Symbol]':
      return _setup_js__WEBPACK_IMPORTED_MODULE_2__["SymbolProto"].valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_2__["SymbolProto"].valueOf.call(b);

    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq(Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_10__["default"])(a), Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_10__["default"])(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';

  if (!areArrays && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a)) {
    var byteLength = Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a);
    if (byteLength !== Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_3__["default"])(b)) return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
    areArrays = true;
  }

  if (!areArrays) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) != 'object' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(b) != 'object') return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])(aCtor) && aCtor instanceof aCtor && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_8__["default"])(a),
        key;

    length = _keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object(_keys_js__WEBPACK_IMPORTED_MODULE_8__["default"])(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(Object(_has_js__WEBPACK_IMPORTED_MODULE_9__["default"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
} // Perform a deep comparison to check if two objects are equal.


function isEqual(a, b) {
  return eq(a, b);
}

/***/ }),

/***/ "./node_modules/underscore/modules/isError.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isError.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Error'));

/***/ }),

/***/ "./node_modules/underscore/modules/isFinite.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isFinite.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFinite; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");

 // Is a given object a finite number?

function isFinite(obj) {
  return !Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isFinite"])(obj) && !isNaN(parseFloat(obj));
}

/***/ }),

/***/ "./node_modules/underscore/modules/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isFunction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");



var isFunction = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Function'); // Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).

var nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_2__["root"].document && _setup_js__WEBPACK_IMPORTED_MODULE_2__["root"].document.childNodes;

if ( true && (typeof Int8Array === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Int8Array)) != 'object' && typeof nodelist != 'function') {
  isFunction = function isFunction(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);

/***/ }),

/***/ "./node_modules/underscore/modules/isMap.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isMap.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");



/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["mapMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));

/***/ }),

/***/ "./node_modules/underscore/modules/isMatch.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isMatch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMatch; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
 // Returns whether an object has a given set of `key:value` pairs.

function isMatch(object, attrs) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(attrs),
      length = _keys.length;

  if (object == null) return !length;
  var obj = Object(object);

  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }

  return true;
}

/***/ }),

/***/ "./node_modules/underscore/modules/isNaN.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isNaN.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNaN; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");

 // Is the given value `NaN`?

function isNaN(obj) {
  return Object(_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isNaN"])(obj);
}

/***/ }),

/***/ "./node_modules/underscore/modules/isNull.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isNull.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNull; });
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}

/***/ }),

/***/ "./node_modules/underscore/modules/isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isNumber.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));

/***/ }),

/***/ "./node_modules/underscore/modules/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

// Is a given variable an object?
function isObject(obj) {
  var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);

  return type === 'function' || type === 'object' && !!obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isRegExp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('RegExp'));

/***/ }),

/***/ "./node_modules/underscore/modules/isSet.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");



/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["setMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));

/***/ }),

/***/ "./node_modules/underscore/modules/isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));

/***/ }),

/***/ "./node_modules/underscore/modules/isSymbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isSymbol.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbol'));

/***/ }),

/***/ "./node_modules/underscore/modules/isTypedArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/isTypedArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isBufferLike.js */ "./node_modules/underscore/modules/_isBufferLike.js");



 // Is a given value a typed array?

var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"] ? Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"])(obj) && !Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) : Object(_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj));
}

/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["supportsArrayBuffer"] ? isTypedArray : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false));

/***/ }),

/***/ "./node_modules/underscore/modules/isUndefined.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isUndefined.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}

/***/ }),

/***/ "./node_modules/underscore/modules/isWeakMap.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakMap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "./node_modules/underscore/modules/_stringTagBug.js");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "./node_modules/underscore/modules/_methodFingerprint.js");



/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["weakMapMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakMap'));

/***/ }),

/***/ "./node_modules/underscore/modules/isWeakSet.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakSet.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakSet'));

/***/ }),

/***/ "./node_modules/underscore/modules/iteratee.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/iteratee.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iteratee; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");

 // External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.

function iteratee(value, context) {
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, Infinity);
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee = iteratee;

/***/ }),

/***/ "./node_modules/underscore/modules/keys.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/keys.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");



 // Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.

function keys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"])(obj);
  var keys = [];

  for (var key in obj) {
    if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)) keys.push(key);
  } // Ahem, IE < 9.


  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, keys);
  return keys;
}

/***/ }),

/***/ "./node_modules/underscore/modules/last.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/last.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return last; });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");
 // Get the last element of an array. Passing **n** will return the last N
// values in the array.

function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return Object(_rest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Math.max(0, array.length - n));
}

/***/ }),

/***/ "./node_modules/underscore/modules/lastIndexOf.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/lastIndexOf.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");

 // Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/map.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/map.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


 // Return the results of applying the iteratee to each element.

function map(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);

  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length,
      results = Array(length);

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }

  return results;
}

/***/ }),

/***/ "./node_modules/underscore/modules/mapObject.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/mapObject.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");

 // Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.

function mapObject(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);

  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
      length = _keys.length,
      results = {};

  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }

  return results;
}

/***/ }),

/***/ "./node_modules/underscore/modules/matcher.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/matcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matcher; });
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");

 // Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.

function matcher(attrs) {
  attrs = Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs);
  return function (obj) {
    return Object(_isMatch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, attrs);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/max.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/max.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");




 // Return the maximum element (or element-based computation).

function max(obj, iteratee, context) {
  var result = -Infinity,
      lastComputed = -Infinity,
      value,
      computed;

  if (iteratee == null || typeof iteratee == 'number' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[0]) != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);

    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];

      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, function (v, index, list) {
      computed = iteratee(v, index, list);

      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/memoize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/memoize.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
 // Memoize an expensive function by storing its results.

function memoize(func, hasher) {
  var memoize = function memoize(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };

  memoize.cache = {};
  return memoize;
}

/***/ }),

/***/ "./node_modules/underscore/modules/min.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/min.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");




 // Return the minimum element (or element-based computation).

function min(obj, iteratee, context) {
  var result = Infinity,
      lastComputed = Infinity,
      value,
      computed;

  if (iteratee == null || typeof iteratee == 'number' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[0]) != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);

    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];

      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, function (v, index, list) {
      computed = iteratee(v, index, list);

      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/mixin.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/mixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mixin; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");




 // Add your own custom functions to the Underscore object.

function mixin(obj) {
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_functions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj), function (name) {
    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"][name] = obj[name];

    _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function () {
      var args = [this._wrapped];
      _setup_js__WEBPACK_IMPORTED_MODULE_3__["push"].apply(args, arguments);
      return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"], args));
    };
  });
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/***/ }),

/***/ "./node_modules/underscore/modules/negate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/negate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return negate; });
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function () {
    return !predicate.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/noop.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
// Predicate-generating function. Often useful outside of Underscore.
function noop() {}

/***/ }),

/***/ "./node_modules/underscore/modules/now.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/now.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ __webpack_exports__["default"] = (Date.now || function () {
  return new Date().getTime();
});

/***/ }),

/***/ "./node_modules/underscore/modules/object.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return object; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
 // Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.

function object(list, values) {
  var result = {};

  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/omit.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/omit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");






 // Return a copy of the object without the disallowed properties.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (obj, keys) {
  var iteratee = keys[0],
      context;

  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    iteratee = Object(_negate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = Object(_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, false, false), String);

    iteratee = function iteratee(value, key) {
      return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, key);
    };
  }

  return Object(_pick_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, iteratee, context);
}));

/***/ }),

/***/ "./node_modules/underscore/modules/once.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/once.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");

 // Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.

/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_before_js__WEBPACK_IMPORTED_MODULE_1__["default"], 2));

/***/ }),

/***/ "./node_modules/underscore/modules/pairs.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pairs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
 // Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.

function pairs(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);

  var length = _keys.length;
  var pairs = Array(length);

  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }

  return pairs;
}

/***/ }),

/***/ "./node_modules/underscore/modules/partial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/partial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


 // Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.

var partial = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (func, boundArgs) {
  var placeholder = partial.placeholder;

  var bound = function bound() {
    var position = 0,
        length = boundArgs.length;
    var args = Array(length);

    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }

    while (position < arguments.length) {
      args.push(arguments[position++]);
    }

    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, bound, this, this, args);
  };

  return bound;
});
partial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (partial);

/***/ }),

/***/ "./node_modules/underscore/modules/partition.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/partition.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
 // Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.

/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));

/***/ }),

/***/ "./node_modules/underscore/modules/pick.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/pick.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keyInObj.js */ "./node_modules/underscore/modules/_keyInObj.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");





 // Return a copy of the object only containing the allowed properties.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (obj, keys) {
  var result = {},
      iteratee = keys[0];
  if (obj == null) return result;

  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    if (keys.length > 1) iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, keys[1]);
    keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
  } else {
    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, false, false);
    obj = Object(obj);
  }

  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }

  return result;
}));

/***/ }),

/***/ "./node_modules/underscore/modules/pluck.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pluck.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pluck; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");

 // Convenience version of a common use case of `_.map`: fetching a property.

function pluck(obj, key) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_property_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
}

/***/ }),

/***/ "./node_modules/underscore/modules/property.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/property.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return property; });
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");

 // Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.

function property(path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  return function (obj) {
    return Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, path);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/propertyOf.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/propertyOf.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertyOf; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ "./node_modules/underscore/modules/noop.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/underscore/modules/get.js");

 // Generates a function for a given object that returns a given property.

function propertyOf(obj) {
  if (obj == null) return _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  return function (path) {
    return Object(_get_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, path);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/random.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/random.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}

/***/ }),

/***/ "./node_modules/underscore/modules/range.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/range.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }

  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

/***/ }),

/***/ "./node_modules/underscore/modules/reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reduce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");
 // **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));

/***/ }),

/***/ "./node_modules/underscore/modules/reduceRight.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/reduceRight.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");
 // The right-associative version of reduce, also known as `foldr`.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));

/***/ }),

/***/ "./node_modules/underscore/modules/reject.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reject.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reject; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");


 // Return all the elements for which a truth test fails.

function reject(obj, predicate, context) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_negate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate)), context);
}

/***/ }),

/***/ "./node_modules/underscore/modules/rest.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/rest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rest; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.

function rest(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, n == null || guard ? 1 : n);
}

/***/ }),

/***/ "./node_modules/underscore/modules/restArguments.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/restArguments.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return restArguments; });
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function () {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;

    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }

    switch (startIndex) {
      case 0:
        return func.call(this, rest);

      case 1:
        return func.call(this, arguments[0], rest);

      case 2:
        return func.call(this, arguments[0], arguments[1], rest);
    }

    var args = Array(startIndex + 1);

    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }

    args[startIndex] = rest;
    return func.apply(this, args);
  };
}

/***/ }),

/***/ "./node_modules/underscore/modules/result.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/result.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return result; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "./node_modules/underscore/modules/_toPath.js");

 // Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.

function result(obj, path, fallback) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;

  if (!length) {
    return Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fallback) ? fallback.call(obj) : fallback;
  }

  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];

    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }

    obj = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prop) ? prop.call(obj) : prop;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/sample.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sample.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sample; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone.js */ "./node_modules/underscore/modules/clone.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");




 // Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.

function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    return obj[Object(_random_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.length - 1)];
  }

  var sample = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? Object(_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) : Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_3__["default"])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;

  for (var index = 0; index < n; index++) {
    var rand = Object(_random_js__WEBPACK_IMPORTED_MODULE_4__["default"])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }

  return sample.slice(0, n);
}

/***/ }),

/***/ "./node_modules/underscore/modules/shuffle.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/shuffle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");
 // Shuffle a collection.

function shuffle(obj) {
  return Object(_sample_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Infinity);
}

/***/ }),

/***/ "./node_modules/underscore/modules/size.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/size.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return size; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");

 // Return the number of elements in a collection.

function size(obj) {
  if (obj == null) return 0;
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj.length : Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).length;
}

/***/ }),

/***/ "./node_modules/underscore/modules/some.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/some.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


 // Determine if at least one element in the object passes a truth test.

function some(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);

  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/underscore/modules/sortBy.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sortBy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortBy; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");


 // Sort the object's values by a criterion produced by an iteratee.

function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  return Object(_pluck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function (value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function (left, right) {
    var a = left.criteria;
    var b = right.criteria;

    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }

    return left.index - right.index;
  }), 'value');
}

/***/ }),

/***/ "./node_modules/underscore/modules/sortedIndex.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/sortedIndex.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortedIndex; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");

 // Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.

function sortedIndex(array, obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0,
      high = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);

  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
  }

  return low;
}

/***/ }),

/***/ "./node_modules/underscore/modules/tap.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/tap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tap; });
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}

/***/ }),

/***/ "./node_modules/underscore/modules/template.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");


 // When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.

var noMatch = /(.)^/; // Certain characters need to be escaped so that they can be put into a
// string literal.

var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  "\u2028": 'u2028',
  "\u2029": 'u2029'
};
var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
} // JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.


function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"].templateSettings); // Combine delimiters into one regular expression via alternation.

  var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g'); // Compile the template source, escaping string literals appropriately.

  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    } // Adobe VMs need the match returned to produce the correct offset.


    return match;
  });
  source += "';\n"; // If a variable is not specified, place data values in local scope.

  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
  source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
  var render;

  try {
    render = new Function(settings.variable || 'obj', '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function template(data) {
    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }; // Provide the compiled source as a convenience for precompilation.


  var argument = settings.variable || 'obj';
  template.source = 'function(' + argument + '){\n' + source + '}';
  return template;
}

/***/ }),

/***/ "./node_modules/underscore/modules/templateSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/templateSettings.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
 // By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.

/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});

/***/ }),

/***/ "./node_modules/underscore/modules/throttle.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/throttle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");
 // Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var _now = Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

/***/ }),

/***/ "./node_modules/underscore/modules/times.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/times.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return times; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
 // Run a function **n** times.

function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);

  for (var i = 0; i < n; i++) {
    accum[i] = iteratee(i);
  }

  return accum;
}

/***/ }),

/***/ "./node_modules/underscore/modules/toArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/toArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");






 // Safely create a real, live array from anything iterable.

var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(obj);

  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }

  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) return Object(_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return Object(_values_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj);
}

/***/ }),

/***/ "./node_modules/underscore/modules/toPath.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/toPath.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");

 // Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.

function toPath(path) {
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path) ? path : [path];
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath = toPath;

/***/ }),

/***/ "./node_modules/underscore/modules/underscore-array-methods.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/underscore-array-methods.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");



 // Add all mutator `Array` functions to the wrapper.

Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];

  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function () {
    var obj = this._wrapped;

    if (obj != null) {
      method.apply(obj, arguments);

      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }

    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
}); // Add all accessor `Array` functions to the wrapper.

Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['concat', 'join', 'slice'], function (name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];

  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function () {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});
/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/underscore/modules/underscore.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/underscore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
 // If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.

function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}
_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; // Extracts the result from a wrapped and chained object.

_.prototype.value = function () {
  return this._wrapped;
}; // Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.


_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function () {
  return String(this._wrapped);
};

/***/ }),

/***/ "./node_modules/underscore/modules/unescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/unescape.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unescapeMap.js */ "./node_modules/underscore/modules/_unescapeMap.js");

 // Function for unescaping strings from HTML interpolation.

/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/underscore/modules/union.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/union.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");


 // Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (arrays) {
  return Object(_uniq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrays, true, true));
}));

/***/ }),

/***/ "./node_modules/underscore/modules/uniq.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/uniq.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniq; });
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");



 // Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.

function uniq(array, isSorted, iteratee, context) {
  if (!Object(_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }

  if (iteratee != null) iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, context);
  var result = [];
  var seen = [];

  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;

    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value)) {
      result.push(value);
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/uniqueId.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/uniqueId.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueId; });
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}

/***/ }),

/***/ "./node_modules/underscore/modules/unzip.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/unzip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unzip; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");


 // Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.

function unzip(array) {
  var length = array && Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = Object(_pluck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, index);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/underscore/modules/values.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/values.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return values; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
 // Retrieve the values of an object's properties.

function values(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);

  var length = _keys.length;
  var values = Array(length);

  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }

  return values;
}

/***/ }),

/***/ "./node_modules/underscore/modules/where.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/where.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return where; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");

 // Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.

function where(obj, attrs) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}

/***/ }),

/***/ "./node_modules/underscore/modules/without.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/without.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");

 // Return a version of the array that does not contain the specified value(s).

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (array, otherArrays) {
  return Object(_difference_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, otherArrays);
}));

/***/ }),

/***/ "./node_modules/underscore/modules/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/wrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrap; });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
 // Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.

function wrap(func, wrapper) {
  return Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, func);
}

/***/ }),

/***/ "./node_modules/underscore/modules/zip.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/zip.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");

 // Zip together multiple lists into a single array -- elements that share
// an index go together.

/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");

var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");

var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = rng();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");

var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),

/***/ "./node_modules/writable-consumable-stream/consumer.js":
/*!*************************************************************!*\
  !*** ./node_modules/writable-consumable-stream/consumer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var Consumer = /*#__PURE__*/function () {
  "use strict";

  function Consumer(stream, id, startNode, timeout) {
    _classCallCheck(this, Consumer);

    this.id = id;
    this._backpressure = 0;
    this.stream = stream;
    this.currentNode = startNode;
    this.timeout = timeout;
    this.isAlive = true;
    this.stream.setConsumer(this.id, this);
  }

  _createClass(Consumer, [{
    key: "getStats",
    value: function getStats() {
      var stats = {
        id: this.id,
        backpressure: this._backpressure
      };

      if (this.timeout != null) {
        stats.timeout = this.timeout;
      }

      return stats;
    }
  }, {
    key: "_resetBackpressure",
    value: function _resetBackpressure() {
      this._backpressure = 0;
    }
  }, {
    key: "applyBackpressure",
    value: function applyBackpressure(packet) {
      this._backpressure++;
    }
  }, {
    key: "releaseBackpressure",
    value: function releaseBackpressure(packet) {
      this._backpressure--;
    }
  }, {
    key: "getBackpressure",
    value: function getBackpressure() {
      return this._backpressure;
    }
  }, {
    key: "write",
    value: function write(packet) {
      if (this._timeoutId !== undefined) {
        clearTimeout(this._timeoutId);
        delete this._timeoutId;
      }

      this.applyBackpressure(packet);

      if (this._resolve) {
        this._resolve();

        delete this._resolve;
      }
    }
  }, {
    key: "kill",
    value: function kill(value) {
      if (this._timeoutId !== undefined) {
        clearTimeout(this._timeoutId);
        delete this._timeoutId;
      }

      this._killPacket = {
        value: value,
        done: true
      };

      this._destroy();

      if (this._resolve) {
        this._resolve();

        delete this._resolve;
      }
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.isAlive = false;

      this._resetBackpressure();

      this.stream.removeConsumer(this.id);
    }
  }, {
    key: "_waitForNextItem",
    value: function () {
      var _waitForNextItem2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(timeout) {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this._resolve = resolve;
                  var timeoutId;

                  if (timeout !== undefined) {
                    // Create the error object in the outer scope in order
                    // to get the full stack trace.
                    var error = new Error('Stream consumer iteration timed out');

                    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                      var delay;
                      return _regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              delay = wait(timeout);
                              timeoutId = delay.timeoutId;
                              _context.next = 4;
                              return delay.promise;

                            case 4:
                              error.name = 'TimeoutError';
                              delete _this._resolve;
                              reject(error);

                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }))();
                  }

                  _this._timeoutId = timeoutId;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _waitForNextItem(_x) {
        return _waitForNextItem2.apply(this, arguments);
      }

      return _waitForNextItem;
    }()
  }, {
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var killPacket;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.stream.setConsumer(this.id, this);

              case 1:
                if (false) {}

                if (this.currentNode.next) {
                  _context3.next = 12;
                  break;
                }

                _context3.prev = 3;
                _context3.next = 6;
                return this._waitForNextItem(this.timeout);

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](3);

                this._destroy();

                throw _context3.t0;

              case 12:
                if (!this._killPacket) {
                  _context3.next = 17;
                  break;
                }

                this._destroy();

                killPacket = this._killPacket;
                delete this._killPacket;
                return _context3.abrupt("return", killPacket);

              case 17:
                this.currentNode = this.currentNode.next;
                this.releaseBackpressure(this.currentNode.data);

                if (!(this.currentNode.consumerId && this.currentNode.consumerId !== this.id)) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("continue", 1);

              case 21:
                if (this.currentNode.data.done) {
                  this._destroy();
                }

                return _context3.abrupt("return", this.currentNode.data);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 8]]);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "return",
    value: function _return() {
      delete this.currentNode;

      this._destroy();

      return {};
    }
  }, {
    key: Symbol.asyncIterator,
    value: function value() {
      return this;
    }
  }]);

  return Consumer;
}();

function wait(timeout) {
  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, timeout);
  });
  return {
    timeoutId: timeoutId,
    promise: promise
  };
}

module.exports = Consumer;

/***/ }),

/***/ "./node_modules/writable-consumable-stream/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/writable-consumable-stream/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConsumableStream = __webpack_require__(/*! consumable-stream */ "./node_modules/consumable-stream/index.js");

var Consumer = __webpack_require__(/*! ./consumer */ "./node_modules/writable-consumable-stream/consumer.js");

var WritableConsumableStream = /*#__PURE__*/function (_ConsumableStream) {
  "use strict";

  _inherits(WritableConsumableStream, _ConsumableStream);

  var _super = _createSuper(WritableConsumableStream);

  function WritableConsumableStream() {
    var _this;

    _classCallCheck(this, WritableConsumableStream);

    _this = _super.call(this);
    _this.nextConsumerId = 1;
    _this._consumers = {}; // Tail node of a singly linked list.

    _this._tailNode = {
      next: null,
      data: {
        value: undefined,
        done: false
      }
    };
    return _this;
  }

  _createClass(WritableConsumableStream, [{
    key: "_write",
    value: function _write(value, done, consumerId) {
      var dataNode = {
        data: {
          value: value,
          done: done
        },
        next: null
      };

      if (consumerId) {
        dataNode.consumerId = consumerId;
      }

      this._tailNode.next = dataNode;
      this._tailNode = dataNode;
      var consumerList = Object.values(this._consumers);
      var len = consumerList.length;

      for (var i = 0; i < len; i++) {
        var consumer = consumerList[i];
        consumer.write(dataNode.data);
      }
    }
  }, {
    key: "write",
    value: function write(value) {
      this._write(value, false);
    }
  }, {
    key: "close",
    value: function close(value) {
      this._write(value, true);
    }
  }, {
    key: "writeToConsumer",
    value: function writeToConsumer(consumerId, value) {
      this._write(value, false, consumerId);
    }
  }, {
    key: "closeConsumer",
    value: function closeConsumer(consumerId, value) {
      this._write(value, true, consumerId);
    }
  }, {
    key: "kill",
    value: function kill(value) {
      var consumerIdList = Object.keys(this._consumers);
      var len = consumerIdList.length;

      for (var i = 0; i < len; i++) {
        this.killConsumer(consumerIdList[i], value);
      }
    }
  }, {
    key: "killConsumer",
    value: function killConsumer(consumerId, value) {
      var consumer = this._consumers[consumerId];

      if (!consumer) {
        return;
      }

      consumer.kill(value);
    }
  }, {
    key: "getBackpressure",
    value: function getBackpressure() {
      var consumerList = Object.values(this._consumers);
      var len = consumerList.length;
      var maxBackpressure = 0;

      for (var i = 0; i < len; i++) {
        var consumer = consumerList[i];
        var backpressure = consumer.getBackpressure();

        if (backpressure > maxBackpressure) {
          maxBackpressure = backpressure;
        }
      }

      return maxBackpressure;
    }
  }, {
    key: "getConsumerBackpressure",
    value: function getConsumerBackpressure(consumerId) {
      var consumer = this._consumers[consumerId];

      if (consumer) {
        return consumer.getBackpressure();
      }

      return 0;
    }
  }, {
    key: "hasConsumer",
    value: function hasConsumer(consumerId) {
      return !!this._consumers[consumerId];
    }
  }, {
    key: "setConsumer",
    value: function setConsumer(consumerId, consumer) {
      this._consumers[consumerId] = consumer;

      if (!consumer.currentNode) {
        consumer.currentNode = this._tailNode;
      }
    }
  }, {
    key: "removeConsumer",
    value: function removeConsumer(consumerId) {
      delete this._consumers[consumerId];
    }
  }, {
    key: "getConsumerStats",
    value: function getConsumerStats(consumerId) {
      var consumer = this._consumers[consumerId];

      if (consumer) {
        return consumer.getStats();
      }

      return undefined;
    }
  }, {
    key: "getConsumerStatsList",
    value: function getConsumerStatsList() {
      var consumerStats = [];
      var consumerList = Object.values(this._consumers);
      var len = consumerList.length;

      for (var i = 0; i < len; i++) {
        var consumer = consumerList[i];
        consumerStats.push(consumer.getStats());
      }

      return consumerStats;
    }
  }, {
    key: "createConsumer",
    value: function createConsumer(timeout) {
      return new Consumer(this, this.nextConsumerId++, this._tailNode, timeout);
    }
  }]);

  return WritableConsumableStream;
}(ConsumableStream);

module.exports = WritableConsumableStream;

/***/ })

/******/ });