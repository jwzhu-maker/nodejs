const bestSum = (targetSum, numbers, memo={}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSum(remainder, numbers, memo);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];
			// if the combination is shorter than the current "shortest", update it
			if (shortestCombination === null || combination.length < shortestCombination.length) {
				shortestCombination = combination;
			}
		}
	}
	
	memo[targetSum] = shortestCombination;
	return shortestCombination;
}


// m = target sum
// n = numbers.length

// Without memorization:
// Brute force
// time: O(n^m * m)
// space: O(m^2)

// With memorization:
// time: O(n * m^2)
// space: O(m^2)

console.log("bestSum(7, [5, 3, 4, 7]) = ", bestSum(7, [5, 3, 4, 7])); // [7]
console.log("bestSum(8, [2, 3, 5]) = ", bestSum(8, [2, 3, 5])); // [3, 5]
console.log("bestSum(8, [1, 4, 5]) = ", bestSum(8, [1, 4, 5])); // [4, 4]
console.log("bestSum(100, [1, 2, 5, 25]) = ", bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]


// implement it by using tabulation
// tabulation
// js array, where the indices will be the arg to fn, and the value at each index will be the return value
const bestSum_tab = (targetSum, numbers) => {
	const table = Array(targetSum + 1).fill(null);
	table[0] = [];

	for (let i = 0; i <= targetSum; i++) {
		if (table[i] !== null) {
			for (let num of numbers) {
				const combination = [...table[i], num];
				// if the combination is shorter than the current "shortest", update it
				if (table[i + num] === null || table[i + num] != undefined && combination.length < table[i + num].length) {
					table[i + num] = combination;
				}
			}
		}
	}
	return table[targetSum];
}

console.log("bestSum_tab(7, [5, 3, 4, 7]) = ", bestSum_tab(7, [5, 3, 4, 7])); // [7]
console.log("bestSum_tab(8, [2, 3, 5]) = ", bestSum_tab(8, [2, 3, 5])); // [3, 5]
console.log("bestSum_tab(8, [1, 4, 5]) = ", bestSum_tab(8, [1, 4, 5])); // [4, 4]
console.log("bestSum_tab(100, [1, 2, 5, 25]) = ", bestSum_tab(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
