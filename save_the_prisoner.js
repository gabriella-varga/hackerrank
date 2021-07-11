// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
// int n: the number of prisoners
// int m: the number of sweets
// int s: the chair number to begin passing out sweets from

    // let w = 0;
    // if ((s + m)% n == 0) {
    //     w = n - 1;         
    // } else if ((s + m)% n - 1 == 0) {
    //     w = n;
    // } else {
    //     w = (s + m) % n - 1;
    // }  
    return (((s + m - 2) % n) +1);
}
