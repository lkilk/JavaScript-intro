/**
 * coercion is the changing of values from one data type into another
 */

// addition (Math) / concatenation (String)

let yearNumber = 1995;
console.log(yearNumber + 1);
console.log(yearNumber - 1);

let yearString = "1995";
console.log(yearNumber == yearString); // true: same value string (digits) to number
console.log(yearNumber === yearString); // false: same value, but different type
console.log(typeof yearNumber);
console.log(typeof yearString);

// actually, ALL or most comparisons in JS are ===
// == allows for coercion of one or more operands
// BEFORE a === comparison is made

console.log(yearString + 1); // string: 19951
console.log(yearString - 1); // number: 1994

console.log(yearString - "one"); // NaN: a value obtained where a number was expected, and none provided
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); //false

console.log(1 / 0); // Infinity

// explicit coercion methods:

// strings-to-numbers
console.log(100 + "1"); //'1001'
// way 1
console.log(100 + parseInt("1")); //101: method of String class
// way 2
console.log(100 + Number("1")); //101: method (constructor function) of Number class
// way 3
console.log(100 + +"1"); // 101: unary + operator

// there are object wrapper classes for primitives eg number, String

console.log(Boolean("")); //false: empty strings
console.log(Boolean("x")); //true: any string not empty
console.log(Boolean(0)); // false: zero numbers
console.log(Boolean(1)); // true: non-zero numbers
console.log(Boolean(-99)); // true: non-zero numbers
console.log(Boolean({ a: 1, b: 2 })); // true: any object
console.log(Boolean({})); // true: any object INCLUDING EMPTY objects

// we can obtain trithy/falsy values from any data by the !! operator

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(!!""); // false
console.log(!!"x"); // true

// the first NOT (!) coerces data into the OPPOSITE Boolean value
// the second NOT (!!) flips value from true to false or vice versa

// compound + operator

var x = 1;
// we can count up by one in one of 4 ways:
x = x + 1;
console.log(x);
x += 1;
console.log(x);
x++; // one and one only added
console.log(x);
++x; // one and one only added
console.log(x);

// ++x and x++ are sublty but importantly different WHEN USED IN AN EXPRESSION

// ++x is prefix operator, changes x for use in expresion, then stores changed value
// x++ is postfix operator, changes x AFTER use in expresion, and stores changed value

let counterPREFIX = 0;
let counterPOSTFIX = 0;

++counterPREFIX;
counterPOSTFIX++;

console.log(counterPREFIX, counterPOSTFIX);

// use them in an expression:
let resultPREFIX = ++counterPREFIX + 100; //prefix operator uses variable value as is, stores with change made
let resultPOSTFIX = counterPOSTFIX++ + 100; // postfix operator makes change then uses and stores changed variable
console.log(resultPREFIX, resultPOSTFIX);
