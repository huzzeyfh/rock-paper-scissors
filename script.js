//button variables
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

//result variables
const result = document.querySelector(".result");
const humanPoint = document.querySelector(".human-point");
const computerPoint = document.querySelector(".computer-point");


//click action button
rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Your score: " + (`${computerScore}`)); 
});

paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Your score: " + (`${computerScore}`)); 
});

scissorButton.addEventListener("click", () => {
  playRound("Scissor", getComputerChoice());
  if playRound(humanWin) = true {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose!";
  }
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Your score: " + (`${computerScore}`)); 
});

//for 1 round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    return humanWin;
    
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    humanScore++;
    return humanWin;

  } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
    computerScore++;
    return humanWin;

  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    humanScore++;
    return humanWin;

  } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
    computerScore++;
    return humanWin;

  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return humanWin;

  } else if (humanChoice === null) {
    console.log("Invalid")

  } else {
    console.log("Draw!")

  }
}

// // Computer choice
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

// // Initial score
let humanScore = 0;
let computerScore = 0;

//After 5 rounds
console.log(`Final score -> Human = ${humanScore}, Computer = ${computerScore}`);

if (humanScore > computerScore) {
  console.log("You are the winner");
} else if (humanScore < computerScore) {
  console.log("You are defeated by computer");
} else {
  console.log("It's draw!");
}