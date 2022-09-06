/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let spreadStr = [...s]
	let maxLen = Number.MIN_SAFE_INTEGER
	let subStr = []

	if (spreadStr.length === 0 || s === "") {
		return 0
	}

	for (let index = 0; index < spreadStr.length; index++) {

		if (subStr.includes(spreadStr[index])) {
			let ind = subStr.indexOf(spreadStr[index])
			subStr = subStr.slice(ind + 1)
		}
		subStr.push(spreadStr[index])
		if (subStr.length > maxLen) {
			maxLen = subStr.length
		}
	}
	return (maxLen)
};
