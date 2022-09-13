var isValid = function (string) {
	let s = [...string]

	const keyz = {
		"(": ")",
		"[": "]",
		"{": "}",
	}

	let parenthesisCheck = true
	let len = s.length

	if (s.length % 2 !== 0)
		return false
	else if (s === "")
		return false

	let tmp = []

	for (let i = 0; i < s.length; i++) {
		if (s[i] in keyz) {
			tmp.push(s[i])
		}
		else {
			let popped = tmp.pop()

			if (keyz[popped] !== s[i])
				return false
		}
	}
	if (tmp.length !== 0)
		return false

	return parenthesisCheck
}

// tests
// s = "(){}}{"
// console.log('should be false', isValid(s), '\n')
// s = "{[]}"
// console.log('should be true', isValid(s), '\n')
// s = "()[]{}"
// console.log('should be true', isValid(s), '\n')
// s = "{()[]{}}"
// console.log('should be true', isValid(s), '\n')
// s = ")(){}}{"
// console.log('should be false', isValid(s), '\n')
// s = "(([]){})"
// console.log('should be true', isValid(s), '\n')
// s = "{{{}{}}}"
// console.log('should be true', isValid(s), '\n')
// s = "{{{(}{)}}}"
// console.log('should be false', isValid(s), '\n')
// s = "(("
// console.log('should be false', isValid(s), '\n')
