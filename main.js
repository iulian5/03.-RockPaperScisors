let start =
  "Vous allez jouer au shifumi. Choisisez entre Pierre, Papier, Ciseaux :";
let choix;
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let elements = document.getElementsByClassName("card-wrapper");
function computerPlay() {
  let p = "papier",
    pi = "pierre",
    c = "ciseaux",
    min = 1,
    max = 4;
  let result = Math.floor(Math.random() * (max - min)) + min;
  if (result === 1) {
    return p;
  } else if (result === 2) {
    return pi;
  } else {
    return c;
  }
}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  let winner;

  if ((playerSelection === "papier") & (computerSelection === "pierre")) {
    winner = "Vous";
  } else if (
    (playerSelection === "papier") &
    (computerSelection === "ciseaux")
  ) {
    winner = "l'ordinateur";
  } else if (
    (playerSelection === "pierre") &
    (computerSelection === "ciseaux")
  ) {
    winner = "Vous";
  } else if (
    (playerSelection === "pierre") &
    (computerSelection === "papier")
  ) {
    winner = "l'ordinateur";
  } else if (
    (playerSelection === "ciseaux") &
    (computerSelection === "papier")
  ) {
    winner = "Vous";
  } else if (
    (playerSelection === "ciseaux") &
    (computerSelection === "pierre")
  ) {
    winner = "l'ordinateur";
  } else if (playerSelection === computerSelection) {
    winner = "égalite";
  }
  return winner;
}

for (let i = 0; i < 5; i++) {
  //choix = prompt(start).toLowerCase();
  let userPoints = 0,
    computerPoints = 0;
  if (playRound(choix, computerSelection) === "Vous") {
    userPoints++;
    playerScore.innerText = userPoints;
  } else if (playRound(choix, computerSelection) === "l'ordinateur") {
    computerPoints++;
  }
  console.log(playRound(choix, computerSelection));
  if ((i === 4) & (userPoints > computerPoints)) {
    console.log(
      "La partie est terminée, vous avez gagné avec " + userPoints + " points"
    );
  } else if ((i === 4) & (userPoints < computerPoints)) {
    console.log(
      "La partie est terminée, vous avez perdue avec " + userPoints + " points"
    );
  }
}

for (let i = 0, len = elements.length; i < len; i++) {
  len.addEventListener("click", function () {
    console.log("test");
    if (element.classList) {
      element.classList.toggle("active");
    }
  });
}
