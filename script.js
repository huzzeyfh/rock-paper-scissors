//button variables
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const resetButton = document.querySelector(".reset");
resetButton.style.display = "none";
const catLaugh = document.querySelector(".cat-laugh");
const boleh = document.querySelector(".boleh")

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

//after five round
function afterFiveRound() {
  if (humanScore === 5) {
    result.textContent = "YOU ARE THE WINNER!";
    humanChoice.textContent = "";
    computerChoice.textContent = "";
    humanScore = 0;
    computerScore = 0;
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorButton.style.display = "none";
    resetButton.style.display = "block";
  } else if (computerScore === 5) {
    result.textContent = "YOU ARE DEFEATED BY COMPUTER!";
    humanChoice.textContent = "";
    computerChoice.textContent = "";
    computerScore = 0;
    humanScore = 0;
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorButton.style.display = "none";
    resetButton.style.display = "block";
  }

}

//click action button
rockButton.addEventListener("click", () => {
  //get human choice
  humanChoiceInit = "Rock";

  //get computer choice
  const computerChoiceInit = getComputerChoice();

  //play
  const playRoundResult = playRound(humanChoiceInit, computerChoiceInit);

  //result
  if (playRoundResult === "humanWin") {
    result.textContent = "<-- You Win! -->";
    boleh.play();
  } else if (playRoundResult === "computerWin") {
    result.textContent = "<-- Computer Wins! -->";
    catLaugh.play();
  } else {
    result.textContent = "<-- Draw! -->";
  }

  //choice
  humanChoice.textContent = "Your choice: " + humanChoiceInit;
  computerChoice.textContent = "Computer choice: " + computerChoiceInit;

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`));
  computerPoint.textContent = ("Computer score: " + (`${computerScore}`));

  afterFiveRound();
});

paperButton.addEventListener("click", () => {
  //get human choice
  humanChoiceInit = "Paper";

  //get computer choice
  const computerChoiceInit = getComputerChoice();

  //play
  const playRoundResult = playRound(humanChoiceInit, computerChoiceInit);

  //result
  if (playRoundResult === "humanWin") {
    result.textContent = "<-- You Win! -->";
    boleh.play();
  } else if (playRoundResult === "computerWin") {
    result.textContent = "<-- Computer Wins! -->";
    catLaugh.play();
  } else {
    result.textContent = "<-- Draw! -->";
  }

  //choice
  humanChoice.textContent = "Your choice: " + humanChoiceInit;
  computerChoice.textContent = "Computer choice: " + computerChoiceInit;

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`));
  computerPoint.textContent = ("Computer score: " + (`${computerScore}`));

  afterFiveRound();
});

scissorButton.addEventListener("click", () => {
  //get human choice
  humanChoiceInit = "Scissor";

  //get computer choice
  const computerChoiceInit = getComputerChoice();

  //play
  const playRoundResult = playRound(humanChoiceInit, computerChoiceInit);

  //result
  if (playRoundResult === "humanWin") {
    result.textContent = "<-- You Win! -->";
    boleh.play();
  } else if (playRoundResult === "computerWin") {
    result.textContent = "<-- Computer Wins! -->";
    catLaugh.play();
  } else {
    result.textContent = "<-- Draw! -->";
  }

  //choice
  humanChoice.textContent = "Your choice: " + humanChoiceInit;
  computerChoice.textContent = "Computer choice: " + computerChoiceInit;

  //score
  humanPoint.textContent = ("Your score: " + (`${humanScore}`));
  computerPoint.textContent = ("Computer score: " + (`${computerScore}`));

  afterFiveRound();
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
    return "Draw";

  }
}

//Computer choice
function getComputerChoice() {
  let max = Math.floor(Math.random() * 3);

  if (max === 0) {
    return "Rock";
  } else if (max === 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

//reset button
resetButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  humanChoice.textContent = "Your choice: ";
  computerChoice.textContent = "Computer choice: ";
  result.textContent = "";
  humanPoint.textContent = "";
  computerPoint.textContent = "";
  rockButton.style.display = "inline";
  paperButton.style.display = "inline";
  scissorButton.style.display = "inline";
  resetButton.style.display = "none";
})
