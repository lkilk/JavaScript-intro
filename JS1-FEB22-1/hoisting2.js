// hoisting works in vanilla JS ES5 or older

// the APPARENT order of code is turned on its head

// // this makes perfect sense when you realise that...

// function declarations (and variable declarations) are loaded into memory at the start

// annotated in order of execution
// first pass of V8 Chromium engine (aka the interpreter) - looks ofr declarations
// 2nd looks for expressions
// 3rd and subsequent passes look for runtime executable code

let a, b; // 1. // let is block-scoped and will not be hoisted

console.log(goodMorning()); // 3.

function goodMorning() {
  // 1.
  a = "Goood "; // 2. // ReferenceError: Cannot access 'a' before initialization
  b = "Morning!"; // 2.
  return a + b; // 2.
}

// let a, b; // 1. // let is block-scoped and will not be hoisted
