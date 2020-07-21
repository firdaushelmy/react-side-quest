var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Method 1 - Map style

function double(x) {
  return x * 2
}
const newNumbers = numbers.map(double)

console.log(newNumbers)

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//Method 2 - forEach style

let feNewNumbers = []

function feDouble(x) {
  feNewNumbers.push(x * 2)
}

numbers.forEach(feDouble)

console.log(feNewNumbers)