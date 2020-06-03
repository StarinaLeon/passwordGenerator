window.passwordGenerator = (function() {
	const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const lowerCaseLetters = ALPHABET.toLowerCase().split('');
	const upperCaseLetters = ALPHABET.split('')
	const symbols = '~!@#$%^&*()_+=-?/'.split('');

	return {
		generatePassword({ useUpper = true, useLower = true, useDigits = false, useSpecial = false, length = 10 } = {}) {
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
			if (useSpecial) {
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
