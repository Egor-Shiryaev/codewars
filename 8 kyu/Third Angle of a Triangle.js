// https://www.codewars.com/kata/third-angle-of-a-triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// FUNDAMENTALS

function otherAngle(a, b) {
  return 180 - a - b;
}
// \\
// \\
// \\
// \\

const otherAngle = (a, b) => 180 - a - b;
