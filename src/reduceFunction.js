var numbers = [3, 56, 2, 48, 5];

//Reduce - Accumulate a value by doing something to each item in an array.

// method 1 - Reduce method. the name reduce means reducing an array to a single value.

const reduceNum = numbers.reduce((accumulator, currentNumber) =>
  accumulator + currentNumber
)

console.log(reduceNum)

// method 2 - forEach
let newNumber = 0;

numbers.forEach(currentNumber =>
  newNumber += currentNumber
)

console.log(newNumber)
