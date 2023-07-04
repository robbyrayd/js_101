//write a functon that returns the next to last word in the String passed to it as an argument

function penultimate(string) {
  let array = string.split(" ")
  return array[array.length - 2]
}
console.log(penultimate("Launch School is great!"))