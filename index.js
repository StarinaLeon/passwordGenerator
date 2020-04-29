const passwordInput = document.querySelector('#passwordInput');
const copyButton = document.querySelector('#copyButton');
const generateButton = document.querySelector(('#generatePassword'));

const upperCaseCheckbox = document.querySelector(('#upperCase'));
const lowerCaseCheckbox = document.querySelector(('#lowerCase'));
const digitsCheckbox = document.querySelector(('#digits'));
const specSymbolsCheckbox = document.querySelector(('#specSymbols'));

const passwordLengthRange = document.querySelector('#passwordLength');

passwordInput.addEventListener('change', (event) => console.log(event.target.value));

copyButton.addEventListener('click', (event) => {
    passwordInput.focus();
    passwordInput.select();
    document.execCommand("copy");
})

const passwordGenerator = (function () {

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

generateButton.addEventListener('click', (event) => {
    passwordInput.value = passwordGenerator.generatePassword({
        useUpper: upperCaseCheckbox.checked,
        useLower: lowerCaseCheckbox.checked,
        useDigits: digitsCheckbox.checked,
        useSpecial:specSymbolsCheckbox.checked,
        length: passwordLengthRange.value
    });
});

