function getComputerChoice(com) {
    com = Math.floor(Math.random() * 3)
    switch (com) {
        case 0:
            return "ROCK";

        case 1:
            return "PAPER";

        case 2:
            return "SCISSOR";
    }
}

function playerSelection(input, player) {
    input = prompt("Enter your choice: ");
    player = input.toUpperCase();
    return player;
}

function game(player, com) {
    for (let i = 0; i < 5; i++) {
        com = getComputerChoice();

        player = playerSelection();

        if (player === com) {
            alert("TIE");
        }
        else if ((player === 'ROCK' && com === 'SCISSORS') ||
            (player === 'SCISSORS' && com === 'PAPER') ||
            (player === 'PAPER' && com === 'ROCK')) {
            alert("You WIN");
        }
        else {
            alert("You LOSE");
        }
    }
}

game();