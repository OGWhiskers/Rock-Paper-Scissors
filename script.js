function getComputerChoice() {

    let pcChoice = ['Rock', 'Paper', 'Scissors'];

    let randomPcChoice = pcChoice[Math.floor(Math.random()*pcChoice.length)];

    // console.log(randomPcChoice);
    return randomPcChoice;
}

// getComputerChoice();

function rpsRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper or Scissors?');
   

    let playerSelectionTwo = playerSelection.toLowerCase();

   

    computerSelection = getComputerChoice();

    let computerSelectionTwo = computerSelection.toLowerCase();
   

    if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'scissors') {
      return('You win! Rock beats Scissors');
    } else if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'paper') {
        return('You lose! Paper beats Rock');
    } else if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'rock') {
        return('Its a draw!');
    }
    

    else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'paper') {
        return('You win! Scissors beats Paper');
    } else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'rock') {
        return('You lose! Rock beats Scissor');
    } else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'scissors') {
        return('Its a draw');
    }  
    
    else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'rock') {
        return('You win! Paper Beats Rock');
    }  else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'scissors') {
        return('You lose! Scissors beats Paper ');
    }  else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'paper') {
        return('Its a draw!');
    }  
     else {
        return('Unrecognized Choice');
    }

}

// rpsRound(); 
console.log(rpsRound());


// Try make above function more efficient with switch statements.

function game() {
    
    for(let i = 0; i < 5; i++) {
       console.log(rpsRound());
    }
}
game();


