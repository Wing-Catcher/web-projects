const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
let firstDigit = document.getElementById("firstDigit");
let secondDigit = document.getElementById("secondDigit");
let hasil;
let result = document.getElementById("out");

// add functions
function add(){
    firstDigit = Number(document.getElementById("firstDigit").value);
    secondDigit = Number(document.getElementById("secondDigit").value);
    hasil = firstDigit + secondDigit;
    console.log(hasil)
    result.textContent = `The Result = ${hasil}`
}

// substract function
function substract(){
    firstDigit = Number(document.getElementById("firstDigit").value);
    secondDigit = Number(document.getElementById("secondDigit").value);
    hasil = firstDigit - secondDigit;
    console.log(hasil);
    result.textContent = `The Result = ${hasil}`
}

// divide function
function dividedby(){
    firstDigit = Number(document.getElementById("firstDigit").value);
    secondDigit = Number(document.getElementById("secondDigit").value);
    hasil = firstDigit / secondDigit;
    if (hasil == Infinity){
        result.textContent = "Cannot divide by Zero."
    }
    else if(isNaN(hasil)){
        result.textContent = "Error"
    }
    else{
        console.log(hasil);
        result.textContent = `The Result = ${hasil}`  
    }
}

// multiply function
function multipliedby(){
    firstDigit = Number(document.getElementById("firstDigit").value);
    secondDigit = Number(document.getElementById("secondDigit").value);
    hasil = firstDigit * secondDigit;
    console.log(hasil);
    result.textContent = `The Result = ${hasil}`
}

//reset function
function reset(){
    result.textContent = "Result"
    firstDigit.value = 0
    secondDigit.value = 0
}