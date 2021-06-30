// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let solution = "";
    
    if (Math.abs(z-y) < Math.abs(z-x)) {
        solution = "Cat B";
    } else if (Math.abs(z-y) > Math.abs(z-x)) {
        solution = "Cat A";
    } else {
        solution = "Mouse C";
    }

    return solution;
}
