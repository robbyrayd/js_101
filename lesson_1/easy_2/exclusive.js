//write a function named xor that takes two arguments
//return true if exactly one of it arguments is truthy, false otherwise.

function xor (argument1, argument2) {
  if ((argument1 && !argument2) || (argument2 && !argument1)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true