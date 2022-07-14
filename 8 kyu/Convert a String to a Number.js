// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number

const stringToNumber = function (str) {
  // put your code here
  return parseInt(str);
};

console.log(stringToNumber("1405"));
console.log(typeof stringToNumber("1405"));

var stringToNumber = function (str) {
  // put your code here
  return Number(str);
};

var stringToNumber = function (str) {
  return +str;
};
