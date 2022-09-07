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





