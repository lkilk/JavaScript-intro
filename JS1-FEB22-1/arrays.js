/**
 * an array is a zero-indexed list of values
 * an array has a length property
 */

// Array Literal
const band = [
  "Bruce",
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
// Array function constructor
const band2 = new Array(band);
// Array function constructor, values passed in directly
const band3 = new Array(
  "Bruce",
  "Patti",
  "Stevie",
  "Nils",
  "Tom",
  "Max",
  "Gary",
  "Danny",
  "Soozie",
  "Clarence",
  "Jake"
);

console.table(band);
console.table(band2); // different display in console.table()
console.table(band3);

// one number in parens is initial size
const myEmptyArray = new Array(20);
console.log(myEmptyArray);

// more performant (can be)
// each time Array.prototype.push() is used to add 1 item
// underlying Array is copied into new Array (length + 1)
// new item added to new Array at end

// adding and removing items
myEmptyArray[0] = "Bruce";

console.table(myEmptyArray);

for (let member of myEmptyArray) {
  console.log(member);
} // Bruce and 19 undefineds

// for Each loop - skips undefineds

myEmptyArray.forEach((el) => console.log(el));

// copy array eements from one to another

for (let member of band3) {
  myEmptyArray.push(member);
}

console.log(
  "Now myEmptyArray contains Bruce, at [0], 19 empty items, then copies of all the members from band3:"
);
console.log(myEmptyArray);

// getting elements from an array
var stevie = myEmptyArray[22];
console.log(stevie);

// Array.prototype.slice() // does not mutate
// Array.prototype.splice() // does mutate

let restOfBand = myEmptyArray.slice(20); // one arg: from to the end
console.log(restOfBand);
let guitarists = myEmptyArray.slice(20, 25); // two args: from, to
console.log(guitarists);
// original array NOT AFFECTED
console.log(myEmptyArray);

let saxPlayers = myEmptyArray.splice(29, 2); // start index, no. of elements
console.log(saxPlayers);

console.log(myEmptyArray); // no Clarence, Jake

// look at array methods we must ask do they change the original, or return a copy of the original with the changes

// Array.prototype.map() // returns new array with transformation function applied to each member
// Array.prototype.filter() // returns new array with only those members that pass a test (predicate)
// Array.prototype.reduce() // return (by default) a SINGlE VALUE obtained by comparing each element to the next, passing in a comparator function

const shoutyBand = band.map((e) => e.toUpperCase());
console.log(shoutyBand);
// original unchanged:
console.log(band);

const shortbandnames = band.filter((e) => e.length <= 4);
console.log(shortbandnames);
// original unchanged:
console.log(band);

// these array methods can be chained together in a pipeline
console.log(band.map((e) => e.toUpperCase()).filter((e) => e.length <= 4)); //[ 'NILS', 'TOM', 'MAX', 'GARY', 'JAKE' ]
console.log(
  band
    .map((e) => e.toUpperCase())
    .filter((e) => e.length <= 4)
    .sort()
); //[ 'GARY', 'JAKE', 'MAX', 'NILS', 'TOM' ]

// NOTE: as reducers (usually) return a single value
// they are (usually) used LAST in a chain
// you can pass in an optional dependency array as a second argument
// this keeps the array datatype going, so you may perform more map/filter operations

const housePrices = [103000, 245000, 545000, 93000, 125000];

// use map, reduce and filter (not necessarily in that order) to find:

// the average house price under 150,000 after 3% stamp duty added

let pricesUnder150PlusTax = housePrices
  .map((hp) => (hp * 103) / 100)
  .filter((hp) => hp <= 150000);

console.log(
  pricesUnder150PlusTax.reduce((prev, curr) => prev + curr) /
    pricesUnder150PlusTax.length
);
