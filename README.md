# Unexpected Behavior of the `arguments` Object in JavaScript

This repository demonstrates an uncommon but potentially problematic quirk in JavaScript's handling of the `arguments` object within functions.

## The Bug

The `arguments` object in JavaScript is not a true array.  While it provides access to the function's arguments, it lacks the full functionality of arrays. In particular, accessing indices beyond the actual number of arguments does not throw an error; instead, it returns `undefined`.

The `bug.js` file shows a function `myFunc` that logs the first two elements of the `arguments` object. When called with more or less than two arguments, the output is unexpected.  This behavior can lead to subtle bugs that are difficult to trace.

## The Solution

The `bugSolution.js` file provides a solution by converting the `arguments` object into a real array using the spread syntax (`...`). This approach allows for safe and predictable access to the arguments and enables use of standard array methods.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` and `node bugSolution.js` to observe the different behaviors.