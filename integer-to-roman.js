var intToRoman = function (num) {

	const symbolsSign = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
	const symbolsNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	let total = []

	for (let index = 0; index < symbolsSign.length; index++) {
		while (num >= symbolsNum[index]) {
			total.push(symbolsSign[index])
			num = num - symbolsNum[index]
		}
	}
	return (total.join(''))
}
