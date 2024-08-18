const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
const symbolChars = "`~!@#$%^&*()_+{};:,<.>";
const numberChars = "1234567890";

function generatePassword() {
    let useNumber = document.getElementById("number");
    let useSymbol = document.getElementById("symbol");
    let useUppercase = document.getElementById("uppercase");
    let useLowercase = document.getElementById("lowercase");
    let length = parseInt(document.getElementById("length").value);

    let allowedChars = "";
    let password = "";

    if (useNumber.checked) allowedChars += numberChars;
    if (useSymbol.checked) allowedChars += symbolChars;
    if (useUppercase.checked) allowedChars += uppercaseChars;
    if (useLowercase.checked) allowedChars += lowercaseChars;

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random];
    }

    if (allowedChars.length === 0){
        return "You're Joking Right?"
    }
    else{
        return password
    }
}

function check() {
    console.log(`From Check: ${generatePassword()}`);
}

function generate(){
    document.getElementById("result").value = generatePassword()
    console.log(`From Generate: ${document.getElementById("result").value}`);
}
