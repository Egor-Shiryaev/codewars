// codewars.com/kata/523b66342d0c301ae400003b/train/javascript

// Implement a function which multiplies two numbers.

function multiply(a, b) {
  return a * b;
}

let multiply = (a, b) => a * b;

function multiply(a, b) {
  if (typeof a == "number" && typeof b == "number") return a * b;
}
