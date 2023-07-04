//write a program that prompts user for two positive integers
//then prints results of following operations on those two numbers
//additon, subtraction, product, quotient, remainder, and power

let rlSync = require('readline-sync');

let num1 = rlSync.question("Enter the first number:\n");
num1 = parseInt(num1,10)
let num2 = rlSync.question("Enter the second number:\n");
num2 = parseInt(num2,10)
console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} - ${num2} = ${num1 - num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`${num1} / ${num2} = ${num1 / num2}`)
console.log(`${num1} % ${num2} = ${num1 % num2}`)
console.log(`${num1} ** ${num2} = ${num1 ** num2}`)