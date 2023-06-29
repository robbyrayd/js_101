let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let integer = readlineSync.prompt();

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`) ;
let total = 1
if (readlineSync.prompt() === "s") {
  for (let i = 1; i <= integer; i++) {
    total = total += i
  }
}
if (readlineSync.prompt() === "p") {
  for (let j = 1; j <= integer; j++) {
    total = total *= j
  }
}
console.log (total)