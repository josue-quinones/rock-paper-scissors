choices = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

// console.log(getComputerChoice());