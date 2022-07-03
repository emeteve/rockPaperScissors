// create function computerPlay to randomly choose options
function computerPlay() {
    let computerChoice = 0;
    let computerRandom = Math.floor(Math.random() * 3) + 1;
    if (computerRandom === 1) {
        computerChoice = 'Rock';
    } else if (computerRandom === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors'
    }
    
    return computerChoice;
}

// prompt player choice in playerSelection
function playerSelection() {
    let selection = prompt('Rock Paper Scissors!');

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
        console.log(selection);
        return selection;
    } else {
        // gives another chance to choose
        alert('Please choose rock, paper, or scissors!')
        selection = prompt('Rock Paper Scissors!', '');
        selection = selection.toLowerCase().charAt(0).toUpperCase() + selection.slice(1);
        
        // prompts for final selection
        if (selection === 'Rock' || selection === 'Paper' || selection === 'Scissors' || selection === 'Scissor') {
            console.log(selection);
            return selection;
        } else { // return error if they cancel or choose something else
            alert('Error')
        }
    }
}

// create rockPaperScissors that decides who wins round
// repeat the functions 5 times and logs score
function game() {
    for (let i = 0; i < 5; i++) {
        function rockPaperScissors(playerSelection, computerPlay) {
            if (selection === null || selection === '') {
                selection = null;
                alert('Canceled');
                return selection;
            }
        }
    }
}

computerPlay();
playerSelection();
game();

