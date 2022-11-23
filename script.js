function getComputerChoice() {

    let pcChoice = ['Rock', 'Paper', 'Scissors'];

    let randomPcChoice = pcChoice[Math.floor(Math.random()*pcChoice.length)];

    // console.log(randomPcChoice);
    return randomPcChoice;
}

// getComputerChoice();

function rpsRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper or Scissors?');
    console.log(playerSelection);

    let playerSelectionTwo = playerSelection.toLowerCase();

    console.log(playerSelectionTwo);

    computerSelection = getComputerChoice();
    console.log(computerSelection);

    let computerSelectionTwo = computerSelection.toLowerCase();
    console.log(computerSelectionTwo);

    if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'scissors') {
        console.log('You win! Rock beats Scissors');
    } else if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'paper') {
        console.log('You lose! Paper beats Rock');
    } else if (playerSelectionTwo == 'rock' && computerSelectionTwo == 'rock') {
        console.log('Its a draw!');
    }
    

    else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'paper') {
        console.log('You win! scissors beats paper');
    } else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'rock') {
        console.log('You lose! Rock beats Scissor');
    } else if (playerSelectionTwo == 'scissors' && computerSelectionTwo == 'scissors') {
        console.log('Its a draw');
    }  
    
    else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'rock') {
        console.log('You win! paper Beats Rock');
    }  else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'scissors') {
        console.log('You lose! Scissors beats paper ');
    }  else if (playerSelectionTwo == 'paper' && computerSelectionTwo == 'paper') {
        console.log('Its a draw!');
    }  
    else {
        console.log('Something is wrong');
    }

}

rpsRound(); 
// Try make above function more efficient with switch statements.
// Need to make it case insensitive




