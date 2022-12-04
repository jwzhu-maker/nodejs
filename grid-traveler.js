
maxDepth = 0;

const gridTraveler = (m, n, memo = {}, depth = 0) => {
  const key = m + "," + n;
  depth += 1;
  if (depth > maxDepth) {
    maxDepth = depth;
  }

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo, depth) + gridTraveler(m, n - 1, memo, depth);
  return memo[key];
};

console.log("gridTraveler(1, 1) = ", gridTraveler(1, 1));  // 1
console.log("maxDepth = ", maxDepth, "\n");

console.log("gridTraveler(2, 3) = ", gridTraveler(2, 3));  // 3
console.log("maxDepth = ", maxDepth, "\n");

console.log("gridTraveler(3, 2) = ", gridTraveler(3, 2));  // 3
console.log("maxDepth = ", maxDepth,  "\n");

console.log("gridTraveler(3, 3) = ", gridTraveler(3, 3));  // 6 
console.log("maxDepth = ", maxDepth, "\n");


console.log("gridTraveler(18, 18) = ", gridTraveler(18, 18)); // 2333606220
console.log("maxDepth = ", maxDepth, "\n");


// console.log(gridTraveler(200, 2000)); 

// Time Complexity: O(m*n)
// Space Complexity: O(m+n)


// implement it by using tabulation
// tabulation
// js array, where the indices will be the arg to fn, and the value at each index will be the return value
const gridTraveler_tab = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  return table[m][n];
}

console.log("gridTraveler_tab(1, 1) = ", gridTraveler_tab(1, 1));  // 1
console.log("gridTraveler_tab(2, 3) = ", gridTraveler_tab(2, 3));  // 3
console.log("gridTraveler_tab(3, 2) = ", gridTraveler_tab(3, 2));  // 3
console.log("gridTraveler_tab(3, 3) = ", gridTraveler_tab(3, 3));  // 6
console.log("gridTraveler_tab(18, 18) = ", gridTraveler_tab(18, 18)); // 2333606220
