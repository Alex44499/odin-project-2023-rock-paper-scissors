// Selecting the elements to display player and computer results and the result information
const playerResult = document.querySelector('.player-result')
const computerResult = document.querySelector('.computer-result')
const resultInformation = document.querySelector('.result-option')

// Constants for the possible choices in the game
const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";

// Constants for the win messages
const USER_WINS_WITH_ROCK = "You won. Rock beats Scissors";
const USER_WINS_WITH_SCISSORS = "You won. Scissors beats Paper";
const USER_WINS_WITH_PAPER = "You won. Paper beats Rock";
const USER_WON = "You won";

// Constants for the lose messages
const USER_LOSES_WITH_ROCK = "You lost. Rock loses to Paper";
const USER_LOSES_WITH_SCISSORS = "You lost. Scissors lose to Rock";
const USER_LOSES_WITH_PAPER = "You lost. Paper loses to Scissors";
const USER_LOST = "You lost";

// Constant for the draw message
const DRAW = "It is draw";

// Messages for end of game
const USED_END_GAME = "You've won the game!"
const COMPUTER_END_GAME = "Computer has won the game."

// Selecting the computer choices elements
const computerChoiceRock = document.querySelector('.rock');
const computerChoicePaper = document.querySelector('.paper');
const computerChoiceScissors = document.querySelector('.scissors');

// Function to reset the background of the computer's choices
function resetComputerChoiceBackground() {
	computerChoicePaper.style.background = ''; // resets to original style
	computerChoiceRock.style.background = ''; // resets to original style
	computerChoiceScissors.style.background = ''; // resets to original style
}

// Function to determine the computer's choice
function getComputerChoice() {

	// Reset the background color of computer choices 
	resetComputerChoiceBackground()

	// Generate a random number between 0 and 2
	let randomizationOfChoice = Math.floor(Math.random() * 3);

	// Based on the random number, change the background color of the corresponding choice and return the choice
	if (randomizationOfChoice === 0) {
		computerChoicePaper.style.background = 'blueviolet'; 
		return PAPER;
	} else if (randomizationOfChoice === 1) {
		computerChoiceRock.style.background = 'blueviolet'; 
		return ROCK;
	} else {
		computerChoiceScissors.style.background = 'blueviolet';
		return SCISSORS;
	}
}

// Function to determine the outcome of a Rock, Paper, Scissors game
function playRound(playerSelection, computerSelection) {

	// Normalize player's choice to lowercase for consistent comparison
	playerSelection = playerSelection.toLowerCase()

	// Check for a draw scenario - when player's choice matches computer's choice
	if (playerSelection === computerSelection) {
		return DRAW; 
	}

	// Determine the game outcome based on player's choice
	switch (playerSelection) {
		case ROCK:
			return computerSelection === PAPER ? USER_LOSES_WITH_ROCK : USER_WINS_WITH_ROCK;
		case SCISSORS:
			return computerSelection === ROCK ? USER_LOSES_WITH_SCISSORS : USER_WINS_WITH_SCISSORS;
		case PAPER:
			return computerSelection === SCISSORS ? USER_LOSES_WITH_PAPER : USER_WINS_WITH_PAPER;
	}
}

// Initializing player and computer scores
let playerWins = 0;
let computerWins = 0;

// Initializing game over flag
let gameOver = false;

// Function to update the scores and check if game is over
function game(round) {
	// If the game is over, reset the scores and update the game status
	if (gameOver) {
		playerWins = 0;
		computerWins = 0;
		gameOver = false;
	}

	// Update scores based on the round result
	if (round.includes("won")) {
		playerWins++;
		resultInformation.textContent = USER_WON;
	} else if (round.includes("lost")) {
		computerWins++;
		resultInformation.textContent = USER_LOST;
	} else {
		resultInformation.textContent = DRAW;
	}

	// Check if game is over
	if (playerWins === 5) {
		resultInformation.textContent = USED_END_GAME;
		gameOver = true;
	} else if (computerWins === 5) {
		resultInformation.textContent = COMPUTER_END_GAME;
		gameOver = true;
	}

	// Update the score display
	playerResult.textContent = playerWins;
	computerResult.textContent = computerWins;
}

// Select all the buttons 
const buttons = document.querySelectorAll('button')

// For each button, when clicked, get the player and computer choices, determine the round result and update the game status
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let playerSelection = button.textContent
		let computerSelection = getComputerChoice()
		let round = playRound(playerSelection, computerSelection)
		game(round)
	})
})
