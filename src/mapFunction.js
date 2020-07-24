var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Method 1 - Map style

const newNumbers = numbers.map(x => x * 2)

console.log(newNumbers)

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//Method 2 - forEach style

let feNewNumbers = []

numbers.forEach(x => feNewNumbers.push(x * 2))

console.log(feNewNumbers)