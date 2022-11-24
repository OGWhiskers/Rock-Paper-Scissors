function getComputerChoice() {
    const com = ['Rock', 'Paper', 'Scissors']

    let comChoice = com[Math.floor(Math.random()* com.length)]

    let comChoiceAction = comChoice.toLowerCase();
    console.log(comChoiceAction);
}
getComputerChoice();