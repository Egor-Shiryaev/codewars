// https://www.codewars.com/kata/number-of-decimal-digits

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

let digits = (n) => n.toString().length;

console.log(digits(5));
console.log(digits(12345));
console.log(digits(9876543210));
