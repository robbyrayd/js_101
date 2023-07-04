//write a program that will ask for user's name
//program will greet the user
//if user writes "name!", computer yells back to the user

let rlSync = require('readline-sync');

let name = rlSync.question("What is your name?\n");

if (name[name.length -1] === "!") {
  name = name.slice(0, -1);
  console.log (`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${name}.`);
}



 

