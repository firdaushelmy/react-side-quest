var numbers = [3, 56, 2, 48, 5];

//Filter - Create a new array by keeping the items that return true.

//Method 1 - filter style
const newNumbers = numbers.filter(num =>
  num < 10
)

console.log(newNumbers)

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//Method 2 - forEach style

const feNewNumbers = []

numbers.forEach(num => {
  if (num < 10) {
    feNewNumbers.push(num)
  }
})

console.log(feNewNumbers)