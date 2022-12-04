const howSum = (targetSum, numbers, memo={}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[targetSum] = [...remainderResult, num];
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return null;
}

console.log("howSum(7, [2, 3]) = ", howSum(7, [2, 3])); // [3, 2, 2]
console.log("howSum(7, [5, 3, 4, 7]) = ", howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log("howSum(7, [2, 4]) = ", howSum(7, [2, 4])); // null
console.log("howSum(8, [2, 3, 5]) = ", howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log("howSum(300, [7, 14, 3]) = ", howSum(300, [7, 14, 3])); // null

// implement it by using tabulation
// tabulation
// js array, where the indices will be the arg to fn, and the value at each index will be the return value
const howSum_tab = (targetSum, numbers) => {
	const table = Array(targetSum + 1).fill(null);
	table[0] = [];
	for (let i = 0; i <= targetSum; i++) {
		if (table[i] !== null) {
			for (let num of numbers) {
				table[i + num] = [...table[i], num];
			}
		}
	}
	return table[targetSum];
}

console.log("howSum_tab(7, [2, 3]) = ", howSum_tab(7, [2, 3])); // [3, 2, 2]
console.log("howSum_tab(7, [5, 3, 4, 7]) = ", howSum_tab(7, [5, 3, 4, 7])); // [4, 3]
console.log("howSum_tab(7, [2, 4]) = ", howSum_tab(7, [2, 4])); // null
console.log("howSum_tab(8, [2, 3, 5]) = ", howSum_tab(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log("howSum_tab(300, [7, 14, 3]) = ", howSum_tab(300, [7, 14, 3])); // null

