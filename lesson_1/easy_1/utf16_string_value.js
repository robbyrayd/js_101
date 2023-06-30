//function that determines and returns UTF-16 string value of a string passed in as an arguement
//UTF-16 string value is the sum of the UTF-16 values of every character in string.

function utf16Value(string) {
  let stringArray = string.split("")
  let sum = 0
  for (let i = 0; i < stringArray.length; i++) {
    sum += stringArray.charCodeAt(stringArray[i])
  }
}

console.log(utf16Value('a'))