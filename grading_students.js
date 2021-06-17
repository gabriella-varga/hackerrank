// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    let arr = [];

    for (let i=0 ; i < grades.length ; i++ ) {
        if ( Math.ceil(grades[i]/5)*5 - grades[i] < 3 && grades[i] >= 38) {
        arr.push(Math.ceil(grades[i]/5)*5);
        } else {
            arr.push(grades[i]);
        }
    }
    return arr;
}
