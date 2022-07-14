// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
// write a simple helper function to capitalize a string (that contains a single word)
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("sword"));
