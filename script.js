function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = `Equal, both show ${humanChoice}!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You won this round! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        result = `You lose this round! ${computerChoice} beats ${humanChoice}!`;
    }

    updateScore();
    return result;
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;

    if (humanScore === 5) {
        resultDiv.textContent = " You win the game!";
        //setTimeout(resetGame, 2000);  // 延迟2秒后重置游戏
        document.getElementById('oneMoreGame').style.display = "block";  // 显示按钮
        
        // resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = " Computer wins the game!";
        document.getElementById('oneMoreGame').style.display = "block";  // 显示按钮

        //setTimeout(resetGame, 2000);  // 延迟2秒后重置游戏
        // resetGame();
    }
}

function handleClick(playerSelection) {
    if (humanScore === 5 || computerScore === 5) {
        return;  // 如果游戏结束，直接返回，不执行后续逻辑
    }
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
}

function printHi(){
    const hihi = document.getElementById('hi');
    hihi.textContent = "hihihi";
}


updateScore();
document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleClick('scissors'));

document.getElementById('oneMoreGame').addEventListener('click', () => {
    resetGame();  // 重置游戏
    document.getElementById('oneMoreGame').style.display = "none";  // 隐藏按钮
});


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    displayResult("");
}
