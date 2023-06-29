//leap years occur in every year that is divisible by 4, unless the year is also divisible by 100

function gregorian(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function julian(year) {
  if (year % 4 === 0) {
    return true
  } else {
    return false
  }
}

function isLeapYear(year) {
  if (year >= 1752) {
    return gregorian()
  } else {
    return julian(year)
  }
}


console.log(isLeapYear(1700))
console.log(isLeapYear(1900))
console.log(isLeapYear(1752))