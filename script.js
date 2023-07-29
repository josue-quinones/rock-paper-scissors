const choices = ["ROCK","PAPER","SCISSORS"];
const winner = {
    "ROCK":"SCISSORS",
    "SCISSORS":"PAPER",
    "PAPER":"ROCK"
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(pS, cS) {
    let result = 0;
    if (winner[pS] == cS) {
        result = 1;
    } else if (winner[cS] == pS) {
        result = -1;
    } else {
        result = 0;
    }
    return result;  
}

function game() {
    let playTimes = 0;
    let score = 0;
    while(playTimes < 5) {
        const playerSelection = prompt("Input a choice between rock,paper and scissors");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);
        if (result == 1) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (result == -1)  {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else {
            console.log("It's A Tie! Both players chose " + computerSelection);
        }
        score += result;
        playTimes++;
    }
    if (score >= 1) {
        console.log("Congratulations! You beat the computer!");
    } else if (score == 0) {
        console.log("Well, you tied the computer. Play again?");
    } else {
        console.log("You lost! The computer beat you.");
    }
}

// game();
