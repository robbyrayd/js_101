//use multiply() function from "multiplying two numbers" problem
//write a function that computes square of its argument

function multiply(num1, num2) {
  return num1 * num2
}
function square(num) {
  return multiply(num,num)
}
console.log(square(5) === 25)