// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let sizeArr = arr.length;
    let negative = arr.filter(n => n < 0).length / sizeArr;
    let positive = arr.filter(n => n > 0).length / sizeArr;
    let zero = arr.filter(n => n == 0).length / sizeArr;
    
    return console.log(positive.toFixed(6) + '\n' + 
                        negative.toFixed(6) + '\n' + 
                        zero.toFixed(6));
}
