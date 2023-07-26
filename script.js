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
function playRound(playerSelection, computerSelection) {

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

// Set the number of game rounds
let GAME_ROUNDS = 5;

// Initialize player and computer scores
let playerWins = 0;
let computerWins = 0;

// Main game function
function game() {
	// Loop for the number of game rounds
	for (let i = 0; i < GAME_ROUNDS; i++) {
		// Get player's choice
		let playerSelection = prompt("Please mention here you choice (Rock, Paper or Scissors): ");

		// Get computer's choice
		let computerSelection = getComputerChoice();

		// Play a round and get the result
		let round = playRound(playerSelection, computerSelection);

		// Update scores based on the round result
		if (round.includes("won")) {
			playerWins++;
		}
		else if (round.includes("lost")) {
			computerWins++;
		}
		else {
			// In case of a draw, increment both scores
			computerWins++;
			playerWins++;
		}

		// Log the round result and current scores
		console.log(round);
		console.log(`Player score:  ${playerWins}, Computer score: ${computerWins}`);
	}

	// Log the final scores after all rounds are played
	console.log(`Game over! Player got: ${playerWins} \n Computer got: ${computerWins}`);
}

// Start the game
game();



