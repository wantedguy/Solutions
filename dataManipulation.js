const readline = require("readline-sync");
console.log("Enter the number of elements:");
let n = Number(readline.question());
console.log("Please enter the array elements in seperate lines:");
let number = [];
for (let i = 0; i < n; i++) {
  number.push(Number(readline.question()));
}

let sum = number.reduce((x, y) => {
  return x + y;
}, 0);
console.log("Sum of array: ", sum);
