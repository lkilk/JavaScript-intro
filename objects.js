/**
 * an object is a container for 
 * related data and functions
 * usually, it's functions act on some of its data
 * 
 * if an object had a function that didn't affect any of its data, 
 * that function would be a candidate for a different object altogether 
 * OR sometimes what we call 
 * a STATIC context
 * 
 * eg Car object (Capital C)
 * has attributes, make, model , milages etc. 
 * functions (sometimes called methods) such as drive(), park(), refuel(), recharge()
 * 
 * method milesToKms doesnt actually need a Car object to run
 * so its not an instance method (property of car objects)
 * but a static method (property of car blueprint or class)
 * 
 * 
 */

//1. object literal - person

const person = {name: '', age: 0};

const alan = {name: 'Alan Lavender', age: 54};
const bruce = {name: 'Bruce Springsteen', age: 71};
const nils = {surname: 'Lofgren', firstname: 'Nils'};

console.table(alan);
console.table(bruce);
console.table(nils);

const bandOfLiterals = [];
bandOfLiterals.push(alan);
bandOfLiterals.push(nils);
bandOfLiterals.push(bruce);

for(let member of bandOfLiterals){
    console.log(`Name: ${member.name}, Age: ${member.age}`);
}

//output:
// Name: Alan Lavender, Age: 54
// Name: undefined, Age: undefined
// Name: Bruce Springsteen, Age: 71

// we need a method of instantating objects with same properties (not necessarily same values) 

// E55 function constructor
// used in conjuction with the new keyword

function Musician (name, age, ...instruments){ // rest parameters, as in the rest of them( can be multple instruments)
    this.name = name;
    this.age = age;
    this.instruments = [...instruments]; //spread syntax
}

const alanF = new Musician("Alan", 54, "trombone", "keyboards", 'vox');
const bruceF = new Musician("Bruce", 71, "guitar", "harmonica", 'vox');
const nilsF = new Musician("Nils", 65, "lead guitar", 'backing vox');

const bandOFFunctionConstructors = [];

bandOFFunctionConstructors.push(alanF);
bandOFFunctionConstructors.push(nilsF);
bandOFFunctionConstructors.push(bruceF);

for(let member of bandOFFunctionConstructors){
    console.log(`Name: ${member.name}, Age: ${member.age}`);
}

// what about functions?

// JS does this its own quirky way
Musician.prototype.plays = function (){
    let played = "";
    for (let i = 0; i < this.instruments.length; i++) {
        played += this.instruments[i] + ", ";   
    }

    return `${ this.name} plays ${played}`
}

// functions added to the prototype property affect ALL objects created with the function constructor
// past, present and future. 

console.log(alanF.plays());
console.log(nilsF.plays());
console.log(bruceF.plays());

// this function constructor / prototype manipulation model is THE WAY JS does it

//localStorage, ES6 classes were introduced to link more closely with other languages

class MusicianClass { 
    constructor (name, age, ...instruments){ // rest parameters, as in the rest of them( can be multple instruments)
        this.name = name;
        this.age = age;
        this.instruments = [...instruments]; //spread syntax
    }
    // here i may define functions 
    plays = function (){
        let played = "";
        for (let i = 0; i < this.instruments.length; i++) {
            played += this.instruments[i] + ", ";   
        }
    
        return `${ this.name} plays ${played}`
    }

} // end of class

const alanC = new MusicianClass("Alan", 54, "trombone", "keyboards", 'vox');
const bruceC = new MusicianClass("Bruce", 71, "guitar", "harmonica", 'vox');
const nilsC = new MusicianClass("Nils", 65, "lead guitar", 'backing vox');


console.log('\n same again using ES6 class:');

console.log(alanC.plays());