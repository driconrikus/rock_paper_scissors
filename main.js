// User score and CPU scores, play buttons variables 
let userScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('.play');

// This function enables the computer to play the game.
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// This function will disable play buttons after you or the computer reaches five points.
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

// This function will enable you to play the game and  the computer to make a move after you. The contents of this function should be self-explanatory.
function playRound(userSel) {
    let cpuSel = computerPlay();
    let result = "";

    if ((userSel == 'rock' && cpuSel == 'scissors') ||
        (userSel == 'scissors' && cpuSel == 'paper') ||
        (userSel == 'paper' && cpuSel == 'rock')) {
        
        userScore += 1;
        result = `<br><br><strong>You win!</strong><br> You chose: ${userSel}. <br> CPU chose: ${cpuSel}. <br><br>Player score: ${userScore} <br>CPU: score: ${cpuScore}`;

        if (userScore == 5) {
            result = `<br><br><img src="assets/win.png" height="32" width="32"><br><strong><p style="color:green">You win the game!</p></strong>Press the <strong>Restart</strong> button to play again.`;
            disableButtons()
        }
    }
    else if (userSel == cpuSel) { 
        result = `<br><br><strong>Draw!</strong><br>You both chose ${userSel}. <br><br>Player: score: ${userScore} <br>CPU score: ${cpuScore}`;
    }
    else {
        cpuScore += 1;
        result = `<br><br><strong>You lose!</strong><br> You chose ${userSel}. <br>CPU chose ${cpuSel}. <br><br>Player score: ${userScore} <br>CPU score: ${cpuScore}`;

        if (cpuScore == 5) {
            result += '<br><br><img src="assets/lose.png" height="32" width="32"><br><strong><p style="color:red">CPU wins the game!</p></strong>Press the <strong>Restart</strong> button to play again.';
            disableButtons();
        }
    }

// This will print the results.
    document.getElementById('result').innerHTML = result;
    return;
}

// Event listener for the play buttons to work.
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})
 