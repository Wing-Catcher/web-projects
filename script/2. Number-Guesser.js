let number;
let attempts = document.getElementById("attempts");
let answer = document.getElementById("answer");
let random;
const max = 100;
const min = 1;
let tries = 0;
tries = Number(tries)

// make the first random number
random = Math.round( Math.random() * (max - min + 1)) + min
console.log(`First generated random: ${random}`)

function reset(){
    // make the check button visible again
    document.getElementById("check").style.display = "inline-block"
    number = document.getElementById("guess");
    number.value = 0
    random = Math.round( Math.random() * (max - min + 1)) + min
    console.log(`Button reset generated random: ${random}`)
    tries = 0
    attempts.textContent = "Attempt: 0"
    answer.textContent = "Random Resetted"
}

function guesser(){
    number = document.getElementById("guess").value;
    // make an ifs whether the input is valid or not
    if (isNaN(number) || number > max || number < min){
        answer.textContent = "Invalid input, try again"
    }
    else{
        if (number == random){
            tries++
            // make the check button dissapear or display:none
            document.getElementById("check").style.display = "none"
            answer.textContent = `Correct! the number is ${random}`
            attempts.textContent = `Attempts: ${tries}`
            // Easter egg for the first right guess
            if (tries == 1){
                attempts.textContent = "🌟 Congratulation! First Guess 🌟"
                window.alert("DUDEE FIRST GUESS ?!")
            }
        }
        else if(number < random){
            tries++
            attempts.textContent = `Attempts: ${tries}`
            answer.textContent = `So close! You are ${random - number} steps from the answer.`
        }
        else if(number > random){
            tries++
            attempts.textContent = `Attempts: ${tries}`
            answer.textContent = `So close! You are ${number - random} steps from the answer.`
        }
    }
}