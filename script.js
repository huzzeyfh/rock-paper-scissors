//button variables
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");


//result variables
const humanChoice = document.querySelector(".human-choice");
const computerChoice = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const humanPoint = document.querySelector(".human-point");
const computerPoint = document.querySelector(".computer-point");


// // Initial score
let humanScore = 0;
let computerScore = 0;
let humanChoiceInit = "";

//click action button
rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  humanChoiceInit = "Rock";

  //choice
  humanChoice.textContent = ("Your choice: " + (`${humanChoiceInit}`));
  computerChoice.textContent = ("Computer choice: " + (`${getComputerChoice()}`));

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Computer score: " + (`${computerScore}`)); 
  
});

paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  humanChoiceInit = "Paper";
  
  //choice
  humanChoice.textContent = ("Your choice: " + (`${humanChoiceInit}`));
  computerChoice.textContent = ("Computer choice: " + (`${getComputerChoice()}`));

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Your score: " + (`${computerScore}`)); 
});

scissorButton.addEventListener("click", () => {
  playRound("Scissor", getComputerChoice());
  humanChoiceInit = "Scissor";

  //choice
  humanChoice.textContent = ("Your choice: " + (`${humanChoiceInit}`));
  computerChoice.textContent = ("Computer choice: " + (`${getComputerChoice()}`));

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`)); 
  computerPoint.textContent = ("Your score: " + (`${computerScore}`)); 
});

//for 1 round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    return "computerWin";
    
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    humanScore++;
    return "humanWin";

  } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
    computerScore++;
    return "computerWin";

  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    humanScore++;
    return "humanWin";

  } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
    computerScore++;
    return "computerWin";

  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return "humanWin";

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


//After 5 rounds
console.log(`Final score -> Human = ${humanScore}, Computer = ${computerScore}`);

if (humanScore > computerScore) {
  console.log("You are the winner");
} else if (humanScore < computerScore) {
  console.log("You are defeated by computer");
} else {
  console.log("It's draw!");
}