// hoisting is a thing that occurs only in Es5 non-strict code
// but it is a typical interview question still 

// the APPARENT 'wrong' order of things

//1. call a function that apparently hasn't been defined yet 
console.log(goodMorning()); //3.

// define a function whose variables are not yet declared
function goodMorning(){     //1.
    a = "Good ";            //2.
    b = "Morning";          //2.
    return a + b;           //2.
}

var a, b;                   //1.
// hoisting works for variable declarations only, NOT initialisations
// hoisting does not work with let & const keywords
// to understand we must look at the behaviour of the JS interpreter 
// browser or node makes AT LEAST 3 passes up and down the whole code 
// 1.first pass: declarations (variables and functions) - browser reads these declarations first
// 2.second pass: expressions get evaluated 
// 3.third pass: runtime code executed



