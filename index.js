const buttons = document.querySelectorAll("button")
const humScore = document.querySelector(".human-score")
const compScore = document.querySelector(".computer-score")


let humanScore = 0;
let computerScore = 0;


// This is to get human choice using Prompt
function getHumanChoice(){
    let humanVal = prompt("Type your input here")
    const UppCaseVal = humanVal.toUpperCase()
    // Validate the input and ensure it is one of the allowed choices
    if (UppCaseVal == "ROCK" || UppCaseVal == "PAPER" || UppCaseVal == "SCISSOR" ) {
        return UppCaseVal
    }
    else{
        alert("Please enter a valid input")
        return getHumanChoice()
    }
}




// Function to get the computer's choice randomly
function getComputerChoice(){
    let compVal = Math.random()
    let ans;
    // Determine the choice based on the random value
    if (compVal < 0.3){
        ans = "ROCK"
    }
    else if(compVal > 0.3 && compVal < 0.6){ 
        ans = "PAPER"
    }
    else {
        ans = "SCISSOR"
    }
    return ans
}

function playRound(humVal){

        const humanValue = humVal
        const computerValue = getComputerChoice()

        // Determine the winner of the round
        if (humanValue == computerValue){
            alert("It's a draw")
        } else if (humanValue == "ROCK" && computerValue == "PAPER" || 
            humanValue == "PAPER" && computerValue == "SCISSOR"||
            humanValue == "SCISSOR" && computerValue == "ROCK")
            {
                computerScore++;
                compScore.textContent = `Computer Score: ${computerScore}`
            } else {
                humanScore++;
                humScore.textContent = `Human Score: ${humanScore}`
                

        }
        
}


buttons.forEach(function(button) {
    button.addEventListener('click', function (e) {
        let humVal = e.target.textContent
        playRound(humVal)
    })

})

