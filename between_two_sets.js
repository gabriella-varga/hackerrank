// https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {

    let lcm = a[0];
    let gcd_n = b[0];
    if (a.length > 1) {
        for( let i = 0; i <a.length ; i++){
            lcm = (lcm * a[i]) / gcd(lcm, a[i]) ;
        }
    }
    if( b.length > 1){
        for( let i = 0; i < b.length ; i++){
            gcd_n = gcd(gcd_n, b[i]);
        }
    }
    let count = 0;
    
    for( let i = lcm; i < gcd_n+1; i+=lcm ){
        if (gcd(i, gcd_n) == i){
            count++;
        }
    }
    return count;
    
    function gcd(k, l) {
        // Everything divides 0
        if (k == 0 && l == 0){
           return 0; 
        }
            
        if (k == 0) {
            return l;
        }
            
        if (l == 0)
            return k;
    
        // Base case
        if (k == l) {
            return k;
        }
            
        // k is greater
        if (k > l) {
            return gcd(k - l, l);
        }
        return gcd(k, l - k);
    }

}
