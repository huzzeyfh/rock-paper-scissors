// Computer choice
function getComputerChoice() {
  let max = Math.floor(Math.random() * 3);

  if (max === 0) {
    console.log("Rock");
    return "Rock";
  } else if (max === 1) {
    console.log("Paper");
    return "Paper";
  } else {
    console.log("Scissor");
    return "Scissor";
  }
}

// Human choice
function getHumanChoice() {
  let answer = prompt("Rock, Paper, or Scissor?", "");
  // Still confused to make case-sensitive 

  if (answer === "Rock") {
    console.log("Rock");
    return "Rock";
  } else if (answer === "Paper") {
    console.log("Paper");
    return "Paper";
  } else if (answer === "Scissor") {
    console.log("Scissor");
    return "Scissor";
  } else {
    console.log("Wrong input, follow as prompted")
    return null;
  }
}

// Initial score
let humanScore = 0;
let computerScore = 0;

// Function for one round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;

  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    console.log("You win! Rock beats Scissor.");
    humanScore++;

  } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
    console.log("You lose! Rock beats Scissor.");
    computerScore++;

  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    console.log("You win! Scissor beats Paper.");
    humanScore++;

  } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
    console.log("You lose! Scissor beats Paper.");
    computerScore++;

  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;

  } else if (humanChoice === null) {
    console.log("Invalid")

  } else {
    console.log("Draw!")

  }
}

// Function for the game
function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
  console.log('Your Score =', humanScore);
  console.log('Computer Score=', computerScore)
}

// Loop 5 times
for (let i = 0; i < 5; i++) {
  console.log(`--- Round ${i + 1} ---`);
  playGame();
}

// After 5 rounds
console.log(`Final Score -> Human = ${humanScore}, Computer = ${computerScore}`);

if (humanScore > computerScore) {
  console.log("You are the winner!");
} else if (computerScore > humanScore) {
  console.log("You are defeated by computer.");
} else {
  console.log("It's draw!");
}