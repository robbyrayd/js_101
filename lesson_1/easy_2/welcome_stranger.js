//create a function that takes 2 arguments, an array and an object
//array will contain 2 or more elements, when combined, produce a person's name
//object will contain two keys, "title" and "occupation", and appropriate values
//function should return greeting that uses person's full name, and mentions the perosn's title.

//function greetings(array,object) {

//}

//LS Solution:
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
)