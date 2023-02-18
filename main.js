/**
 * @fileOverview What is this file for?
 * @author Jack Notman
 * @version 1.0.0
 * @module @h2mlagency/bettertimeout
 */

"use strict";

/** 
 * The {@link Timeout} class.
 * @class
 */
require("core-js/modules/es.error.cause.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = exports.Timeout = void 0;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _timeout = /*#__PURE__*/new WeakMap();
class Timeout {
  /**
   * represents the timeoutID of the internal setTimeout.
   * @type {Number}
   * @private
   */

  /**
   * Clears the Timeout, and calls the {@link callback} function if one is provided.
   * @param {Function} [callback] - The callback function to optionally be run once the Timeout finishes.
   */

  clear() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (_classPrivateFieldGet(this, _timeout)) {
      clearTimeout(_classPrivateFieldGet(this, _timeout));
      callback && callback();
    }
  }

  /**
   * Creates a new instance of the {@link Timeout} class.
   * @param {function} callback - The callback function to be run once the {@link Timeout} finishes.
   * @param {Number}   duration - The duration, in milliseconds, to wait before the {@link callback} function is called.
   */

  constructor(callback, duration) {
    _classPrivateFieldInitSpec(this, _timeout, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _timeout, setTimeout(callback, duration));
  }
}

/** 
 * The {@link Timer} class.
 * @class
 */
exports.Timeout = Timeout;
var _duration = /*#__PURE__*/new WeakMap();
var _startedCallback = /*#__PURE__*/new WeakMap();
var _successCallback = /*#__PURE__*/new WeakMap();
var _failureCallback = /*#__PURE__*/new WeakMap();
var _timeout2 = /*#__PURE__*/new WeakMap();
var _promiseRes = /*#__PURE__*/new WeakMap();
var _promiseRej = /*#__PURE__*/new WeakMap();
class Timer {
  /**
   * Stores the provided duration.
   * @type {Number}
   * @private
   */

  /**
   * Stores the provided startedCallback function.
   * @type {Function}
   * @private
   */

  /**
   * Stores the provided successCallback function.
   * @type {Function}
   * @private
   */

  /**
   * Stores the provided failureCallback function.
   * @type {Function}
   * @private
   */

  /**
   * Holds a reference to the current {@link Timeout} Instance.
   * @type {Function}
   * @private
   */

  /**
   * Holds a reference to the {@link Timer.done} resolve function.
   * @type {Function}
   * @private
   */

  /**
   * Holds a reference to the {@link Timer.done} reject function.
   * @type {Function}
   * @private
   */

  /**
   * Exposes the {@link Timer} Promise once the {@link Timer.start} method has been called.
   * @type {(Undefined | Promise)}
   * @public
   */

  /**
   * Creates a Promise which resolves after the instance {@link duration} or the provided {@link config.duration}, and sets the instance {@link Timer.done} property equal to the Promise.
   * @param {Object} config - Config options used to override the defined behaviour of the {@link Timer} instance.
   * @param {Number} config.duration - Overrides the defined duration of the {@link Timer} instance.
   */

  start() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      duration = _classPrivateFieldGet(this, _duration)
    } = config;
    //
    this.done = new Promise((res, rej) => {
      //
      _classPrivateFieldSet(this, _promiseRes, res);
      _classPrivateFieldSet(this, _promiseRej, rej);
      //
      _classPrivateFieldSet(this, _timeout2, new Timeout(() => {
        _classPrivateFieldGet(this, _promiseRes).call(this, _classPrivateFieldGet(this, _successCallback) && _classPrivateFieldGet(this, _successCallback).call(this));
      }, duration));
    });
    //
    _classPrivateFieldGet(this, _startedCallback) && _classPrivateFieldGet(this, _startedCallback).call(this);
    //
    return this;
  }

  /**
   * Cancels the {@link Timer} instance, and if defined calls the {@link failureCallback}
   */

  cancel() {
    _classPrivateFieldGet(this, _timeout2) && _classPrivateFieldGet(this, _timeout2).clear(() => {
      _classPrivateFieldGet(this, _promiseRej).call(this, _classPrivateFieldGet(this, _failureCallback) && _classPrivateFieldGet(this, _failureCallback).call(this));
    });
  }

  /**
   * Sets the {@link duration} property.
   * @param {Number} duration - Sets the duration, in milliseconds, to wait before the {@link Timer} finishes.
   */

  set duration(duration) {
    _classPrivateFieldSet(this, _duration, duration);
  }

  /**
   * Sets the {@link startedCallback} property.
   * @param {Function} startedCallback - Sets the callback function to be run when the {@link Timer} is started.
   */

  set startedCallback(startedCallback) {
    _classPrivateFieldSet(this, _startedCallback, startedCallback);
  }

  /**
   * Sets the {@link Timer.successCallback} property.
   * @param {Function} successCallback - Sets the callback function to be run once the {@link Timer} finishes.
   */

  set successCallback(successCallback) {
    _classPrivateFieldSet(this, _successCallback, successCallback);
  }

  /**
   * Sets the {@link failureCallback} property.
   * @param {Function} startedCallback - Sets the callback function to be run if the {@link Timer} is cancelled.
   */

  set failureCallback(failureCallback) {
    _classPrivateFieldSet(this, _failureCallback, failureCallback);
  }

  /**
   * Creates a new instance of the {@link Timer} class.
   * @param {Object}   config                   - The default config options for the {@link Timer} instance.
   * @param {Number}   config.duration          - The duration, in milliseconds, to wait before the {@link Timer} finishes.
   * @param {Function} [config.startedCallback] - The callback function to be run when the {@link Timer} is started.
   * @param {Function} [config.successCallback] - The callback function to be run once the {@link Timer} finishes.
   * @param {Function} [config.failureCallback] - The callback function to be run if the {@link Timer} is cancelled.
   */

  constructor(config) {
    _classPrivateFieldInitSpec(this, _duration, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _startedCallback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _successCallback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _failureCallback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _timeout2, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _promiseRes, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _promiseRej, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "done", void 0);
    Object.assign(this, config);
  }
}

/** 
 * @exports @h2mlagency/bettertimeout
 */
exports.Timer = Timer;
