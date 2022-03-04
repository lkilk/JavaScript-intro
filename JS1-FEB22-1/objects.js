/**
 * an object is a container for-
 * related data and functions
 * usually, functions to transform some or all of that data
 *
 * if an object had a function that didn't affect any of its data,
 * that function would be a candidate for ananother object or, sometimes,
 * a static context
 *
 * eg Car object (capital C)
 * has attributes make, model, colour, trim, year
 * functions(sometimes called methods) such as drive(), park(), refuel()
 *
 * method milesToKm(miles) doesn't need each car object to have their own copy-
 * one copy is fine for all car objects, and may be shared with objects of a different type eg people, buses
 *
 * that's said to be a static context
 */

// 1. object literal - person
const person = { name: "", age: 0 };
console.table(person);

const alan = { name: "Alan lavender", age: 54 };
const bruce = { name: "Bruce Springsteen", age: 71 };
const nils = { surname: "Lofgren", fistname: "Nils" };

// so we want to put object literals in a collection...
// their props/attributes are not uniform

const bandOfLiterals = [];
bandOfLiterals.push(alan);
bandOfLiterals.push(nils);
bandOfLiterals.push(bruce);

for (let member of bandOfLiterals) {
  console.log(member.name);
}
//Alan lavender
// undefined
// Bruce Springsteen

// we need a way of making objects with the same properties (not necessarily the same values)
// ES5 way is a Function constructor

// const Musician = function(name, age, ...instruments) { // ok too but watch position in codebase

function Musician(name, age, ...instruments) {
  // rest operator
  this.name = name;
  this.age = age;
  this.instruments = [...instruments]; // Spread syntax
}

// this special function does not work alone
// it is called whenever the "new' keyword appers."
const alanFC = new Musician(
  "Alan Lavender",
  54,
  "trombone",
  "keyboards",
  "vox"
);
const bruceFC = new Musician(
  "Bruce Springsteen",
  71,
  "Vox",
  "guitar",
  "keyboards",
  "harmonica"
);
const nilsFC = new Musician("Nils Lofgren", 68, "guitar", "backing vox");

const bandOfFunctions = [];
bandOfFunctions.push(alanFC);
bandOfFunctions.push(nilsFC);
bandOfFunctions.push(bruceFC);

for (let member of bandOfFunctions) {
  console.log(member.name);
}

// what about functions in this model?

Musician.prototype.plays = function () {
  let played = "";
  for (let i = 0; i < this.instruments.length; i++) {
    if (i === this.instruments.length - 1) {
      //if its the last instrument in the list
      played += this.instruments[i] + ". ";
    } else {
      played += this.instruments[i] + ", ";
    }
  }
  return `${this.name} plays ${played}`;
};

console.log(alanFC.plays());
// adds functionality to objects created past, present, and future
// prototype manipulation may even be used with ES6 classes
// this method, the function constructor and prototype method, is Core JS - ES5 and backwards-compatible
// in a modern JS application, code is usually transpiled down to this way of handling things
// but we write in a different syntax for ease of comprehension

// ES6 classes
// refactor our function constructor and plays() method to a class
// replace function keyword with class keyword
// move parameters into a special function called constructor
// include functions/methods of the class inside the class

// ES6 classes:
class MusicianClass {
  constructor(name, age, ...instruments) {
    this.name = name;
    this.age = age;
    this.instruments = [...instruments]; // Spread syntax
  }
  // inside ES6 class functions are defined
  plays = function () {
    let played = "";
    for (let i = 0; i < this.instruments.length; i++) {
      if (i === this.instruments.length - 1) {
        //if its the last instrument in the list
        played += this.instruments[i] + ". ";
      } else {
        played += this.instruments[i] + ", ";
      }
    }
    return `${this.name} plays ${played}`;
  };
} //end class

// some people think this is more readable
// it ships functions in same code as data
// but we can still use prototype manipulation on top of classes

// we make object instances exactly the same way using classes:
const MaxClass = new MusicianClass("Max Weinberg", 68, "drums", "percussion");
const GaryClass = new MusicianClass("Gary Tallent", 68, "bass", "percussion");
console.log(first);
