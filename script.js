function getComputerChoice() {

    let pcChoice = ['Rock', 'Paper', 'Scissors'];

    let randomPcChoice = pcChoice[Math.floor(Math.random()*pcChoice.length)];

    // console.log(randomPcChoice);
    return randomPcChoice;
    // console.log(randomPcChoice);
}



function rpsRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper or Scissors?');
   
    let playerSelectionTwo = playerSelection.toLowerCase();

    let rock = playerSelectionTwo === 'rock';

    let scissor = playerSelectionTwo === 'scissors';

    let paper = playerSelectionTwo === 'paper'

    
    computerSelection = getComputerChoice();

    let computerSelectionTwo = computerSelection.toLowerCase();

    let rockCom =  computerSelectionTwo === 'rock';
    let scissorCom = computerSelectionTwo === 'scissors';

    let paperCom = computerSelectionTwo === 'paper';


    if ( rock && scissorCom) {
      return('You win! Rock beats Scissors');
    } else if (rock && paperCom) {
        return('You lose! Paper beats Rock');
    } else if (rock && rockCom) {
        return('Its a draw!');
    }
    

    else if (scissor && paperCom) {
        return('You win! Scissors beats Paper');
    } else if (scissor && rockCom) {
        return('You lose! Rock beats Scissor');
    } else if (scissor && scissorCom) {
        return('Its a draw');
    }  
    
    else if (paper && rockCom) {
        return('You win! Paper Beats Rock');
    }  else if (paper && scissorCom) {
        return('You lose! Scissors beats Paper ');
    }  else if (paper && paperCom) {
        return('Its a draw!');
    }  
     else {
        return('Unrecognized Choice');
    }


}

// rpsRound(); 
// console.log(rpsRound());


// Try make above function more efficient with switch statements.
// Maybe create separate function to keep score:


function game() {

    for(let i = 0; i < 5; i++) {
       console.log(rpsRound());
    }
}
game();


