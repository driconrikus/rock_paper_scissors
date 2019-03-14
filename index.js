let userScore = 0
let cpuScore = 0
const buttons = document.querySelectorAll('button')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(userSel) {
    let cpuSel = computerPlay()
    let result = ""

    if ((userSel == 'rock' && cpuSel == 'scissors') ||
        (userSel == 'scissors' && cpuSel == 'paper') ||
        (userSel == 'paper' && cpuSel == 'rock')) {
        
        userScore += 1
        result = ('<br><br><strong>You win!</strong><br> ' + ' You chose: ' + userSel + ' <br>CPU chose: ' + cpuSel + '.'
            + "<br><br>Player score: " + userScore + "<br>CPU score: " + cpuScore)

        if (userScore == 5) {
            result += '<br><br><strong><p style="color:green">You win the game!</p></strong>Press the Restart button to play again.'
            disableButtons()
        }
    }
    else if (userSel == cpuSel) {
        result = ('<br><br><strong>It\'s a tie!</strong><br>You both chose ' + userSel + '.'
            + "<br><br>Player score: " + userScore + "<br>CPU score: " + cpuScore)
    }
    else {
        cpuScore += 1
        result = ('<br><br><strong>You lose!</strong><br> ' + 'You chose:' + userSel + '<br> CPU chose: ' + cpuSel + '.'
            + "<br><br>Player score: " + userScore + "<br>CPU score: " + cpuScore)

        if (cpuScore == 5) {
            result += '<br><br><strong><p style="color:red">CPU wins the game!</p></strong>Press the Restart button to play again.'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})