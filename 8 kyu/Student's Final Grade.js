//www.codewars.com/kata/students-final-grade

https: function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else return 0;
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
//   75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

const finalGrade = (exam, projects) => {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
};

const finalGrade = (e, p) =>
  e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0;
