let playerSelect = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelect = button.id;
        console.log(playerSelect);
    });
});

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