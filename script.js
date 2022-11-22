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

    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win! Rock beats Scissors');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('You lose! Paper beats Rock');
    } else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        console.log('Its a draw!');
    }
    

    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win! Scissors beats Paper');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('You lose! Rock beats Scissor');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        console.log('Its a draw');
    }  
    
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You win! Paper Beats Rock');
    }  else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lose! Scissors beats Paper ');
    }  else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        console.log('Its a draw!');
    }  
    else {
        console.log('Something is wrong');
    }

}

rpsRound();

