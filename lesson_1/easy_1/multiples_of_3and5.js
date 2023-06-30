//write function that computes the sum of al numbers between 1 and some number, that are multiples of 3 or 5

function multisum(number) {
  let sum = 0
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}


console.log(multisum(3))
console.log(multisum(5))
console.log(multisum(10))