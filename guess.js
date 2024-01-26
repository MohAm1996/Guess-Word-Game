let gameName = "Guess The word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} &copy; 2024 MedAmeur. All rights reserved.`



// Setting Game options

let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry = 1;

//Manage words
let wordToguess = "";
const words = ["banana", "purple", "guitar", "sunset", "rocket", "window", "travel", "jacket", "camera", "flower"];
wordToguess= words[Math.floor(Math.random()*words.length)].toLowerCase();
console.log(wordToguess)

function generateInpunts() {
    const inputsContainer = document.querySelector(".inputs");


    for (let i = 1; i <= numbersOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`)
        tryDiv.innerHTML = `<span>Try ${i}</span>`
        if (i !== 1) tryDiv.classList.add("disabled-inputs")
        inputsContainer.appendChild(tryDiv)

        for (let j = 1; j <= numbersOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxLength", "1");
            tryDiv.appendChild(input)
        }

    }
    console.log(inputsContainer)
    inputsContainer.children[0].children[1].focus();

    //Disable All inputs except First one
    const inputInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputInDisabledDiv.forEach((input) => { input.disabled = true })

    const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        })

        input.addEventListener("keydown", function (event) {
            const currentIndex = Array.from(inputs).indexOf(event.target)
            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1
                if (nextInput < inputs.length) inputs[nextInput].focus()
            } else if (event.key === "ArrowLeft") {
                const previousInput = currentIndex - 1
                if(previousInput >=0) inputs[previousInput].focus()
            }
        })
    })
}

//Game Logic 
const guessButton = document.querySelector(".check");
guessButton.addEventListener("click",handleGuesses)

function handleGuesses(){
    let successeGuess = true;
    for (let i = 1; i <= numbersOfLetters;i++){
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        const letter=inputField.value.toLowerCase();
        const actualLetter = wordToguess[i-1];

        if(letter=== actualLetter){
            inputField.classList.add("yes-in-place")
        } else if (wordToguess.includes(letter)){
            inputField.classList.add("not-in-place")
            successeGuess = false
        } else {
            inputField.classList.add("no")
            successeGuess = false
        }
    }
}


window.onload = function () {
    generateInpunts();
}
