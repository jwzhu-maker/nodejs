
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log("canSum(7, [2, 3]) = ", canSum(7, [2, 3])); // true
console.log("canSum(7, [5, 3, 4, 7]) = ", canSum(7, [5, 3, 4, 7])); // true
console.log("canSum(7, [2, 4]) = ", canSum(7, [2, 4])); // false
console.log("canSum(8, [2, 3, 5]) = ", canSum(8, [2, 3, 5])); // true
console.log("canSum(3000, [7, 14]) = ", canSum(3000, [7, 14])); // false


// implement it by using tabulation
// tabulation
// js array, where the indices will be the arg to fn, and the value at each index will be the return value
const canSum_tab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log("canSum_tab(7, [2, 3]) = ", canSum_tab(7, [2, 3])); // true
console.log("canSum_tab(7, [5, 3, 4, 7]) = ", canSum_tab(7, [5, 3, 4, 7])); // true
console.log("canSum_tab(7, [2, 4]) = ", canSum_tab(7, [2, 4])); // false
console.log("canSum_tab(8, [2, 3, 5]) = ", canSum_tab(8, [2, 3, 5])); // true
console.log("canSum_tab(3000, [7, 14]) = ", canSum_tab(3000, [7, 14])); // false


const canSum_tab2 = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}