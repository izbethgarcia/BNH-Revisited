let playersChoice;
let randomComputersChoice;
let computersChoice;
let theWinnerMessage;
let theResults;
let playerWins = 0;
let computerWins = 0;

// Array of game choices 
const GameChoices = ["Bear", "Ninja", "Hunter"]; 

// runs when button clicked
function playGame(choice) {
  playersChoice = choice.toLowerCase();

  // Random computer choice
  randomComputersChoice = Math.floor(Math.random() * GameChoices.length);
  computersChoice = GameChoices[randomComputersChoice].toLowerCase();

  // Determine the winner
  theWinnerMessage = "";

  if (playersChoice === "bear") {
    switch (computersChoice) {
      case "bear":
        theWinnerMessage = "Tie!";
        break;
      case "ninja":
        theWinnerMessage = "The computer wins!";
        computerWins++;
        break;
      case "hunter":
        theWinnerMessage = "You win!";
        playerWins++;
        break;
    }
  } else if (playersChoice === "ninja") {
    switch (computersChoice) {
      case "ninja":
        theWinnerMessage = "Tie!";
        break;
      case "bear":
        theWinnerMessage = "You win!";
        playerWins++;
        break;
      case "hunter":
        theWinnerMessage = "The computer wins!";
        computerWins++;
        break;
    }
  } else if (playersChoice === "hunter") {
    switch (computersChoice) {
      case "hunter":
        theWinnerMessage = "Tie!";
        break;
      case "bear":
        theWinnerMessage = "The computer wins!";
        computerWins++;
        break;
      case "ninja":
        theWinnerMessage = "You win!";
        playerWins++;
        break;
    }
  }

  // Display results first with choices and winner message
  theResults = `You chose ${playersChoice}. <br>
   The Computer chose ${computersChoice}!<br>
   ${theWinnerMessage}`;

  document.getElementById("gameResults").innerHTML = theResults;
  
  // Win counter
  document.getElementById("winCounter").innerHTML =
    `Your Wins: ${playerWins} <br>
    Computer Wins: ${computerWins}`;
  
  document.getElementById("resultsBox").classList.remove("hidden");
  document.getElementById("gameControls").classList.remove("hidden");
}

// Reset game 
function resetGame() {
  document.getElementById("resultsBox").classList.add("hidden");
  document.getElementById("gameControls").classList.add("hidden");
}
