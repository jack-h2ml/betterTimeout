The @h2ml/bettertimeout library provides 2 simple interfaces for working with the native <code>window.setTimeout()</code> method in a more modern manner. 

## Quick Start Guide

### The <code>[Timeout](#module_@h2ml/bettertimeout..Timeout)</code> Class

The <code>Timeout</code> class is the more simple of the two interfaces. After being invoked with <code>new</code> and provided with a <code>callback</code> and <code>duration</code>, this will create a timeout function, which will call the provided <code>callback</code> after the specified <code>duration</code>. Just like the <code>window.setTimeout()</code> method.

The <code>Timeout</code> class contains a single method, <code>Timeout.clear()</code> which works analogously to <code>window.clearTimeout()</code> and will clear the timeout when called.  

<code>
	import { Timeout } from '@h2ml/bettertimeout'
   
	// Create a Timeout
	const timeout = new Timeout(() => {
		console.log('Called after 3 seconds.');
	}, 3000);

	// Clear a Timeout
	timeout.clear(() => {
		console.log('Timeout cleared!');
	})
</code>

### The <code>[Timer](#module_@h2ml/bettertimeout..Timer)</code> Class

The <code>Timer</code> class is the more robust of the two interfaces. After being invoked with <code>new</code> and provided with a <code>config</code> object the <code>Timer</code> instance can be used (and re-used) as a <code>Promise</code> based alternative to the Timeout class. 

The <code>config</code> object takes four properties, the required <code>duration</code> property, and the optional <code>startedCallback</code>, <code>successCallback</code>, & <code>failureCallback</code> properties. As with the <code>Timeout</code> class the <code>duration</code> property specifies how long the <code>Timer</code> should wait before resolving, with the relevant callback properties being called throughout the lifecycle of the <code>Timer</code>.

The <code>Timeout</code> class contains a single public property, and 2 methods. 

The <code>Timer.done</code> property, once <code>Timer.start()</code> has been called, stores a <code>Promise</code> which will either resolve with the value of calling the <code>successCallback</code> (if one was provided), or upon calling <code>Timer.cancel()</code>, will reject with the value of calling <code>failureCallback</code> (if one was provided).

The <code>Timer.start()</code> method creates a new <code>Promise</code>, accessible through the <code>Timer.done</code> property, this method also calls the <code>startedCallback</code> (if one was provided). The Timer.Start() property can be provided with a <code>config<code> Object as an argument, which can contain the property <code>duration</code> which will override the <code>duration</code> defined by the <code>Timer</code> Instance for this call only. 

The <code>Timer.cancel()</code> method cancels the timer, and rejects the <code>Timer.done</code><code>Promise</code>.

<code>
	(async () => {try {

		// Timer creation.

		const timer = new Timer({
			duration: 3000, 
			startedCallback: () => console.log('%cTimer started', 'color: #bada55'), 
			successCallback: () => console.log('%cTimer finished', 'color: #00ff00'), 
			failureCallback: () => console.log('%cTimer cancelled', 'color: #ff0f0f')
		});

		// Basic Usage.

		timer.start();
		await timer.done;

		// Chained Usage.

		timer.start().done.then(res => /* Do something here... */).catch(err => console.log(err));

		// Overriding the duration in the Timer.start() method, for this call only the Timer will resolve after 1 second.

		await timer.start({
			duration: 1000
		}).done;

		// Updating the Timer instance duration, any subesquent calls to this Timer instance will now resolve after 5 seconds. 

		timer.duration = 5000;
		await timer.start().done;

		// Cancelling the Timer after 2 seconds.

		timer.start();
		setTimeout(() => {
			timer.cancel();
		}, 2000)
		await timer.done;
		
	} catch(e) {

		// Catch-all for cancelling.

		console.log('A timer was cancelled.')

	}})();
</code>

## Modules

<dl>
<dt><a href="#module_@h2ml/bettertimeout">@h2ml/bettertimeout</a></dt>
<dd><p>What is this file for?</p>
</dd>
<dt><a href="#module_@h2ml/bettertimeout">@h2ml/bettertimeout</a></dt>
<dd></dd>
</dl>

<a name="module_@h2ml/bettertimeout"></a>

## @h2ml/bettertimeout
What is this file for?

**Version**: 1.0.0  
**Author**: Jack Notman  

* [@h2ml/bettertimeout](#module_@h2ml/bettertimeout)
    * [~Timeout](#module_@h2ml/bettertimeout..Timeout)
        * [new Timeout(callback, duration)](#new_module_@h2ml/bettertimeout..Timeout_new)
        * [.clear([callback])](#module_@h2ml/bettertimeout..Timeout+clear)
    * [~Timer](#module_@h2ml/bettertimeout..Timer)
        * [new Timer(config)](#new_module_@h2ml/bettertimeout..Timer_new)
        * [.done](#module_@h2ml/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
        * [.duration](#module_@h2ml/bettertimeout..Timer+duration)
        * [.startedCallback](#module_@h2ml/bettertimeout..Timer+startedCallback)
        * [.successCallback](#module_@h2ml/bettertimeout..Timer+successCallback)
        * [.failureCallback](#module_@h2ml/bettertimeout..Timer+failureCallback)
        * [.start(config)](#module_@h2ml/bettertimeout..Timer+start)
        * [.cancel()](#module_@h2ml/bettertimeout..Timer+cancel)

<a name="module_@h2ml/bettertimeout..Timeout"></a>

### @h2ml/bettertimeout~Timeout
The [Timeout](Timeout) class.

**Kind**: inner class of [<code>@h2ml/bettertimeout</code>](#module_@h2ml/bettertimeout)  

* [~Timeout](#module_@h2ml/bettertimeout..Timeout)
    * [new Timeout(callback, duration)](#new_module_@h2ml/bettertimeout..Timeout_new)
    * [.clear([callback])](#module_@h2ml/bettertimeout..Timeout+clear)

<a name="new_module_@h2ml/bettertimeout..Timeout_new"></a>

#### new Timeout(callback, duration)
Creates a new instance of the [Timeout](Timeout) class.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be run once the [Timeout](Timeout) finishes. |
| duration | <code>Number</code> | The duration, in milliseconds, to wait before the [callback](callback) function is called. |

<a name="module_@h2ml/bettertimeout..Timeout+clear"></a>

#### timeout.clear([callback])
Clears the Timeout, and calls the [callback](callback) function if one is provided.

**Kind**: instance method of [<code>Timeout</code>](#module_@h2ml/bettertimeout..Timeout)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [callback] | <code>function</code> | <code>false</code> | The callback function to optionally be run once the Timeout finishes. |

<a name="module_@h2ml/bettertimeout..Timer"></a>

### @h2ml/bettertimeout~Timer
The [Timer](Timer) class.

**Kind**: inner class of [<code>@h2ml/bettertimeout</code>](#module_@h2ml/bettertimeout)  

* [~Timer](#module_@h2ml/bettertimeout..Timer)
    * [new Timer(config)](#new_module_@h2ml/bettertimeout..Timer_new)
    * [.done](#module_@h2ml/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
    * [.duration](#module_@h2ml/bettertimeout..Timer+duration)
    * [.startedCallback](#module_@h2ml/bettertimeout..Timer+startedCallback)
    * [.successCallback](#module_@h2ml/bettertimeout..Timer+successCallback)
    * [.failureCallback](#module_@h2ml/bettertimeout..Timer+failureCallback)
    * [.start(config)](#module_@h2ml/bettertimeout..Timer+start)
    * [.cancel()](#module_@h2ml/bettertimeout..Timer+cancel)

<a name="new_module_@h2ml/bettertimeout..Timer_new"></a>

#### new Timer(config)
Creates a new instance of the [Timer](Timer) class.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The default config options for the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | The duration, in milliseconds, to wait before the [Timer](Timer) finishes. |
| [config.startedCallback] | <code>function</code> | The callback function to be run when the [Timer](Timer) is started. |
| [config.successCallback] | <code>function</code> | The callback function to be run once the [Timer](Timer) finishes. |
| [config.failureCallback] | <code>function</code> | The callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2ml/bettertimeout..Timer+done"></a>

#### timer.done : <code>Undefined</code> \| <code>Promise</code>
Exposes the [Timer](Timer) Promise once the [Timer.start](Timer.start) method has been called.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  
**Access**: public  
<a name="module_@h2ml/bettertimeout..Timer+duration"></a>

#### timer.duration
Sets the [duration](duration) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>Number</code> | Sets the duration, in milliseconds, to wait before the [Timer](Timer) finishes. |

<a name="module_@h2ml/bettertimeout..Timer+startedCallback"></a>

#### timer.startedCallback
Sets the [startedCallback](startedCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run when the [Timer](Timer) is started. |

<a name="module_@h2ml/bettertimeout..Timer+successCallback"></a>

#### timer.successCallback
Sets the [Timer.successCallback](Timer.successCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>function</code> | Sets the callback function to be run once the [Timer](Timer) finishes. |

<a name="module_@h2ml/bettertimeout..Timer+failureCallback"></a>

#### timer.failureCallback
Sets the [failureCallback](failureCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2ml/bettertimeout..Timer+start"></a>

#### timer.start(config)
Creates a Promise which resolves after the instance [duration](duration) or the provided [config.duration](config.duration), and sets the instance [Timer.done](Timer.done) property equal to the Promise.

**Kind**: instance method of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Config options used to override the defined behaviour of the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | Overrides the defined duration of the [Timer](Timer) instance. |

<a name="module_@h2ml/bettertimeout..Timer+cancel"></a>

#### timer.cancel()
Cancels the [Timer](Timer) instance, and if defined calls the [failureCallback](failureCallback)

**Kind**: instance method of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  
<a name="module_@h2ml/bettertimeout"></a>

## @h2ml/bettertimeout

* [@h2ml/bettertimeout](#module_@h2ml/bettertimeout)
    * [~Timeout](#module_@h2ml/bettertimeout..Timeout)
        * [new Timeout(callback, duration)](#new_module_@h2ml/bettertimeout..Timeout_new)
        * [.clear([callback])](#module_@h2ml/bettertimeout..Timeout+clear)
    * [~Timer](#module_@h2ml/bettertimeout..Timer)
        * [new Timer(config)](#new_module_@h2ml/bettertimeout..Timer_new)
        * [.done](#module_@h2ml/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
        * [.duration](#module_@h2ml/bettertimeout..Timer+duration)
        * [.startedCallback](#module_@h2ml/bettertimeout..Timer+startedCallback)
        * [.successCallback](#module_@h2ml/bettertimeout..Timer+successCallback)
        * [.failureCallback](#module_@h2ml/bettertimeout..Timer+failureCallback)
        * [.start(config)](#module_@h2ml/bettertimeout..Timer+start)
        * [.cancel()](#module_@h2ml/bettertimeout..Timer+cancel)

<a name="module_@h2ml/bettertimeout..Timeout"></a>

### @h2ml/bettertimeout~Timeout
The [Timeout](Timeout) class.

**Kind**: inner class of [<code>@h2ml/bettertimeout</code>](#module_@h2ml/bettertimeout)  

* [~Timeout](#module_@h2ml/bettertimeout..Timeout)
    * [new Timeout(callback, duration)](#new_module_@h2ml/bettertimeout..Timeout_new)
    * [.clear([callback])](#module_@h2ml/bettertimeout..Timeout+clear)

<a name="new_module_@h2ml/bettertimeout..Timeout_new"></a>

#### new Timeout(callback, duration)
Creates a new instance of the [Timeout](Timeout) class.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be run once the [Timeout](Timeout) finishes. |
| duration | <code>Number</code> | The duration, in milliseconds, to wait before the [callback](callback) function is called. |

<a name="module_@h2ml/bettertimeout..Timeout+clear"></a>

#### timeout.clear([callback])
Clears the Timeout, and calls the [callback](callback) function if one is provided.

**Kind**: instance method of [<code>Timeout</code>](#module_@h2ml/bettertimeout..Timeout)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [callback] | <code>function</code> | <code>false</code> | The callback function to optionally be run once the Timeout finishes. |

<a name="module_@h2ml/bettertimeout..Timer"></a>

### @h2ml/bettertimeout~Timer
The [Timer](Timer) class.

**Kind**: inner class of [<code>@h2ml/bettertimeout</code>](#module_@h2ml/bettertimeout)  

* [~Timer](#module_@h2ml/bettertimeout..Timer)
    * [new Timer(config)](#new_module_@h2ml/bettertimeout..Timer_new)
    * [.done](#module_@h2ml/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
    * [.duration](#module_@h2ml/bettertimeout..Timer+duration)
    * [.startedCallback](#module_@h2ml/bettertimeout..Timer+startedCallback)
    * [.successCallback](#module_@h2ml/bettertimeout..Timer+successCallback)
    * [.failureCallback](#module_@h2ml/bettertimeout..Timer+failureCallback)
    * [.start(config)](#module_@h2ml/bettertimeout..Timer+start)
    * [.cancel()](#module_@h2ml/bettertimeout..Timer+cancel)

<a name="new_module_@h2ml/bettertimeout..Timer_new"></a>

#### new Timer(config)
Creates a new instance of the [Timer](Timer) class.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The default config options for the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | The duration, in milliseconds, to wait before the [Timer](Timer) finishes. |
| [config.startedCallback] | <code>function</code> | The callback function to be run when the [Timer](Timer) is started. |
| [config.successCallback] | <code>function</code> | The callback function to be run once the [Timer](Timer) finishes. |
| [config.failureCallback] | <code>function</code> | The callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2ml/bettertimeout..Timer+done"></a>

#### timer.done : <code>Undefined</code> \| <code>Promise</code>
Exposes the [Timer](Timer) Promise once the [Timer.start](Timer.start) method has been called.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  
**Access**: public  
<a name="module_@h2ml/bettertimeout..Timer+duration"></a>

#### timer.duration
Sets the [duration](duration) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>Number</code> | Sets the duration, in milliseconds, to wait before the [Timer](Timer) finishes. |

<a name="module_@h2ml/bettertimeout..Timer+startedCallback"></a>

#### timer.startedCallback
Sets the [startedCallback](startedCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run when the [Timer](Timer) is started. |

<a name="module_@h2ml/bettertimeout..Timer+successCallback"></a>

#### timer.successCallback
Sets the [Timer.successCallback](Timer.successCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>function</code> | Sets the callback function to be run once the [Timer](Timer) finishes. |

<a name="module_@h2ml/bettertimeout..Timer+failureCallback"></a>

#### timer.failureCallback
Sets the [failureCallback](failureCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2ml/bettertimeout..Timer+start"></a>

#### timer.start(config)
Creates a Promise which resolves after the instance [duration](duration) or the provided [config.duration](config.duration), and sets the instance [Timer.done](Timer.done) property equal to the Promise.

**Kind**: instance method of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Config options used to override the defined behaviour of the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | Overrides the defined duration of the [Timer](Timer) instance. |

<a name="module_@h2ml/bettertimeout..Timer+cancel"></a>

#### timer.cancel()
Cancels the [Timer](Timer) instance, and if defined calls the [failureCallback](failureCallback)

**Kind**: instance method of [<code>Timer</code>](#module_@h2ml/bettertimeout..Timer)  