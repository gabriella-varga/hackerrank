// https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
  let turns = Math.floor(p / 2);
  console.log(turns);

  let total = Math.floor(n / 2);
  console.log(total);
  return Math.min(turns, total - turns);
}
