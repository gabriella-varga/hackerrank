// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    let numbers = [];
    
    for (i; i <= j ;i++) {
        numbers.push(i);
    }
    const isBeautifulDay = (number, k) => {
        let diff = Math.abs(number - reversedNum(number));
        console.log(diff + ' ' + number + ' ' + reversedNum(number));
        return diff % k == 0;
    };
    
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

    let beautifulNumbersCount = 0;
    
    console.log(numbers);
    
    numbers.forEach(n => {
        console.log('is beautiful?'  + isBeautifulDay(n));
        if (isBeautifulDay(n, k)) {
            console.log( n + ' ' + isBeautifulDay(n));
            beautifulNumbersCount++;
        }
    });
    
    console.log(beautifulNumbersCount);
    
    return beautifulNumbersCount;
}
