// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));

const removeChar = (str) => str.slice(1, -1);
