/**
 * a conditioanl is a program flow structure
 * that takes a single boolean value OR the boolean result of a boolean expression(....)  eg 3 < 4
 * if the result is TRUE
 * executes teh code block immediately after {....}
 * if FALSE 
 * skips the block and onto next line 
 */

// types of conditional 

// 1. no branches 
if(true){
    console.log('code in block executed')
}

// 2. one branch, if-else
if(false){
    console.log('code in if block executed')
} else {
    console.log('code in else block executed')
}

// 3. three or more branches
if(false){
    console.log('code in if block executed')
} else if (true){
    console.log('code in second if block executed')
} else {
    console.log('code in else block executed')
}

// 4. switch statement

/**
 * switch tests one variable for a match / equality
 * has case statements with colon 
 * if a match is found, that case will execute
 * has break statements (optionally) after each case statement - the program will exit the switch when it encounters a break
 */

let switchVariable = 2
switch(switchVariable){ // switch cases must test same data type as the switch variables eg variable is an int so 1 next to case must be an int
    case 1: 
        console.log('you chose option 1');
        break;
    case 2:
        console.log('you chose option 2');
        break;
    case 3:
        console.log('you chose option 3');
        break;
        // similar to an else
    default: 
        console.log('choose an option 1-3')
} //end switch

//without break statements
let mealOption = 2
switch(mealOption){ // switch cases must test same data type as the switch variables eg variable is an int so 1 next to case must be an int
    case 3: 
        console.log('drink, ');
    case 2:
        console.log('fries, ');
    case 1:
        console.log('burger, ');
        break;
        // default is similar to an else
    default: 
        console.log('choose an option 1-3')
} //end switch

// suits additive logic 
// cuts down on code duplication in case statements 

//5. ternary operator
// like an if-else on one line
// syntax:
var result = (true) ? 'case if true' : 'case if false'

console.log(result)

//use case:
// if  for instance we wish to asisgn snippts of HTML conditionaly:

const loggedInComponent = '<p>Admin component</p>';
const loggedOutComponent = '<p>Guest component</p>';
let isLoggedIn = true; 

// document.querySelector('#welcome').innerHTML = 
// (isLoggedIn)? loggedInComponent : loggedOutComponent