const INT_MAX = 2147483647
const INT_MIN = -2147483648

var reverse = function (x) {

	if (x.isNaN === true)
		return (0)

	let arr = []
	let index = 0
	let signChecker = false

	if (x < index) {
		signChecker = true
		x = x * -1
	}

	x = x.toString()
	index = x.length - 1

	while (index >= 0) {
		arr.push(x[index--])
	}
	signChecker === true ? arr = Number(arr.join('')) * -1 : arr = Number(arr.join(''))
	if (arr > INT_MAX || x < INT_MIN)
		return (0)
	return (arr)
};

console.log(reverse(2147483647))

