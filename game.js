let humanScore = 0;
let computerScore = 0;


while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), Math.random());
}

if (humanScore == 3) {
    console.log("The player wins!")
}

else console.log("The computer wins!")






function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper, or scissors.");
    return humanChoice

}

function playRound(humanChoice, computerChoice) {
    let computerConverted;
    let humanConverted = humanChoice.toLowerCase()
    
    if (computerChoice < 0.33) {
        computerConverted = "Rock"
    }

    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        computerConverted = "Paper"
    }

    else if (computerChoice > 0.66) {
        computerConverted = "Scissors"
    }


    if ((computerConverted == "Scissors" && humanConverted == "scissors") ||
        (computerConverted == "Paper" && humanConverted == "paper") ||
        (computerConverted == "Rock" && humanConverted == "rock")
    ) {
        console.log("A tie!")
    }

    if (computerConverted == "Rock" && humanConverted == "scissors") {
        console.log("Rock beats scissors, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Rock" && humanConverted == "paper") {
        console.log("Paper beats rock, the player wins the round!")
        humanScore++
    }

    if (computerConverted == "Paper" && humanConverted == "scissors") {
        console.log("Scissors beats paper, the player wins the round!")
        humanScore++
    }

    if (computerConverted == "Paper" && humanConverted == "rock") {
        console.log("Paper beats rock, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Scissors" && humanConverted == "paper") {
        console.log("Scissors beats paper, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Scissors" && humanConverted == "rock") {
        console.log("Rock beats scissors, the player wins the round!")
        humanScore++
    }



}

