/* JAVASCRIPT CODE TO GENERATE COMPUTER SELECTIONS, KEEP TRACK OF GAME SCORES, AND DISPLAY RESULTS */ 
// VARIABLES TO COUNT SCORES
let playerScore = 0;
let compScore = 0;
let gameScore = 0;
document.getElementById("compPoints").innerHTML = "COMPUTER: <br>" + compScore;
document.getElementById("playerPoints").innerHTML = "PLAYER: <br>" + playerScore;

// VARIABLES TO STORE SOUND EFFECTS
let buttonClick = document.getElementById("buttonAudio");
let successSound = document.getElementById("successAudio");
let failureSound = document.getElementById("failureAudio");
let drawSound = document.getElementById("drawAudio");


// FUNCTION TO PLAY BUTTON CLICK AUDIO
function playAudio() {
  buttonClick.play();
};


// VARIABLES TO CAPTURE CLICK EVENT FROM BUTTON ID'S
  //ROCK
let userRock = document.getElementById('userRock');
userRock.addEventListener('click', () => game('Rock'));
  //PAPER
let userPaper = document.getElementById('userPaper');
userPaper.addEventListener('click', () => game('Paper'));
  //SCISSORS
let playerScissors = document.getElementById('userScissors');
userScissors.addEventListener('click', () => game('Scissors'));


// FUNCTION TO GENERATE RANDOM COMPUTER GUESSES
function computerPlay() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  if (randInt === 1) {
    document.getElementById('compImg').src="images/stone.png";
    return 'Rock';
  } else if (randInt === 2) {
    document.getElementById('compImg').src="images/paper.png";
    return 'Paper';
  } else if (randInt === 3) {
    document.getElementById('compImg').src="images/scissors.png";
    return 'Scissors';
  }
};


// FUNCTION TO PLAY A SINGLE ROUND
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    let result = 'Draw';
    document.getElementById('resultImg').src="images/arm-wrestling.gif";
    document.getElementById("resultDiv").style.backgroundColor = "goldenrod";
    gameScore++;
    return result;
  } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') || (computerSelection === 'Paper' && playerSelection === 'Scissors') || (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
    let result = 'Player Wins';
    document.getElementById('resultImg').src="images/viking.gif";
    document.getElementById("resultDiv").style.backgroundColor = "mediumseagreen";
    playerScore++;
    gameScore++;
    return result;
  } else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
    let result = 'Computer Wins';
    document.getElementById('resultImg').src="images/computer.gif";
    document.getElementById("resultDiv").style.backgroundColor = "brown";
    compScore++;
    gameScore++;
    return result;  
    }
  
};


// MAIN FUNCTION TO PLAY MULTIPLE GAMES
function game(playerSelection) {
  let computerSelection = computerPlay();  
  let result = playRound(computerSelection, playerSelection); 
  document.getElementById("compPoints").innerHTML = "COMPUTER: <br>" + compScore;
  document.getElementById("playerPoints").innerHTML = "PLAYER: <br>" + playerScore;
  document.getElementById("compSelect").innerHTML = "COMPUTER: <br>" + computerSelection;
  document.getElementById("result").innerHTML = "ROUND " + gameScore + ": <br>" + result;
  // IF 5 GAMES HAVE BEEN PLAYED DISPLAY GAME OVER AND RESULTS
  if ((playerScore >= 5) || (compScore >= 5)) {
    gameOver();
    console.log("GAME OVER");
  }
};


// FUNCTION TO DISPLAY FINAL RESULTS IN MODAL
function gameOver() {
  if (playerScore > compScore) {
    let finalResult = "You Win!";
    successSound.play();
    openModal();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";
    document.getElementById("playerScore").innerHTML = "PLAYER: <br>" + playerScore;
    document.getElementById("compScore").innerHTML = "COMPUTER: <br>" + compScore;
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById('finalResultImg').src="images/viking.gif";
    document.getElementById("modalScreen").style.backgroundColor = "mediumseagreen";
    document.getElementById("myModal").style.backgroundColor = "black"; 
  } else if (compScore > playerScore) {
    let finalResult = "Computer Wins!";
    failureSound.play();
    openModal();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";
    document.getElementById("playerScore").innerHTML = "PLAYER: <br>" + playerScore;
    document.getElementById("compScore").innerHTML = "COMPUTER: <br>" + compScore;
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById('finalResultImg').src="images/computer.gif";
    document.getElementById("modalScreen").style.backgroundColor = "brown";
    document.getElementById("myModal").style.backgroundColor = "black";
  } else {
    let finalResult = "Draw!";
    drawAudio.play();
    openModal();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";
    document.getElementById("playerScore").innerHTML = "PLAYER: <br>" + playerScore;
    document.getElementById("compScore").innerHTML = "COMPUTER: <br>" + compScore;
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById('finalResultImg').src="images/arm-wrestling.gif";
    document.getElementById("modalScreen").style.backgroundColor = "goldenrod";
    document.getElementById("myModal").style.backgroundColor = "black";
  }
};


// VARIABLES TO GET MODAL AND CLOSE MODAL
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
  
// FUNCTION TO OPEN END OF GAME MODAL SCREEN
function openModal() {
  modal.style.display = "block";
};
// FUNCTION TO CLOSE MODAL WHEN CLOSE (X) BUTTON CLICKED
span.onclick = function() {
  modal.style.display = "none";
  restartGame();
};
// FUNCTION TO CLOSE MODAL WHEN USER CLICKS OUTSIDE OF MODAL
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    restartGame();
  }
};


// FUNCTION TO RESET ALL VALUES AND RESTART GAME
function restartGame() {
  playerScore = 0;
  compScore = 0;
  gameScore = 0;
  document.getElementById("compSelect").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("compPoints").innerHTML = "COMPUTER: <br>" + 0;
  document.getElementById("playerPoints").innerHTML = "PLAYER: <br>" + 0;
  modal.style.display = "none";
  document.getElementById("modalScreen").style.backgroundColor = "white";
  document.getElementById('compImg').src="images/rock-paper-scissors.png";
  document.getElementById('resultImg').src="images/rock-paper-scissors.png";
  document.getElementById("resultDiv").style.backgroundColor = "rgb(30, 30, 30)";
};
