var myAtoi = function (s) {
	const INT_MAX = 2147483647
	const INT_MIN = -2147483648

	let i = 0
	let whiteSpace = /\s/

	while (whiteSpace.test(s[i]) === true) {
		i++
	}

	if ((/-|\+|[0-9]/).test(s[i]) === false) {
		return (0)
	}
	else if ((s[i] === '-' || s[i] === '+') && /[0-9]/.test(s[i + 1]) === false) {
		return (0)
	}

	s = s.slice(i)

	let reg = /((^-)?[0-9])+/g
	let result = s.match(reg)

	if (result[0] < -2147483648)
		result[0] = -2147483648
	else if (result[0] > 2147483647)
		result[0] = 2147483647
	else if (result[0] - 0 === 0)
		return (0)

	return (result[0])
};

console.log('myAtoi:', myAtoi("00000-42a1234"))
console.log('myAtoi:', myAtoi('+-123123'))
console.log('myAtoi:', myAtoi('13123'))
console.log('myAtoi:', myAtoi("words and 987"))
console.log('myAtoi:', myAtoi("-91283472332"))
console.log('myAtoi:', myAtoi(""))
console.log('myAtoi:', myAtoi(".1"))
console.log('myAtoi:', myAtoi("+1"))
console.log('myAtoi:', myAtoi("     -42"))







