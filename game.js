let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let computerConverted;
    let humanConverted = humanChoice;
    
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
        round_result.textContent = ("A tie!")
    }

    if (computerConverted == "Rock" && humanConverted == "scissors") {
        round_result.textContent = ("Rock beats scissors, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Rock" && humanConverted == "paper") {
        round_result.textContent = ("Paper beats rock, the player wins the round!")
        humanScore++
    }

    if (computerConverted == "Paper" && humanConverted == "scissors") {
        round_result.textContent = ("Scissors beats paper, the player wins the round!")
        humanScore++
    }

    if (computerConverted == "Paper" && humanConverted == "rock") {
        round_result.textContent = ("Paper beats rock, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Scissors" && humanConverted == "paper") {
        round_result.textContent = ("Scissors beats paper, the computer wins the round!")
        computerScore++
    }

    if (computerConverted == "Scissors" && humanConverted == "rock") {
        round_result.textContent = ("Rock beats scissors, the player wins the round!")
        humanScore++
    }

    score_container.appendChild(round_result);

    human_score.textContent = (`Human score is: ${humanScore}`);
    score_container.appendChild(human_score);

    computer_score.textContent = (`Computer score is: ${computerScore}`);
    score_container.appendChild(computer_score);

    if (humanScore == 5) {
        human_score.textContent = "";
        computer_score.textContent = "";

        round_result.textContent = "The human player wins! Click any of the three options to start another round."

        humanScore = 0;
        computerScore = 0;
    }

    if (computerScore == 5) {
        human_score.textContent = "";
        computer_score.textContent = "";

        round_result.textContent = "The computer player wins! Click any of the three options to start another round."

        humanScore = 0;
        computerScore = 0;
    }





}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let score_container = document.querySelector("#score_container");
const human_score = document.createElement("p");
const computer_score = document.createElement("p");
const round_result = document.createElement("p");

round_result.textContent = "Please select an option. First to 5 wins."
score_container.appendChild(round_result);

rock.addEventListener("click", () => {
        playRound("rock", Math.random());

})

paper.addEventListener("click", () => {
        playRound("paper", Math.random());
  
})

scissors.addEventListener("click", () => {
        playRound("scissors", Math.random());

            
})

