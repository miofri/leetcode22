var isPalindrome = function (x) {
	let xCopy = x
	let mod = 0
	let reverse = 0

	if (x < 0) {
		return false
	}

	while (x !== 0) {
		reverse = reverse * 10
		mod = x % 10
		x = (x - mod) / 10
		reverse = (reverse + mod)
	}
	return reverse === xCopy ? true : false
};
