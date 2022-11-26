// Computer Choice: ###########################################


function getComputerChoice() {
    const com = ['Rock', 'Paper', 'Scissors']

    let comChoice = com[Math.floor(Math.random()* com.length)]

    let comChoiceAction = comChoice.toLowerCase();
    return(comChoiceAction);
}

// Computer Choice End ###########################################

// Single Round ###########################################

function singleRound(playerSelection,computerSelection) {

    playerSelection = prompt('Rock, Paper or Scissors?');

    let playerSelectionTwo = playerSelection.toLowerCase();
 
    // New Variables to work with
    let Rock = playerSelectionTwo === 'rock';
    let Paper = playerSelectionTwo === 'paper';
    let Scissors = playerSelectionTwo === 'scissors';


    computerSelection = getComputerChoice();
    console.log(computerSelection);

    let ComRock =  computerSelection === 'rock';
    let ComScissor = computerSelection === 'scissors';
    let ComPaper = computerSelection === 'paper';


    // Dashboard Function
    function dashboard(){
        let UserScore = 0;
        let ComScore = 0;

        if (Rock && ComScissor || Paper && ComRock || Scissors && ComPaper ){
            let UserScoreAdd = `You won, your current score is: ${UserScore + 1}`;
            console.log(UserScoreAdd + ' \n' + ComScore);
        } else if (ComRock && Scissors || ComPaper && Rock || ComScissor && Paper) {
            let ComScoreAdd = `Computer has a score of ${ComScore + 1} points`;
            console.log(ComScoreAdd + ' \n' + ComScore);
        } else {
            console.log(UserScore+ ' \n' + ComScore);
        }   
    }
    dashboard();






}
singleRound();

// Single Round End ###########################################