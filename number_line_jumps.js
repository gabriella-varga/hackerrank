// https://www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {
    let res = '';
    let distance1 = x1, distance2 = x2;
    if (v2 >= v1) {
        res = "NO";
    } else if( v1 > v2 ) {
        for (let i =1; i > 0; i++){
            distance1 = x1 + ( i *  v1);
            distance2 = x2 + ( i *  v2);
            
            if( distance1 == distance2){
                res = "YES";
                break;
            } 
            if( distance1 > distance2) {
                res = "NO";
                break;
            }
        }
    }

    return res;
}
