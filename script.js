// Rock, Paper and Scissors Game - JavaScript Exercise

// Choices - Array
const rps = ["rock", "paper", "scissors"];

// User Input - Prompt
const userChoice = prompt("Choose between rock, paper and scissors");

if (userChoice === "rock" || userChoice == "paper" || userChoice == "scissors") {
console.log("Player Choice: " + `${userChoice}`);
} else {
    console.log("Enter The Appropriate Input");
}


// Computer Input
let computerChoice = rps[Math.floor(Math.random()*3)];
console.log("computer: " + ` ${computerChoice}`);

if (computerChoice <= 0.33) {
    computerChoice = "rock";
}
if (computerChoice <= 0.66) {
    computerChoice = "paper";
}
if (computerChoice >= 0.67) {
    computerChoice = "scissors";
}

// User Inputs

//rock
const winner = playRound(userChoice, computerChoice);
function playRound(userChoice, computerChoice) {
    if(userChoice === `rock` && computerChoice === `rock`) {
        console.log("Draw");      
    } else if (userChoice === `rock` && computerChoice === `paper`) {
        console.log("Computer Won!");
    } else if (userChoice === `rock` && computerChoice === `scissors`) {
        console.log ("You won!");
//paper
    } else if(userChoice === `paper` && computerChoice === `rock`) {
        console.log ("You Won!");
    } else if (userChoice === `paper` && computerChoice === `paper`) {
        console.log("Draw");
    } else if (userChoice === `paper` && computerChoice === `scissors`) {
        console.log("Computer Won!");
//scissors
    } else if (userChoice === `scissors` && computerChoice === `rock`) {
        console.log("Computer Won!");
    } else if (userChoice === `scissors` && computerChoice === `paper`) {
        console.log("You Won!");
    } else if (userChoice === `scissors` && computerChoice === `scissors`) {
        console.log("Draw")
    }
}

playRound();




