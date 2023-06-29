//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
//The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
//You can ignore input validation and assume that the user will enter numbers.

let readlineSync = require("readline-sync");

console.log("What is the bill?");
let bill = readlineSync.prompt();
bill = parseInt(bill, 10);

console.log("What is the tip percentage?");
let tip = readlineSync.prompt();
tip = parseInt(tip, 10)
tip = bill * (tip / 100)

let billTotal = bill + tip

console.log(`The tip is \$${tip.toFixed(2)}`)
console.log(`The total is \$${billTotal.toFixed(2)}`)


