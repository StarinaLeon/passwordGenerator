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

generateButton.addEventListener('click', (event) => {
    passwordInput.value = window.passwordGenerator.generatePassword({
        useUpper: upperCaseCheckbox.checked,
        useLower: lowerCaseCheckbox.checked,
        useDigits: digitsCheckbox.checked,
        useSpecial:specSymbolsCheckbox.checked,
        length: passwordLengthRange.value
    });
});

