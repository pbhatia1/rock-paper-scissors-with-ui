//GAME MECHANICS:
const moves = ['Rock', 'Paper', 'Scissors'];
//let playerScore = 0;
let i = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        return 'cpu wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Paper beats Rock - LOSS`);
    }
    else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        //playerScore++;
        return 'player wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Rock beats Scissors - WIN`);
    }
    else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        //playerScore++;
        return 'player wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Paper beats Rock - WIN`);
    }
    else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        return 'cpu wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Scissors beats Paper - LOSS`);
    }
    else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        return 'cpu wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Rock beats Scissors - LOSS`);
    }
    else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        //playerScore++;
        return 'player wins';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. Scissors beats Paper - WIN`);
    }
    else {
        return 'tie';
        //return (`Your move: ${playerSelection}, Computer's move: ${computerSelection}. ${playerSelection} = ${computerSelection} - TIE`);
    }
}

function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}


/////////////////////////////////////////////////////////////////////

//GAME UI
const buttons = document.querySelectorAll('.button');
const score = document.getElementById('score');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');
const round = document.getElementById('roundCount');


//const gameSummary = document.getElementById('summary');
const gameOver = document.getElementById('gameOver');
const finalScore = document.getElementById('finalScore');
const winOrLose = document.getElementById('winOrLose');
const newGame = document.getElementById('newGame');

const roundCounter = {
    round: 0
}

const scoreboard = {
    player: 0,
    computer: 0
}

//play game
function game(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = playRound(playerChoice, computerChoice);
    while (scoreboard.computer <= 4 && scoreboard.player <= 4) {
        return showWinner(winner, computerChoice);
    }
    return finalResult();
}

function finalResult() {
    gameOver.innerHTML = `<h1>Game Over</h1>`;
    finalScore.innerHTML = `
    <h2>Your Score: ${scoreboard.player}</h2>
    <h2>Computer's Score: ${scoreboard.computer}</h2>
    `;
    if (scoreboard.player > scoreboard.computer) {
        winOrLose.innerHTML= `<h1 class="text-win">You won the game!</h3>`;
    }
    else {
        winOrLose.innerHTML=  `<h1 class="text-lose">You lost the game!</h3>`;
    }


    modal.style.display = 'block';
}

//console.log(game.playerChoice);

//<p>Your move: <strong>${game.playerChoice}</strong><p>

function showWinner(winner, computerChoice) {
    if (winner === 'player wins') {
        scoreboard.player++;
        roundCounter.round++;
        result.innerHTML = `
        <h1 class="text-win">You won this round!<h1>
        <p>Computer played <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    else if (winner === 'tie') {
        roundCounter.round++;
        result.innerHTML = `
        <h1>Tie!<h1>
        <p>Computer played <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    else {
        scoreboard.computer++;
        roundCounter.round++;
        result.innerHTML = `
        <h1 class="text-lose">You lost this round!<h1>
        <p>Computer played <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    //show score
    score.innerHTML = `
    <h3>
    Player: ${scoreboard.player}
    </h3>

    <h3>
    Computer: ${scoreboard.computer}
    </h3>
    `;

    round.innerHTML = `<h2>Round ${roundCounter.round}</h2>`;
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display='none'
    }
}

function restartGame(e) {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <h3>Player: 0</h3>
    <h3>Computer: 0</h3>
    `;
    roundCounter.round = 0;
    round.innerHTML = `<h2>Round 0</h2>`;
    result.innerHTML = '';
    if (e.target == newGame) {
        modal.style.display='none'
    }
}


//Event listeners
buttons.forEach(choice => choice.addEventListener('click', game));
window.addEventListener('click', clearModal);
newGame.addEventListener('click', restartGame);

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//buttons.forEach(button => button.addEventListener('click', game));