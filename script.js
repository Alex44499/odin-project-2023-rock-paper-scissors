// Constants for the possible choices
const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";

// Constants for the win messages
const USER_WINS_WITH_ROCK = "You won. Rock beats Scissors";
const USER_WINS_WITH_SCISSORS = "You won. Scissors beats Paper";
const USER_WINS_WITH_PAPER = "You won. Paper beats Rock";

// Constants for the lose messages
const USER_LOSES_WITH_ROCK = "You lost. Rock loses to Paper";
const USER_LOSES_WITH_SCISSORS = "You lost. Scissors lose to Rock";
const USER_LOSES_WITH_PAPER = "You lost. Paper loses to Scissors";

// Constant for the draw message
const DRAW = "It is draw";

// Function to get the computer's choice
function getComputerChoice() {
	// Generate a random number between 0 and 2
	let randomizationOfChoice = (Math.floor(Math.random() * 3));

	// Based on the random number, return the corresponding choice
	if (randomizationOfChoice === 0) {
		return PAPER;
	}
	else if (randomizationOfChoice === 1) {
		return ROCK;
	}
	else {
		return SCISSORS;
	}
}


// Function to determine the outcome of a Rock, Paper, Scissors game
function playerSelection(playerSelection, computerSelection) {

	// Normalize player's choice to lowercase for consistent comparison
	playerSelection = playerSelection.toLowerCase()

	// Check for a draw scenario - when player's choice matches computer's choice
	if (playerSelection === computerSelection) {
		return DRAW; // Return the DRAW constant
	}

	// Determine the game outcome based on player's choice
	switch (playerSelection) {
		// Player chose ROCK
		case ROCK:
			// If computer chose PAPER, player loses (Paper covers Rock)
			// If computer chose SCISSORS, player wins (Rock crushes Scissors)
			return computerSelection === PAPER ? USER_LOSES_WITH_ROCK : USER_WINS_WITH_ROCK;

		// Player chose SCISSORS
		case SCISSORS:
			// If computer chose ROCK, player loses (Rock crushes Scissors)
			// If computer chose PAPER, player wins (Scissors cut Paper)
			return computerSelection === ROCK ? USER_LOSES_WITH_SCISSORS : USER_WINS_WITH_SCISSORS;

		// Player chose PAPER
		case PAPER:
			// If computer chose SCISSORS, player loses (Scissors cut Paper)
			// If computer chose ROCK, player wins (Paper covers Rock)
			return computerSelection === SCISSORS ? USER_LOSES_WITH_PAPER : USER_WINS_WITH_PAPER;
	}
}



console.log(getComputerChoice())


console.log(playerSelection("RoCk", "paper"))
console.log(playerSelection("scIssors", "rock"))
console.log(playerSelection("PAPER", "scissors"))



console.log(playerSelection("RoCk", "scissors"))
console.log(playerSelection("scIssors", "paper"))
console.log(playerSelection("PAPER", "rock"))  
