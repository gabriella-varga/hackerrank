//https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    // array in ascading order, deal with first and last item
    arr = arr.sort();
    
    let max = arr.slice(1, arr.length);
    let min = arr.slice(0, arr.length-1);
    
    let sumArr = a => a.reduce((total, n) => total + n, 0);
    
    let arrMax = sumArr(max);
    let arrMin = sumArr(min);
    
    console.log(arrMin + ' ' + arrMax);

}
