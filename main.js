const passwordBox = document.getElementById('password');
const lenght = 12;
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const allChars=upperCaseChars+lowerCaseChars+symbolChars+numberChars;

function createPassword() {
    let password = '';
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    while(lenght>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}

document.querySelector('button').addEventListener('click',createPassword);
document.querySelector('.display img').addEventListener('click',copyPassword);