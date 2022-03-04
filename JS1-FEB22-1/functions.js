/**
 * functions - execute one or more lines of code at once
 * they have:
 * input
 * output
 * OR both
 * OR neither
 * very similar in other languages
 * JS diffs:
 * JS can pass functions as data
 * JS can return another function as data
 */

console.log("Hello");
console.log("world");
console.log("How are you today?");

// ESSENTIAL

// 1. function declaration
// function declarations are loaded into memory at the start
// no input, no output
function greet1() {
  console.log("Hello");
  console.log("world");
  console.log("How are you today?");
}
greet1();

// like this, without a return statement, we cannot persist output and pass it on
var greet1 = greet1();
console.log("greet1: " + greet1); // undefined

// 2. function declaration
// input, no output
function greet2(name) {
  // parameter
  console.log("Hello");
  console.log(name);
  console.log("How are you today?");
}
greet2("Bruce"); // argument

// still cannot pass on output to other parts of the program
var result2 = greet2("Patti");
console.log(result2);
console.log("greet1: " + greet2("Patti")); // undefined

// 3. function declaration
// input and output
function greet3(name) {
  // parameter
  return "Hello\n" + name + "\nHow are you today?";
}
console.log("If I don't supply a string name:");
console.log(greet3(123)); // works, because 123 is coerced into a string
console.log(greet3([])); // blank space
// return statements SHOULD BE
// the last statement in a path through the body of the function
// return ONE THING\
// that thing may be a complex expression
greet3("Nils"); // argument
// no console output without passing the result of the function to CLG
console.log(greet3("Nils")); // output as input (to CLG)
var nils = greet3("Nils"); // persists output to a variable
console.log(nils);

// in case you're wondering how do we know that parametrised variable name is in fact a name:
// A: we don't

// 4. function declaration
// output, no input

function greet4() {
  return "Hello \nWorld \nhow are you today?";
}

console.log(greet4());

// ADVANCED FUNCTIONS

// 5. function declaration with type check

function greet5(name) {
  if (typeof name !== "string") {
    return null;
  }
  return "Hello\n" + name + "\nHow are you today?"; // must be last statement in block, not in any more braces
  // If I were to write code HERE, it would be unreachble
}

console.log(greet5("Soozie"));
console.log(greet5(123));
console.log(greet5([])); // null

// 5A. function declaration with type check and default parameter
function greet5A(name = "yourself") {
  if (typeof name !== "string") {
    return null;
  }
  return "Hello\n" + name + "\nHow are you today?"; // must be last statement in block, not in any more braces
  // If I were to write code HERE, it would be unreachble
}
console.log(greet5A());
console.log(greet5A("Clarence"));

// 6. anonymous function expression
// function expressions are NOT loaded into memory at the start
// they are loaded where they occur in the code

const noName = function () {
  return "A Girl Has No Name";
};
console.log(noName());

// special use cases for this include prototype manipulation in OO JS - later

// 7. arrow functions =>
// are a form of anonymous function expression
// with a shortened syntax
// they are similar to Java Lambdas ->
// but in Java they have an ultra-specific execution context

// stage 1 - take an anon func expression
const noName1 = function () {
  return "A Girl Has No Name";
};

// stage 2 - remove func keyword, place arrow after parens
const noName2 = () => {
  return "A Girl Has No Name";
};

// stage 3 - remove return keyword and braces IF body has only one line
const noName3 = () => "A Girl Has No Name";

// stage 4 - optionally, remove parens if there is just one arg
const noName4 = (name) => "A Girl Has The Name: " + name;
