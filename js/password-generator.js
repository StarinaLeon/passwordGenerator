window.passwordGenerator = (function () {
	const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	const symbols = ['~', '!', '@', '#', '$', '%','^', '&', '*', '(', ')', '_', '+', '=', '-', '?', '/', '|'];



	return {
		generatePassword ({useUpper = true, useLower = true, useDigits = false, useSpecial = false, length = 10} = {}) {
			let arr = [];
			if (useUpper) {
				arr = arr.concat(upperCaseLetters)
			}
			if (useLower) {
				arr = arr.concat(lowerCaseLetters)
			}
			if (useDigits) {
				arr = arr.concat(digits)
			}
			if(useSpecial) {
				arr = arr.concat(symbols)
			}

			let password = '';
			for (let i = 0; i < length; i++) {
				password += arr.join('').charAt((Math.floor(Math.random() * arr.length)))
			}
			console.log(password);
			return password;
		}
	}
})();
