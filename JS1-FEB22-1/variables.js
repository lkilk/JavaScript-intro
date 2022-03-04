/**
 * A variable is a reserved marker in memory
 * that represents values and/or expressions
 */

var width; // reserves memory for first occurrence of our own variable name

console.log("width"); // prints the string "width"
console.log(width); // undefined - nothing assigned to variable

// assignment
width = 42.5; // no difference in JS between whole and floating point numbers
console.log(width);
// variable now has a datatype
console.log(typeof width); // "number"

// re-declare var
var width; // 42.5
console.log(width); // 42.5 - retains memory of assigment - NOT undefined

let height;
console.log(height); // undefined
height = 20.2;
console.log(height);

// variables declared with let cannot be re-declared
// let height; // SyntaxError: Identifier 'height' has already been declared

// variables declaerd with var and let
// may be re-assigned a different type

width = true;
height = " yay high";

console.log(width);
console.log(typeof width); // boolean
console.log(height);
console.log(typeof height); // string

// what if we do not wish variables to be re-assgned?

const depth = 600;
console.log(depth);
console.log(typeof depth);

// depth = 500; // TypeError: Assignment to constant variable.
// depth = true;// TypeError: Assignment to constant variable.

// const may be used for declaring and assigning
// const depth; // SyntaxError: Identifier 'depth' has already been declared

// they must do both at the same time: this is called initialization
//

// const may not be re-assigned a different OVERALL type
// depth = true; // TypeError: Assignment to constant variable.

const dimensions = {
  width: 42.5,
  height: 20.2,
  depth: 600,
};

console.log(dimensions);
console.table(dimensions);

dimensions.depth = 500; // it works!

// so use const for complex data eg objects, arrays, function expressions

// var puts properties on the global or window object
// const and let do not - a good thing

// variables may be of two types:
// primitives - immutable values
// reference types - mutable by default

const dimensions2 = dimensions;
// dimensions, and all its props are COPIED into reference dimensions2
// how many objects are there here?
// only one: dimensions
// so therefore, dimensions props are mutable via EITHER REFERENCE
dimensions.depth = 600;
console.table(dimensions);
// we can also access that prop through its new reference:
dimensions2.depth = 800;
console.table(dimensions2); // depth: 800
// also changed in original:
console.table(dimensions); // depth: 800


