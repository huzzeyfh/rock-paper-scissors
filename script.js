function getComputerChoice() {
  let max = Math.floor(Math.random() * 3);

  if (max === 0) {
    return "Rock" && console.log("Rock");
  } else if (max === 1) {
    return "Paper" && console.log("Paper");
  } else {
    return "Scissor" && console.log("Scissor");
  }
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scissor?", "");

    if (answer === "Rock") {
        return "Rock" && console.log("Rock");
    } else if (answer === "Paper") {
        return "Paper" && console.log("Paper");
    } else if (answer === "Scissor"){
        return "Scissor" && console.log("Scissor");
    } else {
        console.log("Wrong input, follow as prompted")
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock.")
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("You win! Rock beats Scissor.")
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissor.");
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("You win! Scissor beats Paper.");
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("You lose! Scissor beats Paper.");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock.")
    } else {
        console.log("Draw!")
    }
}

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);