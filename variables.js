// Declaring a variable

var width; // reserves in memory a marker referencedby the word width 
console.log('width')
console.log(width)

// Assigning a variable

width = 42.5
console.log(width); 
console.log(typeof width); 

// you can redeclare and re-assign variables declared with var
var width
console.log(width); //retains old value of 42.5 


// let - cannot be redeclared, but may be re-assigned

let height;
console.log(height); 

//assignment

height = 20.2
console.log(height); 

// variables assigned with var are registered on the global or window object 
// other keywords do not register on the window object 

// once assigned variables in JS may changes thier datatype
// type coercion occurs implicitly or explicitly
// width and height are already declared, they are of type number 
width = true; //type boolean
height = 'this high'; //type string
console.log(typeof width); 
console.log(typeof height); 

// const - does not allow us to reassign values 
// cannot be declared only, must be initialised. 
const depth = 600;
console.log(depth);
console.log(typeof depth);

// const can be used with complex data eg objects, arrays etc
const dimensions = {
    width: 42.5, 
    height: 20.2,
    depth: 600
}

console.log(dimensions);
console.table(dimensions);


dimensions.depth = 500; //this allows us to change the depth 
console.table(dimensions);
// overall shape of data is unchanged, but properties may be modified: they are mutable



