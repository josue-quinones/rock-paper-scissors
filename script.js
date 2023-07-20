choices = ["ROCK","PAPER","SCISSORS"];
winner = {
    "ROCK":"SCISSORS",
    "SCISSORS":"PAPER",
    "PAPER":"ROCK"
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getResult(player,computer) {
    let result = 0;
    if (winner[player] == computer) {
        result = 1;
    } else if (winner[computer] == player) {
        result = -1;
    } else {
        result = 0;
    }
    return result;    
}

const computerSelection = getComputerChoice();

const playerSelection = "rock";

function playRound(pS, cS) {
    let choice = pS.toUpperCase();
    let result = getResult(choice,cS);
    if (result == 1) {
        return "You Win! " + choice + " beats " + cS;
    } else if (result == -1)  {
        return "You Lose! " + cS + " beats " + choice;
    } else {
        return "It's A Tie! Both players chose " + cS;
    }
}

console.log(playRound(playerSelection,computerSelection));