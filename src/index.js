var numbers = [3, 56, 2, 48, 5];

//Filter - Create a new array by keeping the items that return true.

// method 1 - filter
const newNumbers = numbers.filter(function (num) {
  return num < 10
})

console.log(newNumbers)

// method 2 - forEach

const feNewNumbers = []

numbers.forEach(function (num) {
  if (num < 10) {
    feNewNumbers.push(num)
  }
})

console.log(feNewNumbers)
//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
