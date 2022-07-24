let computerChoice = 0;
let selection = 0;
let computerScore = 0;
let playerScore = 0;
let i = 0;
let result = 0;

// create function computerPlay to randomly choose options
function computerPlay() {
    let computerRandom = Math.floor(Math.random() * 3) + 1;
    if (computerRandom === 1) {
        computerChoice = 'Rock';
        return computerChoice;
    } else if (computerRandom === 2) {
        computerChoice = 'Paper';
        return computerChoice;
    } else {
        computerChoice = 'Scissors';
        return computerChoice;
    }
}

// prompt player choice in playerSelection
function playerSelection() {
    selection = prompt('Rock Paper Scissors!');

    // make cancel actually cancel
    if (selection === null || selection === '') {
        selection = null;
        alert('Canceled');
        return selection;
    } else {
        // make playerSelection case-insensitive
        selection = selection.toLowerCase().charAt(0).toUpperCase() + selection.slice(1);
    }

    // returns selection if it is an option
    if (selection === 'Rock' || selection === 'Paper' || selection === 'Scissors' || selection === 'Scissor') {
        return selection;
    } else {
        // gives another chance to choose
        alert('Please choose rock, paper, or scissors!')
        selection = prompt('Rock Paper Scissors!', '');
        selection = selection.toLowerCase().charAt(0).toUpperCase() + selection.slice(1);
        
        // prompts for final selection
        if (selection === 'Rock' || selection === 'Paper' || selection === 'Scissors' || selection === 'Scissor') {
            return selection;
        } else { // return error if they cancel or choose something else
            alert('Error')
            return null;
        }
    }
}

function rockPaperScissors(selection, computerChoice) {
    selection = playerSelection();
    computerChoice = computerPlay();
    if (selection === 'Rock' && computerChoice === 'Scissors') {
        alert('You Win! Rock beats Scissor!');
        result = 'You Win! Rock beats Scissor!';
        playerScore = playerScore + 1;
    } else if (selection === 'Rock' && computerChoice === 'Paper') {
        alert('You Lose! Paper beats Rock!');
        result = 'You Lose! Paper beats Rock!';
        computerScore = computerScore + 1;
    } else if (selection === 'Rock' && computerChoice === 'Rock') {
        alert('Draw!');
        result = 'Draw!';
        i = i - 1;
    } else if (selection === 'Paper' && computerChoice === 'Scissors') {
        alert('You Lose! Scissor beats Paper!');
        result = 'You Lose! Scissor beats Paper!';
        computerScore = computerScore + 1;
    } else if (selection === 'Paper' && computerChoice === 'Rock') {
        alert('You Win! Paper beats Rock!');
        result = 'You Win! Paper beats Rock!';
        playerScore = playerScore + 1;
    }  else if (selection === 'Paper' && computerChoice === 'Paper') {
        alert('Draw!');
        result = 'Draw!';
        i = i - 1;
    }  else if ((selection === 'Scissor' || selection === 'Scissors') && computerChoice === 'Rock') {
        alert('You Lose! Rock beats Scissor!');
        result = 'You Lose! Rock beats Scissor!';
        computerScore = computerScore + 1;
    }  else if ((selection === 'Scissor' || selection === 'Scissors') && computerChoice === 'Paper') {
        alert('You Win! Scissor beats Paper!');
        result = 'You Win! Scissor beats Paper!';
        playerScore = playerScore + 1;
    }  else if ((selection === 'Scissor' || selection === 'Scissors') && computerChoice === 'Scissors') {
        alert('Draw!');
        result = 'Draw!';
        i = i - 1;
    }
}

// create rockPaperScissors that decides who wins round
// repeat the functions 5 times and logs score
function game() {
    for (i = 0; i < 5; i++) {
        rockPaperScissors();
        if (selection === null || selection === '') {
            i = i + 100;
        } 
        console.log(result);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        if (computerScore === 3) {
            alert('You Lost Rock Paper Scissors!');
            console.log('You Lost Rock Paper Scissors!');
            i = i + 100;
        } else if (playerScore === 3) {
            alert('You Won Rock Paper Scissors!');
            console.log('You Won Rock Paper Scissors!');
            i = i + 100;
        }
    }
}

game();

