// https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(steps, path) {
    let valleyCount = 0;
    let level = 0;
    
    let arrayOfPath = path.split("");
    arrayOfPath.forEach(step => {
       if (step == 'U'){
           level++;
       } else {
           if (level == 0) {
               valleyCount++;
           }
           level--;
       }
    });

    return valleyCount;
}
