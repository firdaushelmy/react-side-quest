var numbers = [3, 56, 2, 48, 5];

//FindIndex - find the index of the first item that matches.

let findIndexNumber = numbers.findIndex(function (num) {
  return num > 10
})

console.log(findIndexNumber)
