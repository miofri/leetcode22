var longestCommonPrefix = function (strs) {
	let arrCounter = 0 //iterating over items in the array
	let letterCounter = 0 //iterating over letters of item
	let arr = []
	let currWord

	while (arrCounter < strs[0].length) {
		currWord = strs[0]
		while (letterCounter < strs.length) {
			if (strs[letterCounter][arrCounter] === currWord[arrCounter])
				letterCounter++
			else
				break
		}
		if (letterCounter === strs.length) {
			arr.push(currWord[arrCounter])
		}
		else
			break
		arrCounter++
		letterCounter = 0
	}
	if (arr.length === 0)
		return ('')
	return arr.join('')
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))

