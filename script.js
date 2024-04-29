"use strict";

//Rock beats scissors, scissors beat paper, and paper beats rock.
//a funtion to get computer choice
//a function to get player choice
//a function to keep track of player/computers score
//a function to play a round
//a function to anounce the winner
//a function to play the game for 5 times.

function playGame(getPlayerChoice, getComputerChoice) {
  let computerChoice = getComputerChoice;
  let playerChoice = getPlayerChoice;
  let computerScore = 0;
  let playerScore = 0;
  let game_rounds=+prompt("Enter Number of rounds you want to play");
  for (let i = 1; i <= game_rounds; i++) {
    console.log(`Game Round : ${i}`);
    let Game_Result = playGameRound(playerChoice, computerChoice);
    if (Game_Result == "c") {
      console.log("Computer Win;");
      computerScore += 1;
    } else {
      console.log("player Win;");
      playerScore += 1;
    }

    console.log(
      `Scores : Computer Win=${computerScore}, Player Win=${playerScore}`
    );
  }

  return `Total Game Rounds : ${game_rounds}, results===Computer Wins:${computerScore},Player Wins:${playerScore}`;
}

function playGameRound(PlayerChoice, ComputerChoice) {
  let computerChoice = ComputerChoice();
  let playerChoice = PlayerChoice();
  console.log(`computer choice : ${computerChoice}`);
  console.log(`Human Choice : ${playerChoice}`);

  let computerScore = "";
  let playerScore = "";

  if ((computerChoice == "rock") & (playerChoice == "scissors")) {
    console.log(`Computer Wins : Score ${(computerScore = "c")}`);
    return "c";
  } else if ((computerChoice == "scissors") & (playerChoice == "paper")) {
    console.log(`Computer Wins : Score ${(computerScore = "c")}`);
    return "c";
  } else if ((computerChoice == "paper") & (playerChoice == "rock")) {
    console.log(`Computer Wins : Score ${(computerScore = "c")}`);
    return "c";
  } else {
    console.log(`Player Wins : Score ${(playerScore = "p")}`);
    return "p";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Select Rock,Paper,scissors").toLowerCase();
  return playerChoice;
}

function getComputerChoice() {
  let computerChoice = "";
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber % 2 == 0) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice.toLowerCase();
}
