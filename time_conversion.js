// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    // store AM and PM
    let AMPM = s.slice(-2);
    
    // slice up at delimeters
    let sArray = s.split(/[:\D]+/);
    sArray.pop();

    if (AMPM === 'AM') {
        if (sArray[0] === '12') {
        sArray[0] = '00';
        }
    } else {
        if (sArray[0] !== '12') {
            // PM, add 12
            sArray[0] = parseInt(sArray[0]) + 12;
        }
    }
    return sArray.join(':');
}
