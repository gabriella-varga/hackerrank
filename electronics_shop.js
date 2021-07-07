// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    let possibleTotal = [];
    let spend = 0;
    let keayboard = keyboards.length;
    let drive = drives.length;
    
    for (let i = 0; i < keayboard ; i++) {
        for (let j = 0; j < drive ; j++ ) {
            let total = keyboards[i] + drives[j];
             if (total <= b ) {
                 possibleTotal.push(total);
             }
        }
    }

    if (possibleTotal.length == 0) {
        spend = -1;
    } else {
        possibleTotal.forEach(total => {
           if (spend < total) {
               spend = total;
           } 
        });
    }
    return spend;
}
