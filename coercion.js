/**
 * coercion is the changing of values from
 * one datatype to another
 */

let yearNumber = 1995;
console.log(yearNumber + 1);
console.log(yearNumber - 1);

let yearString = "1995";
console.log(yearString + 1); // 19951 // concatenation: turns second operand (1) into string
console.log(yearString - 1); // 1994 // JS recognises that a minus is used with numbers; turns first operand into a number 

// equalities 
console.log(yearNumber == yearString); // true

console.log(yearNumber === yearString); // false

// some people say, the first line above is loose or abstract equality
// equality of value but not type
// the second is strict equality 
// equality of value and type
// actually most ALL equality comparisons are strict 
// Double == allows coercion of one or more operands before a strict comparison 

console.log(yearString - "1"); //1994
console.log(yearString - "one"); //NaN - result of expression where 

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(+0 === -0); // true
//NaN never equals itself with == or ===
// you could have arrived at NaN in different ways 

// Equality using Object.is()

console.log(Object.is(NaN,NaN)); // true
console.log(Object.is(+0,-0)); // false

console.log(1/0); //Infinity - would be a major error in most programming languages but JS returns this instead

// explicit coercions

// strings-to-numbers
console.log(100 + '1'); // '1001'
// way 1
console.log(100 + parseInt('1')); // 101: method of string class
// way 2
console.log(100 + Number('1')); // 101: function constructor of number class
// way 3
console.log(100 + + '1'); // 101: unary plus operator

// wrapper classes 
// there exist a number of object wrapper classes 
// they promote primitive values into objects 
// they have methods associated with objects of that type 

console.log(Boolean('')); // flase: empty strings
console.log(Boolean(' ')); // true: non empty strings, even if it is just a space it is no longer considered empty
console.log(Boolean(0)); // flase: zero
console.log(Boolean(1)); // true: any non zero number
console.log(Boolean({a:1})); // true
console.log(Boolean({})); // even empty objects are true

//we can also obtain the truthiness of a value by the !! operator 
console.log(!true); // flase
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // flase

// first ! changes type to Boolean and gives you the opposite truth value
// the second ! inverts that opposite value 
console.log(!!''); // false
console.log(!!'x'); // true

// compound operators
var x = 1;
// we can increment/ decrement this value in one of 4 ways:
x = x + 1; 
console.log(x);
x += 1; 
console.log(x);
x++; // postfix increment: counts up by one 
console.log(x);
++x; //prefix increment 

//prefix and postfix differ in behaviour when used in an expression. 

//prefix operator changes value for use in expression, then stores changed value 
//postfix uses value as is, then stores changed value

let counterPrefix = 0;
let counterPostfix = 0;

++counterPrefix;
counterPostfix++;

console.log(counterPrefix, counterPostfix); // both incrememnt by 1 OUTSIDE an expression 

// in an expression

let resultPrefix = ++counterPrefix + 100;
let resultPostfix = counterPostfix++ + 100;

console.log(resultPrefix, resultPostfix);
console.log(counterPrefix, counterPostfix);