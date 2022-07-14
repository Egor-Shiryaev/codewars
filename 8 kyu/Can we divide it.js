// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript
// function isDivideBy(number, a, b) {
//   return (Number.isInteger(number / a) && Number.isInteger(number / b))
//     ? true
//     : false;
// }

// console.log(isDivideBy(-12, 2, -5));

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

console.log(isDivideBy(-12, 2, -5));
