/**
 * a conditional is a program flow structure
 * that takes a boolean expression (...)
 * (one that evaluates to true or false)
 * which IF TRUE
 * executes the code block immediately after {...}
 * if FALSE
 * skips that block and resumes normal top-down parsing
 */

// i IF-ELSE
// 1. no branches
if (true) {
  console.log("code in this block executed");
}

// 2. one branch
if (false) {
  console.log("code in the if block executed");
} else {
  console.log("code in the else block executed");
}

// 3. multiple branches
if (false) {
  console.log("code in the FIRST if block executed");
} else if (true) {
  console.log("code in the SECOND IF block executed");
} else {
  console.log("code in the else block executed");
}

// there is no limit to the number of if...elses you can use

// ii SWITCH statement
// interchangeable with if...else
// Note Python has no switch

let variable = 2;
switch (variable) {
  // test variable for equality with multiple case statements
  case 1:
    console.log("You chose option 1");
    break;
  case 2:
    console.log("You chose option 2");
    break;
  case 3:
    console.log("You chose option 3");
    break;
  default:
    console.log("Please choose an opton 1,2,or 3");
} // end switch

// IF a switch is used WITHOUT break statements,
// the first matching case will be executed
// AND ALL those below
// this is special edge case mainly
// but is how switch was originally designed
// with breaks: exact same as if else
// without breaks: special behaviour

// iii ternary operator
// unary operator eg -3 - one operand
// binary operator eg 3 + 4 - two operands
// ternary operator - three operands
// like an EXCLUSIVE OR: one outcome only

let loggedInComponent = "<p>Admin component</p>";
let loggedOutComponent = "<p>Guest component</p>";
let isLoggedIn = false;

// let displayToUser = (isLoggedIn === true) // we don't have to compare a boolean in a conditional
let displayToUser = isLoggedIn ? loggedInComponent : loggedOutComponent;
console.log(displayToUser);

// used a lot
// one way of conditionally rendering HTML, as above
// other way is && operator
