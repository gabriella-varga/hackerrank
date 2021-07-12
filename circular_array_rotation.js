// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
    while (k >= 1) {
        let last = a.pop();
        a.unshift(last);
        k--;
    }
    
    let atQueryPlace = [];
    queries.forEach(query => atQueryPlace.push(a[query]));

    return atQueryPlace;
}
