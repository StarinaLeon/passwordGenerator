const passwordInput = document.querySelector('#passwordInput');
const copyButton = document.querySelector('#copyButton');
const generateButton = document.querySelector('#generatePassword');

const checkboxes = document.querySelectorAll('input[type=checkbox]');
const upperCaseCheckbox = document.querySelector('#upperCase');
const lowerCaseCheckbox = document.querySelector('#lowerCase');
const digitsCheckbox = document.querySelector(('#digits'));
const specSymbolsCheckbox = document.querySelector('#specSymbols');

const rangeValue = document.querySelector('#rangeV');

const passwordLengthRange = document.querySelector('#passwordLength');
const minValue = document.querySelector('#minValue').innerHTML = passwordLengthRange.min;
const maxValue = document.querySelector('#maxValue').innerHTML = passwordLengthRange.max;

function check() {
    generateButton.disabled = true;
    checkboxes.forEach(checkbox => {if (checkbox.checked) generateButton.disabled = false});
}

rangeValue.innerHTML = 'Password length: ' + passwordLengthRange.value;

passwordLengthRange.addEventListener('change', (e) => {
    rangeValue.innerHTML = 'Password length:' + e.target.value;
})

checkboxes.forEach(checkbox => checkbox.addEventListener('change', check));

passwordInput.addEventListener('change', (event) => console.log(event.target.value));

copyButton.addEventListener('click', (event) => {
    passwordInput.focus();
    passwordInput.select();
    document.execCommand("copy");
    copyButton.classList.add("button-success");
    copyButton.innerHTML = "Copied";
    setTimeout(() => {
        copyButton.classList.remove('button-success');
        copyButton.innerHTML = 'Copy'
    },2000)
});

generateButton.addEventListener('click', (event) => {
    passwordInput.value = passwordGenerator.generatePassword({
        useUpper: upperCaseCheckbox.checked,
        useLower: lowerCaseCheckbox.checked,
        useDigits: digitsCheckbox.checked,
        useSpecial:specSymbolsCheckbox.checked,
        length: passwordLengthRange.value
    });
});

