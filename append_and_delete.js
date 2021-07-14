// https://www.hackerrank.com/challenges/append-and-delete/problem
function appendAndDelete(s, t, k) {
    // if there are more convert options than needed:
    if ( k >= (s.length + t.length)) {
        return "Yes";
    }
    
    let minChange = Math.min(s.length, t.length);
    let match = 0;
    for ( let i= 0; i < minChange; i++) {
        if(s[i] == t[i]) {
            match++;
        } else {
            break;
        }
    }

    let deleteNeeded = t.length - match;
    let appendNeeded = s.length - match;
    let remainer = k - (deleteNeeded + appendNeeded);
    
    return (remainer >= 0 && remainer % 2 == 0) ? "Yes" : "No";
}
