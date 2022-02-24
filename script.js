const gameOptionsRelations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const gameOptions = Object.keys(gameOptionsRelations);

const playerSelection = () => {
  let userSelection = "";
  do {
    userSelection = prompt("Select your hand (Rock, Paper, Scissors):");
    userSelection = userSelection.toLowerCase();
  } while (userSelection == "" || !gameOptions.includes(userSelection));
  return userSelection;
};

const computerSelection = () => gameOptions[getRandomInt(3)];

function playRound() {
  let playerOption = playerSelection();
  let computerOption = computerSelection();
  if (playerOption == computerOption)
    return `Tie, ${playerOption} can't win over ${computerOption}`;
  if (gameOptionsRelations[playerOption] == computerOption)
    return `You win! ${playerOption} beats ${computerOption}`;
  else return `You lose! ${computerOption} beats ${playerOption}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();
