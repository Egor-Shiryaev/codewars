// https://www.codewars.com/kata/isograms

// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
// Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой.
// Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// function isIsogram(word) {
//   return !/(.).*\1|\d/i.test(word);
// }

//testing
console.log(isIsogram("to be or not to be")); //should return false
console.log(isIsogram("moOse")); //should return false
console.log(isIsogram("wasdfgerty")); //should return true
console.log(isIsogram()); //should return true

function isIsogram(str) {
  if (!str) {
    return true;
  }
  str = str.toLowerCase();
  let str2 = str.slice();

  for (let i = 0; i <= str.length; i++) {
    for  
}
}
//    return str.split(" ")
//    return str.join()
//    return str.replace(/\s/g, "");

// удалить пробел ы привести к одной строке,
// сделать копию массива.
// в цикле сравнить два масссива
// вернуть true если есть совпадения
