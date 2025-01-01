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

// Function to get the human's choice via prompt
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

// Function to play the game
function playGame(){
    let humanScore = 0; 
    let computerScore = 0;
 
    // Function to play a single round
    function playRound(){
        const humanVal = getHumanChoice()
        const computerVal = getComputerChoice()

        // Determine the winner of the round
        if (humanVal == computerVal){
            console.log("Its a DRAW")
        } else if (humanVal == "ROCK" && computerVal == "PAPER" || 
            humanVal == "PAPER" && computerVal == "SCISSOR"||
            humanVal == "SCISSOR" && computerVal == "ROCK")
            {
                computerScore++
                console.log(`Computer Wins, Computer Score:${computerScore}`) 
            } else {
                humanScore++
                console.log(`Player Wins, Player Score:${humanScore}`)
        }
    }

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

// Start the game
playGame()

















