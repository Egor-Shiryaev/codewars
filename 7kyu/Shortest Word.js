// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let str = "";
  str = s.split(" ");

  let newArr = [];
  newArr = str.map((item) => (item = item.length));

  newArr.sort((a, b) => a - b);

  return newArr[0];
}

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
