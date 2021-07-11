// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    let s = BigInt(1);
    while ( n != 1) {
        s = BigInt(s) * BigInt(n);
        n--;
    }

    console.log(s.toString(10));
}
