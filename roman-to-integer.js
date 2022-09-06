var romanToInt = function (s) {
	const symbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}

	const specialSymbols = {
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	}

	let total = 0

	for (let index = 0; index < s.length; index++) {
		let sym = s[index]

		if (sym + s[index + 1] in specialSymbols) {
			spSym = sym + s[index + 1]
			total = total + specialSymbols[spSym]
			index++
		}
		else {
			total = total + symbols[sym]
		}
	}
	return (total)
}
