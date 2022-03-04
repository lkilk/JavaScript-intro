/**
 * a loop is a block of code as is a conditional
 * but in this case the code in the block is REPEATED
 * either for a counter number of times
 * OR for elements of a collection
 * each time the counter changes, or for each member of the collection
 * the loop code gets run
 */

const band = [
  "Patti",
  "Stevie",
  "Nils",
  "Tom",
  "Max",
  "Gary",
  "Danny",
  "Soozie",
  "Clarence",
  "Jake",
];

// arrays have a length property
console.log(band.length);

// they are a collection of zero-indexed key: value pairs
// the values may be anything, even other collections
// but the keys must be 0, 1, 2 etc

// accessing members via index
console.log(band[3]); // Tome
// NOT the 3rd ITEM, but the 3rd INDEX

// 1. conventional for loop
// 3 control statements in one place (...; ...; ...)
// ( ; ; ) // would be an infinite for loop

for (let i = 0; i < band.length; i++) {
  console.log(band[i]);
}

// 2. for of loop
// cleaner code
// does not reference index positions
for (let member of band) {
  console.log(member);
}

// 2A. for in loop
// meant for objects only where keys are often meaningful strings
for (let member in band) {
  console.log(member);
}

// break and continue used within loops

// 3A. conventional for loop with break
console.log("using break:\n");
for (let i = 0; i < band.length; i++) {
  if (band[i] === "Gary") {
    break;
  }
  console.log(band[i]);
}

// 3B. conventional for loop with continue
console.log("using continue:\n");
for (let i = 0; i < band.length; i++) {
  if (band[i] === "Gary") {
    continue;
  }
  console.log(band[i]);
}

// 4. while loop
// is like a for loop but the 3 control statements in 3 different places
// suited for use cases when not just a counter breaks out of the loop
// eg user types quit
let counter = 0; //1.
while (counter < band.length) {
  //2.
  console.log(band[counter]);
  counter++; //3. CARE: failure to implement this line gives an infinite loop
}

// 4A. the do-while loop
let counter2 = 0; //1.
do {
  //2.
  console.log(band[counter2]);
  counter2++; //3. CARE: failure to implement this line gives an infinite loop
} while (counter2 < band.length);
// suited to use cases where a loop must run at least once
// eg display a menu

// care using var in a loop control variable:

for (let i = 0; i < 10; i++) {
  // ReferenceError: i is not defined - value only "leaks out" if you use var
  console.log(i + 1);
}
// console.log(i); // value 10 if var used in loop control initialiser
