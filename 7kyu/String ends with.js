// https://www.codewars.com/kata/string-ends-with
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

let solution = (str, ending) => str.endsWith(ending);

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
