// https://www.hackerrank.com/challenges/library-fine/problem
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let due = 0;
    
    if (y1 == y2) {
        if (m1 == m2) {
            if (d1 <= d2) {
                due = 0;
            } else {
                due = 15 * Math.abs(d2-d1);
            }
        } else if(m1 < m2) {
            due = 0;
        } else {
            due = 500 * Math.abs(m2-m1)
        }
    } else if( y1 < y2) {
        due = 0;
    } else {
        due = 10000;
    }

    return due;
}
