// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// Given a year, return the century it is in.
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
