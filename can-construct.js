const canConstruct = (target, wordBank, memo={}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;
	
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}
	
	memo[target] = false;
	return false;
}

console.log("canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) = ", canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log("canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) = ", canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log("canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) = ", canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true


// implement it by using tabulation
// tabulation
// js array, where the indices will be the arg to fn, and the value at each index will be the return value
const canConstruct_tab = (target, wordBank) => {
	const table = Array(target.length + 1).fill(false);
	table[0] = true;
	for (let i = 0; i <= target.length; i++) {
		if (table[i] === true) {
			for (let word of wordBank) {
				// if the word matches the characters starting at position i
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true;
				}
			}
		}
	}
	return table[target.length];
}

console.log("canConstruct_tab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) = ", canConstruct_tab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log("canConstruct_tab('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) = ", canConstruct_tab('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log("canConstruct_tab('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) = ", canConstruct_tab('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
