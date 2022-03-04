// see Jake Archibald conference talk
// https://youtu.be/cCOL7MC4Pl0

// ordinary order of execution
console.log('ONE');
console.log('TWO');
console.log('THREE');
// ONE
// TWO
// THREE
console.log('*******************************\n\n');


/* setTimeout
    - removes event from ordinary order
    - queues event on event loop
    - adds specified (MINIMUM) delay
*/
console.log('ONE');
setTimeout(function(){
    console.log('TWO - after 2s');
}, 2000);
console.log('THREE');
// ONE
// THREE
// TWO (after 2 seconds)
console.log('*******************************\n\n');


/* setTimeout with ZERO DELAY:
    - ALSO removes event from ordinary order
    - ALSO queues event on event loop
    - adds no delay
*/
console.log('ONE');
setTimeout(function(){
    console.log('TWO - no delay');
}, 0);
console.log('THREE');
// ONE
// THREE
// TWO 

// ACTUALLY what happens is
// ORDER:

/*
ONE
TWO
THREE

ONE
THREE

ONE
THREE
TWO // from this group
TWO // from previous group, with delay

- EVERYTHING ELSE gets executed
before any queued events
- see screenshot ./CH11-EVENT-LOOP-2.png
in this dir

*/
