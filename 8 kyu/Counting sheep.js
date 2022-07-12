"use strict";

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
let result = [];

function countSheeps(arrayOfSheep) {
  result = arrayOfSheep.filter(function (elem) {
    return elem == true;
  });
  return result.length;
}

console.log(countSheeps(array1));




function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }




  function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }



//   let countSheeps = x => x.filter( s => s ).length;





  function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }



  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function(result, current) {
      if (current) result++;
      return result;
    }, 0);
  }




  function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count)
    return count
  }