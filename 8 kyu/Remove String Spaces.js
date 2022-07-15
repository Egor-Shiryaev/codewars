// https://www.codewars.com/kata/remove-string-spaces

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
// console.log (noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))

function noSpace(x) {
  return x.replace(/\s/g, "");
}

const noSpace = (x) => x.replace(/ /g, "");
