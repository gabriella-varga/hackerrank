//https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
    let rows = Math.floor(Math.sqrt(s.length));
    let columns = Math.ceil(Math.sqrt(s.length));

    console.log(rows);
    console.log(columns);

    if ((rows * columns) <= s.length) {
        console.log(' row ++ needed');
        rows++;
    }

    let output = '';
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++ ) {
            let length = i + j * columns;
            if (length < s.length) {
                output += s[length];
            }
        }
        output+=(' ');
    }

    return output;

}
