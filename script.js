
function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    result = choices[randomIndex];

    return result;
}

function getHumanChoice() {
    let choice = prompt("what's your choice?").toLowerCase().trim();
    
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt(`invalid choice - ${choice}, please do your choice again: `).toLowerCase().trim();
    }
    return choice;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice ){
        result = `equal, both of you show ${humanChoice}!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `you won! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        result = `you lose! ${computerChoice} beats ${humanChoice}!`;
    }

    return result;

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

final = playRound(humanSelection, computerSelection);

console.log(final);