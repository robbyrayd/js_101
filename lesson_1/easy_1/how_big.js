//Build a program that asks the user to enter the length and width of a room in meters, 
//and then logs the area of the room to the console in both square meters and square feet.

//Note: 1 square meter == 10.7639 square feet

//Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

//let rlSync = require('readline-sync');
//let length = rlSync.question("Enter the length of the room in meters");
//let width = rlSync.question("Enter the width of the room in meters");
//console.log(`The area of the room is ${length * width} square meters (${(length * width)*10.7639}) square feet`);

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFT = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10)

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFT);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
)