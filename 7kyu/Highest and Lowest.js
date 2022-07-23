// https://www.codewars.com/kata/highest-and-lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
"use strict";

function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  return Math.max(...arr) + " " + Math.min(...arr);
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
//
//
//
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max(...numbers) + " " + Math.min(...numbers);
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// console.log(arr);WS
