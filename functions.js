/**
 * functions - execute one or more lines of code at once, by thier name, usually have:
 * input, output OR both OR neither
 * very similar to other languages, JS differs: 
 * JS can pass functions as data
 * JS can return another function as data
 */

console.log("Hello");
console.log("World");
console.log("How are you doing today?");

//ESSENTIAL functions

//1. function declaration
// function declarations are loaded into memory at the start
// no mater where they occure in the codebase 

function greet1() {
    console.log("Hello");
    console.log("World");
    console.log("How are you doing today?");
}

greet1();

//looks like there is output, but console.log is NOT considered output in a function
// cannot persist the result of that function 

var output1 = greet1();
console.log('greet1() output: ' + output1); //undefined

//2. function declaration imput, no output
function greet2(name) {
    console.log("Hello");
    console.log(name);
    console.log("How are you doing today?");
}

greet2('Jason');

var jason = greet2('Jason')
console.log(jason) // undefined

// 3. function declaration, input and output
// you can only return one thing
// that staement must be last in method

function greet3(name) {
    console.log("Hello");
    console.log(name);
    console.log("How are you doing today?");
    return
}

greet3('Jason');

function greet4(name) {
    return `Hello ${name}, how are you today?`;
}

greet4('William');// now function has a 'proper' output ... we cant see it 
// it can persist thus:
var william = greet4('William');
console.log(william)
console.log(greet4('Emily')); //output as input 

//4. function declaration, no input, output

function greet5() {
    return `Hello World, how are you today?`;
}

console.log(greet5())

// ADVANCED functions

// what if i put the wrong type of input in?

console.log(greet4(123)); //number coerced to string
console.log(greet4({})); //Hello [object Object], how are you today?

// input validation fixes this
// in JS, we have to write this ourselves
// in TypeScript, or Java for instance, we have to specify type

//5. function declaration with input, output and type checking
function greet6(name) {
    if(typeof name !== 'string'){
        return null;
    }
    return `Hello ${name}, how are you today?`;
}

console.log(greet6("Liam"));
console.log(greet6({})); // now just returns 'null'

//6. function declaration with input, output and type checking and default parameters 

function greet7(name = 'no name supplied') {
    if(typeof name !== 'string'){
        return null;
    }
    return `Hello ${name}, how are you today?`;
}

console.log(greet7("Robert"));
console.log(greet7()); //Hello no name supplied, how are you today? - function has a default value 

//7. Annonymous function expression 

const noName = function(){
    return 'A Girl had no Name'
}

// what is the point of this

console.log(noName())

// there are a very few use cases where we cannot or should not use function declarations 
// function expressons are loaded into memory where they occur 
// special use cases include prototype mainpulation

// 8. arrow functions =>
// a form of anonymous function expression 
// with a shorthand SyntaxError simiar to Java Lambdas ->

//stage 1
//start with an anonymous function expression
const noName1 = function(){
    return 'A girl has no name';
}

//stage 2
//remove function keyword, replace with arrow 
const noName2 = () =>{
    return 'A girl has no name';
}

//stage 3
//remove return keyword AND braces if the function has only one statement
const noName3 = () => 'A girl has no name';

//stage 4
//optionally, remove parens if just an arg
const noName4 = name => 'A girl has no name' + name;


