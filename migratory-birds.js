// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    let spotted = [0, 0, 0, 0, 0, 0];
    
    for (let i=0; i< arr.length; i++) {
        spotted[arr[i]]++;
    }

    return spotted.indexOf(Math.max(...spotted));
}
