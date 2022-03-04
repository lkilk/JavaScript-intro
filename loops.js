/**
 * a loop is a block of code as is a conditional
 * in this case, the code in (parenthesis) is the loop control, 
 * the code in { curlies } is the statement(s) to be executed repeatedly 
 * loop control can be a counter
 * OR the length prop of a collection
 * OR some other condition eg user types x to quit, clicks leave etc etc
 * 
 */

const band = [
    "Patti",
    "Stevie",
    "Nils",
    "Tom",
    "Max",
    "Gary",
    "Danny",
    "Snoozie",
    "Clarence",
    "Jake",
];

//arrays have a length property
console.log(band.length);

// they are a collection of zero-indexed key: value pairs (the index is the key)
// values may be any type, even other arrays
// keys, however, are always 0,1,2... etc

// accessing members via thier index
console.log(band[3]); //Tom

// mutating the array / changing members
band[3] = "Tom Morello";

//traversing an array using loops:
// console.log(band);

//1. conventional for loop

for(let i = 0; i < band.length; i++) {
    console.log(band[i]);
}

// 2. for of loop
// cleaner code, doesnt reference idex position
console.log('\nUSING FOR OF LOOP\n')
for (const member of band) {
    console.log(member);
}
// console.log(member); //can access member value if VAR used

//break and continue withn conventional for 

for(let i = 0; i < band.length; i++) {
    if (band[i] == "Gary"){
        break; // breaks out of entire loop
    }
    console.log(band[i]);
}

for(let i = 0; i < band.length; i++) {
    if (band[i] == "Gary"){
        continue; // skips this iteration of the loop
    }
    console.log(band[i]);
}

// 3. while lopp
// like a for loop but the 3 control statements 
// get moved to three different places
// suited to use cases when loop control is not a counter eg
// while user does not type quit 
// whilefile has lines left to read 

// initialise a counter OUTSIDE the while loop
let counter = 0;
while(counter < band.length){
    console.log(band[counter]);
    counter++; //MUST increment the counter or it would be an infinite loop
}

// 4. do while loop
let counter2 = 0;
do {
    console.log(band[counter2]);
    counter2++; //MUST increment the counter or it would be an infinite loop
} while(counter2 < band.length);
// suited to cases where a loop MUST RUN at least once
// eg displaying a menu component 