let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let computerRandom = Math.floor(Math.random() * 3) + 1;
    if (computerRandom === 1) {
        computerChoice = 'Rock';
        return computerChoice;
    } else if (computerRandom === 2) {
        computerChoice = 'Paper';
        return computerChoice;
    } else {
        computerChoice = 'Scissor';
        return computerChoice;
    }
}

function rockPaperScissors(selection, computerChoice) {
    selection = playerSelect;
    computerChoice = computerPlay();
    if (selection === 'Rock' && computerChoice === 'Scissor') {
        result = 'You Win! Rock beats Scissor!';
        playerScore = playerScore + 1;
    } else if (selection === 'Rock' && computerChoice === 'Paper') {
        result = 'You Lose! Paper beats Rock!';
        computerScore = computerScore + 1;
    } else if (selection === 'Rock' && computerChoice === 'Rock') {
        result = 'Draw!';
    } else if (selection === 'Paper' && computerChoice === 'Scissor') {
        result = 'You Lose! Scissor beats Paper!';
        computerScore = computerScore + 1;
    } else if (selection === 'Paper' && computerChoice === 'Rock') {
        result = 'You Win! Paper beats Rock!';
        playerScore = playerScore + 1;
    }  else if (selection === 'Paper' && computerChoice === 'Paper') {
        result = 'Draw!';
    }  else if ((selection === 'Scissor') && computerChoice === 'Rock') {
        result = 'You Lose! Rock beats Scissor!';
        computerScore = computerScore + 1;
    }  else if ((selection === 'Scissor') && computerChoice === 'Paper') {
        result = 'You Win! Scissor beats Paper!';
        playerScore = playerScore + 1;
    }  else if ((selection === 'Scissor') && computerChoice === 'Scissor') {
        result = 'Draw!';
    }
}

const buttons = document.querySelectorAll('button');
const player = document.querySelector('#playerScore')
const computer = document.querySelector('#computerScore')
const roundResult = document.querySelector('#result');
const gameResult = document.querySelector('#gameResult')
player.textContent = 'Player Score: ' + playerScore;
computer.textContent = 'Computer Score:' + computerScore;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelect = button.id;
        computerPlay();
        rockPaperScissors();
        
        roundResult.textContent = result;

        player.textContent = 'Player Score: ' + playerScore;
        computer.textContent = 'Computer Score:' + computerScore;

        if (computerScore === 5) {
            gameResult.textContent = 'You Lost Rock Paper Scissors!';
        } else if (playerScore === 5) {
            gameResult.textContent = 'You Won Rock Paper Scissors!';
        }
    });
});

