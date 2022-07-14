// https://www.codewars.com/kata/fake-binary/javascript

// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  arr = x.split("");
  return arr.map((item) => (item < 5 ? 0 : 1)).join("");
}

// let arr=[]
// let newArr=[]
console.log(fakeBin("45385593107843568"));

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

function fakeBin(x) {
  return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
}
