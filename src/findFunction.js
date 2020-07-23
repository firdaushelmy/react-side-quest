var numbers = [3, 56, 2, 48, 5];

//Find - find the first item that matches from an array.

let findNumber = numbers.find(function (num) {
  return num > 10
})

console.log(findNumber)