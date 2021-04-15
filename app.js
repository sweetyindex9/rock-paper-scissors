function game () {
    let pScore = 0;
    let cScore = 0;
  
    
    function startGame () {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
       introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    
    function computerPlay() {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
    
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          
          const computerNumber = Math.floor(Math.random() * 3);
          const computerSelection = computerOptions[computerNumber];
  
          setTimeout(() => {
            
            playRound(this.textContent, computerSelection);
            
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerSelection}.png`;
          });
          
        });
      });
    };
  
    function updateScore() {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    function playRound(playerSelection, computerSelection) {
      
      const winner = document.querySelector(".winner");
     
      
      if (playerSelection === computerSelection) {
        winner.textContent = "It is a tie";
        return;
      }
      
      if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          winner.textContent = "Player Wins";
          
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      
      if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      
      if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
    startGame()
    computerPlay()
    
  };
  game();
