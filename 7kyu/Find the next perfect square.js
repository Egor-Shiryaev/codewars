//www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let num = Math.sqrt(sq);
  if (Number.isInteger(num)) {
    return Math.pow(num + 1, 2);
  } else {
    return -1;
  }
}

console.log(findNextSquare(122));

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
