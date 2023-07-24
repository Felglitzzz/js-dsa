# Core Concept

## How does JS works

A program has to allocate memory, parse and execute

Javascript is a single threaded language that can be non-blocking

Single threaded means it only has one call stack. Can only do one thing.

Synchronous programming/execution/tasks ?
Asynchronous programming ?


## V8 Engine

JS engine that web browser implements in chrome.

The v8 engine reads the javascript we write and changes it to machine executable instructions for the browser

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js

The engine consists of:
- A memory heap - memory allocation happens here
- A call stack - where code is read and executed

### Memory Heap

Unused memory fills up memory heap, that is what memory leak means

### Callstack

### Event Loop

### Blocking

### Asynchronous Operations

- Each thread gets its own event loop and can execute independently
- [Await expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description
) make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression.

### Tasks and MicroTasks
**Tasks handles events like I/O, timers, DOM events.**

*NB For Browser: Between tasks, the browser may render updates*

**setTimeout** is handles in JS runtime environment as Web API, and in libuv in node

Wait for the delay and schedules a task in the callback queue

**Microtasks/Jobs**

implement deferred execution for async/await, promises

calling `.then` against a settled promise queues a microtask for its callback

**Microtasks** happens before the next tasks

## Closures
 Combination of a function with references to its surrounding states or lexical environment. In other words, closures gives an inner function access to its outer function's scope. They are created everytime a function is created.
 
 What i love about closures is that it helps [emulate private methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures)

 ### Lexical scope
 Ability of a function scope to access variables from parent scope. 

 ### Function scope
 A scope where variables are only accessible in the function body where it is declared

 ### Var Scoping

 Variables declared with `var` are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function.

 [**Note that block with curly braces ( like in if else statements) do not create scope**]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#scoping_with_let_and_const')

 ### Let and Const Scoping
 creates block scope

