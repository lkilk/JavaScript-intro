// exercise Chapter 3 page 17
// display results in an alert
// embed script in HTML page

var name = "Tim Smith";
// var surnames = ["Smith","Jones","Williams"]
var startDate = 2017;
var salary = 2409.50;
var isPermanent = true;

salary = 3510.90;
// var tim =   "Employee name: " +
//             name +
//             " started on " +
//             startDate +
//             " he earns £" +
//             salary +
//             ". Permanent status? " +
//             isPermanent + ".";
var tim =   "Employee name: " +
            name +
            "\n started on " +
            startDate +
            "\n he earns £" +
            salary +
            ".\n Permanent status? " +
            isPermanent + ".";

var tim2 = `Employee: ${ name } started on ${startDate} and earns £${salary} /year. Permanent status: ${isPermanent}`;
var tim3 = `
Employee: 
${name} 
started on 
${startDate} 
and earns 
£${salary} /year. 
Permanent status: 
${isPermanent}`;
console.log(tim, tim2, tim3);