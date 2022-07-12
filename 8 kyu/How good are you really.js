"use strict";
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Best Practices


  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }


  
  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
    
    return average > yourPoints ? false : true
  }
