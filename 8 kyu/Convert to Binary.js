// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n) {
  return +n.toString(2);
}

console.log(toBinary(2));
console.log(toBinary(43));
console.log(typeof toBinary(1));

let toBinary = (n) => +n.toString(2);
