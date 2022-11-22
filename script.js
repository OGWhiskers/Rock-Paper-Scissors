function getComputerChoice() {

    let pcChoice = ['Rock', 'Paper', 'Scissor'];

    let randomPcChoice = pcChoice[Math.floor(Math.random()*pcChoice.length)];

    console.log(randomPcChoice);
    return getComputerChoice;
}

// getComputerChoice();


