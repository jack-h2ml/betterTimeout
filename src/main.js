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

class Timeout {

	/**
	 * represents the timeoutID of the internal setTimeout.
	 * @type {Number}
	 * @private
	 */

	#timeout;

	/**
	 * Clears the Timeout, and calls the {@link callback} function if one is provided.
	 * @param {Function} [callback] - The callback function to optionally be run once the Timeout finishes.
	 */

	clear(callback = false) {
		if (this.#timeout) {
			clearTimeout(this.#timeout);
			callback && callback();
		}
	}

	/**
	 * Creates a new instance of the {@link Timeout} class.
	 * @param {function} callback - The callback function to be run once the {@link Timeout} finishes.
	 * @param {Number}   duration - The duration, in milliseconds, to wait before the {@link callback} function is called.
	 */

	constructor(callback, duration) {
		this.#timeout = setTimeout(callback, duration);
	}
}

/** 
 * The {@link Timer} class.
 * @class
 */

class Timer {

	/**
	 * Stores the provided duration.
	 * @type {Number}
	 * @private
	 */

	#duration;

	/**
	 * Stores the provided startedCallback function.
	 * @type {Function}
	 * @private
	 */

	#startedCallback;

	/**
	 * Stores the provided successCallback function.
	 * @type {Function}
	 * @private
	 */

	#successCallback;

	/**
	 * Stores the provided failureCallback function.
	 * @type {Function}
	 * @private
	 */

	#failureCallback;

	/**
	 * Holds a reference to the current {@link Timeout} Instance.
	 * @type {Function}
	 * @private
	 */

	#timeout = false;

	/**
	 * Holds a reference to the {@link Timer.done} resolve function.
	 * @type {Function}
	 * @private
	 */

	#promiseRes;

	/**
	 * Holds a reference to the {@link Timer.done} reject function.
	 * @type {Function}
	 * @private
	 */

	#promiseRej;

	/**
	 * Exposes the {@link Timer} Promise once the {@link Timer.start} method has been called.
	 * @type {(Undefined | Promise)}
	 * @public
	 */

	done;

	/**
	 * Creates a Promise which resolves after the instance {@link duration} or the provided {@link config.duration}, and sets the instance {@link Timer.done} property equal to the Promise.
	 * @param {Object} config - Config options used to override the defined behaviour of the {@link Timer} instance.
	 * @param {Number} config.duration - Overrides the defined duration of the {@link Timer} instance.
	 */

	start(config = {}) {
		const {
			duration = this.#duration
		} = config;
		//
		this.done = new Promise((res, rej) => {
			//
			this.#promiseRes = res;
			this.#promiseRej = rej;
			//
			this.#timeout = new Timeout(() => {
				this.#promiseRes(this.#successCallback && this.#successCallback());
			}, duration);
		});
		//
		this.#startedCallback && this.#startedCallback();
		//
		return this;
	}

	/**
	 * Cancels the {@link Timer} instance, and if defined calls the {@link failureCallback}
	 */

	cancel() {
		this.#timeout && this.#timeout.clear(() => {
			this.#promiseRej(this.#failureCallback && this.#failureCallback());
		});
	}

	/**
	 * Sets the {@link duration} property.
	 * @param {Number} duration - Sets the duration, in milliseconds, to wait before the {@link Timer} finishes.
	 */

	set duration(duration) {
		this.#duration = duration;
	}

	/**
	 * Sets the {@link startedCallback} property.
	 * @param {Function} startedCallback - Sets the callback function to be run when the {@link Timer} is started.
	 */

	set startedCallback(startedCallback) {
		this.#startedCallback = startedCallback;
	}

	/**
	 * Sets the {@link Timer.successCallback} property.
	 * @param {Function} successCallback - Sets the callback function to be run once the {@link Timer} finishes.
	 */

	set successCallback(successCallback) {
		this.#successCallback = successCallback;
	}

	/**
	 * Sets the {@link failureCallback} property.
	 * @param {Function} startedCallback - Sets the callback function to be run if the {@link Timer} is cancelled.
	 */

	set failureCallback(failureCallback) {
		this.#failureCallback = failureCallback;
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
		Object.assign(this, config);
	}
}

/** 
 * @exports @h2mlagency/bettertimeout
 */

export {
	Timeout,
	Timer
}
