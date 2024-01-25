let gameName ="Guess The word";
document.title=gameName;
document.querySelector("h1").innerHTML=gameName;
document.querySelector("footer").innerHTML=`${gameName} &copy; 2024 MedAmeur. All rights reserved.`



// Setting Game options

let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry =1;

function generateInpunts() {
    const inputsContainer = document.querySelector(".inputs");


    for(let i=1; i<= numbersOfTries;i++){
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`)
        tryDiv.innerHTML=`<span>Try ${i}</span>`
        if(i!==1) tryDiv.classList.add("disabled-inputs")
        inputsContainer.appendChild(tryDiv)

        for(let j=1; j<= numbersOfLetters;j++){
            const input = document.createElement("input");
            input.type = "text";
            input.id =`guess-${i}-lettre-${j}`;
            input.setAttribute("maxLength","1");
            tryDiv.appendChild(input)
        }
        
    }
    inputsContainer.children[0].children[1].focus();

}
window.onload =function(){
    generateInpunts();
}
