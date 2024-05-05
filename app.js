const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbolss = "!@#$%^&*()_+{}:<>?,.;'";

const lengthE1 = document.getElementById("length");
const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordE1 = document.getElementById("password");

generateBtn.addEventListener("click", function () {

    const length = lengthE1.value;
    let characters = "";
    let password = "";

    if (lowercaseE1.checked) {
        characters += lowercaseLetters;
    }
    if (uppercaseE1.checked) {
        characters += uppercaseLetters;
    }
    if (numbersE1.checked) {
        characters += numbers;
    }
    if (symbolsE1.checked) {
        characters += symbolss;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    passwordE1.value = password;
});



