## Modules

<dl>
<dt><a href="#module_@h2mlagency/bettertimeout">@h2mlagency/bettertimeout</a></dt>
<dd><p>What is this file for?</p>
</dd>
<dt><a href="#module_@h2mlagency/bettertimeout">@h2mlagency/bettertimeout</a></dt>
<dd></dd>
</dl>

<a name="module_@h2mlagency/bettertimeout"></a>

## @h2mlagency/bettertimeout
What is this file for?

**Version**: 1.0.0  
**Author**: Jack Notman  

* [@h2mlagency/bettertimeout](#module_@h2mlagency/bettertimeout)
    * [~Timeout](#module_@h2mlagency/bettertimeout..Timeout)
        * [new Timeout(callback, duration)](#new_module_@h2mlagency/bettertimeout..Timeout_new)
        * [.clear([callback])](#module_@h2mlagency/bettertimeout..Timeout+clear)
    * [~Timer](#module_@h2mlagency/bettertimeout..Timer)
        * [new Timer(config)](#new_module_@h2mlagency/bettertimeout..Timer_new)
        * [.done](#module_@h2mlagency/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
        * [.duration](#module_@h2mlagency/bettertimeout..Timer+duration)
        * [.startedCallback](#module_@h2mlagency/bettertimeout..Timer+startedCallback)
        * [.successCallback](#module_@h2mlagency/bettertimeout..Timer+successCallback)
        * [.failureCallback](#module_@h2mlagency/bettertimeout..Timer+failureCallback)
        * [.start(config)](#module_@h2mlagency/bettertimeout..Timer+start)
        * [.cancel()](#module_@h2mlagency/bettertimeout..Timer+cancel)

<a name="module_@h2mlagency/bettertimeout..Timeout"></a>

### @h2mlagency/bettertimeout~Timeout
The [Timeout](Timeout) class.

**Kind**: inner class of [<code>@h2mlagency/bettertimeout</code>](#module_@h2mlagency/bettertimeout)  

* [~Timeout](#module_@h2mlagency/bettertimeout..Timeout)
    * [new Timeout(callback, duration)](#new_module_@h2mlagency/bettertimeout..Timeout_new)
    * [.clear([callback])](#module_@h2mlagency/bettertimeout..Timeout+clear)

<a name="new_module_@h2mlagency/bettertimeout..Timeout_new"></a>

#### new Timeout(callback, duration)
Creates a new instance of the [Timeout](Timeout) class.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be run once the [Timeout](Timeout) finishes. |
| duration | <code>Number</code> | The duration, in milliseconds, to wait before the [callback](callback) function is called. |

<a name="module_@h2mlagency/bettertimeout..Timeout+clear"></a>

#### timeout.clear([callback])
Clears the Timeout, and calls the [callback](callback) function if one is provided.

**Kind**: instance method of [<code>Timeout</code>](#module_@h2mlagency/bettertimeout..Timeout)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [callback] | <code>function</code> | <code>false</code> | The callback function to optionally be run once the Timeout finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer"></a>

### @h2mlagency/bettertimeout~Timer
The [Timer](Timer) class.

**Kind**: inner class of [<code>@h2mlagency/bettertimeout</code>](#module_@h2mlagency/bettertimeout)  

* [~Timer](#module_@h2mlagency/bettertimeout..Timer)
    * [new Timer(config)](#new_module_@h2mlagency/bettertimeout..Timer_new)
    * [.done](#module_@h2mlagency/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
    * [.duration](#module_@h2mlagency/bettertimeout..Timer+duration)
    * [.startedCallback](#module_@h2mlagency/bettertimeout..Timer+startedCallback)
    * [.successCallback](#module_@h2mlagency/bettertimeout..Timer+successCallback)
    * [.failureCallback](#module_@h2mlagency/bettertimeout..Timer+failureCallback)
    * [.start(config)](#module_@h2mlagency/bettertimeout..Timer+start)
    * [.cancel()](#module_@h2mlagency/bettertimeout..Timer+cancel)

<a name="new_module_@h2mlagency/bettertimeout..Timer_new"></a>

#### new Timer(config)
Creates a new instance of the [Timer](Timer) class.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The default config options for the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | The duration, in milliseconds, to wait before the [Timer](Timer) finishes. |
| [config.startedCallback] | <code>function</code> | The callback function to be run when the [Timer](Timer) is started. |
| [config.successCallback] | <code>function</code> | The callback function to be run once the [Timer](Timer) finishes. |
| [config.failureCallback] | <code>function</code> | The callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2mlagency/bettertimeout..Timer+done"></a>

#### timer.done : <code>Undefined</code> \| <code>Promise</code>
Exposes the [Timer](Timer) Promise once the [Timer.start](Timer.start) method has been called.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  
**Access**: public  
<a name="module_@h2mlagency/bettertimeout..Timer+duration"></a>

#### timer.duration
Sets the [duration](duration) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>Number</code> | Sets the duration, in milliseconds, to wait before the [Timer](Timer) finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer+startedCallback"></a>

#### timer.startedCallback
Sets the [startedCallback](startedCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run when the [Timer](Timer) is started. |

<a name="module_@h2mlagency/bettertimeout..Timer+successCallback"></a>

#### timer.successCallback
Sets the [Timer.successCallback](Timer.successCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>function</code> | Sets the callback function to be run once the [Timer](Timer) finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer+failureCallback"></a>

#### timer.failureCallback
Sets the [failureCallback](failureCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2mlagency/bettertimeout..Timer+start"></a>

#### timer.start(config)
Creates a Promise which resolves after the instance [duration](duration) or the provided [config.duration](config.duration), and sets the instance [Timer.done](Timer.done) property equal to the Promise.

**Kind**: instance method of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Config options used to override the defined behaviour of the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | Overrides the defined duration of the [Timer](Timer) instance. |

<a name="module_@h2mlagency/bettertimeout..Timer+cancel"></a>

#### timer.cancel()
Cancels the [Timer](Timer) instance, and if defined calls the [failureCallback](failureCallback)

**Kind**: instance method of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  
<a name="module_@h2mlagency/bettertimeout"></a>

## @h2mlagency/bettertimeout

* [@h2mlagency/bettertimeout](#module_@h2mlagency/bettertimeout)
    * [~Timeout](#module_@h2mlagency/bettertimeout..Timeout)
        * [new Timeout(callback, duration)](#new_module_@h2mlagency/bettertimeout..Timeout_new)
        * [.clear([callback])](#module_@h2mlagency/bettertimeout..Timeout+clear)
    * [~Timer](#module_@h2mlagency/bettertimeout..Timer)
        * [new Timer(config)](#new_module_@h2mlagency/bettertimeout..Timer_new)
        * [.done](#module_@h2mlagency/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
        * [.duration](#module_@h2mlagency/bettertimeout..Timer+duration)
        * [.startedCallback](#module_@h2mlagency/bettertimeout..Timer+startedCallback)
        * [.successCallback](#module_@h2mlagency/bettertimeout..Timer+successCallback)
        * [.failureCallback](#module_@h2mlagency/bettertimeout..Timer+failureCallback)
        * [.start(config)](#module_@h2mlagency/bettertimeout..Timer+start)
        * [.cancel()](#module_@h2mlagency/bettertimeout..Timer+cancel)

<a name="module_@h2mlagency/bettertimeout..Timeout"></a>

### @h2mlagency/bettertimeout~Timeout
The [Timeout](Timeout) class.

**Kind**: inner class of [<code>@h2mlagency/bettertimeout</code>](#module_@h2mlagency/bettertimeout)  

* [~Timeout](#module_@h2mlagency/bettertimeout..Timeout)
    * [new Timeout(callback, duration)](#new_module_@h2mlagency/bettertimeout..Timeout_new)
    * [.clear([callback])](#module_@h2mlagency/bettertimeout..Timeout+clear)

<a name="new_module_@h2mlagency/bettertimeout..Timeout_new"></a>

#### new Timeout(callback, duration)
Creates a new instance of the [Timeout](Timeout) class.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be run once the [Timeout](Timeout) finishes. |
| duration | <code>Number</code> | The duration, in milliseconds, to wait before the [callback](callback) function is called. |

<a name="module_@h2mlagency/bettertimeout..Timeout+clear"></a>

#### timeout.clear([callback])
Clears the Timeout, and calls the [callback](callback) function if one is provided.

**Kind**: instance method of [<code>Timeout</code>](#module_@h2mlagency/bettertimeout..Timeout)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [callback] | <code>function</code> | <code>false</code> | The callback function to optionally be run once the Timeout finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer"></a>

### @h2mlagency/bettertimeout~Timer
The [Timer](Timer) class.

**Kind**: inner class of [<code>@h2mlagency/bettertimeout</code>](#module_@h2mlagency/bettertimeout)  

* [~Timer](#module_@h2mlagency/bettertimeout..Timer)
    * [new Timer(config)](#new_module_@h2mlagency/bettertimeout..Timer_new)
    * [.done](#module_@h2mlagency/bettertimeout..Timer+done) : <code>Undefined</code> \| <code>Promise</code>
    * [.duration](#module_@h2mlagency/bettertimeout..Timer+duration)
    * [.startedCallback](#module_@h2mlagency/bettertimeout..Timer+startedCallback)
    * [.successCallback](#module_@h2mlagency/bettertimeout..Timer+successCallback)
    * [.failureCallback](#module_@h2mlagency/bettertimeout..Timer+failureCallback)
    * [.start(config)](#module_@h2mlagency/bettertimeout..Timer+start)
    * [.cancel()](#module_@h2mlagency/bettertimeout..Timer+cancel)

<a name="new_module_@h2mlagency/bettertimeout..Timer_new"></a>

#### new Timer(config)
Creates a new instance of the [Timer](Timer) class.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The default config options for the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | The duration, in milliseconds, to wait before the [Timer](Timer) finishes. |
| [config.startedCallback] | <code>function</code> | The callback function to be run when the [Timer](Timer) is started. |
| [config.successCallback] | <code>function</code> | The callback function to be run once the [Timer](Timer) finishes. |
| [config.failureCallback] | <code>function</code> | The callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2mlagency/bettertimeout..Timer+done"></a>

#### timer.done : <code>Undefined</code> \| <code>Promise</code>
Exposes the [Timer](Timer) Promise once the [Timer.start](Timer.start) method has been called.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  
**Access**: public  
<a name="module_@h2mlagency/bettertimeout..Timer+duration"></a>

#### timer.duration
Sets the [duration](duration) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>Number</code> | Sets the duration, in milliseconds, to wait before the [Timer](Timer) finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer+startedCallback"></a>

#### timer.startedCallback
Sets the [startedCallback](startedCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run when the [Timer](Timer) is started. |

<a name="module_@h2mlagency/bettertimeout..Timer+successCallback"></a>

#### timer.successCallback
Sets the [Timer.successCallback](Timer.successCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>function</code> | Sets the callback function to be run once the [Timer](Timer) finishes. |

<a name="module_@h2mlagency/bettertimeout..Timer+failureCallback"></a>

#### timer.failureCallback
Sets the [failureCallback](failureCallback) property.

**Kind**: instance property of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| startedCallback | <code>function</code> | Sets the callback function to be run if the [Timer](Timer) is cancelled. |

<a name="module_@h2mlagency/bettertimeout..Timer+start"></a>

#### timer.start(config)
Creates a Promise which resolves after the instance [duration](duration) or the provided [config.duration](config.duration), and sets the instance [Timer.done](Timer.done) property equal to the Promise.

**Kind**: instance method of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Config options used to override the defined behaviour of the [Timer](Timer) instance. |
| config.duration | <code>Number</code> | Overrides the defined duration of the [Timer](Timer) instance. |

<a name="module_@h2mlagency/bettertimeout..Timer+cancel"></a>

#### timer.cancel()
Cancels the [Timer](Timer) instance, and if defined calls the [failureCallback](failureCallback)

**Kind**: instance method of [<code>Timer</code>](#module_@h2mlagency/bettertimeout..Timer)  