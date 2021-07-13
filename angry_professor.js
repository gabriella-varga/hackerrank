// https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(k, a) {
    let count = 0;
    a.forEach(student => {
        if (student <= 0){
            count++;
        }
    })

    return count >= k ? "NO" : "YES"
}
