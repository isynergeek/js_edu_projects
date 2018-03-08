let min = 1,
    max = 10,
    winningNum = getRandomNum(1, 10),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});



// Listen for guess
guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red', true);
    }

    if (guess === winningNum) {
        //Game over - won
        gameOver(true, `${winningNum} is correct! YOU WIN!`);
    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong
            // Change color to red
            guessInput.style.borderColor = 'red';
            // Clear Input
            guessInput.value = '';
            // Tell user its wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red', true);
        }

    }

});




// Game over
function gameOver(won, msg) {
    
    let color;
    won === true ?  color = 'green' : color = 'red'
    
    // Disable input
    guessInput.disabled = true;
    // Change border color
    //guessInput.borderColor = color;
    // Set message
    setMessage(msg, color, true);

    // Play again?

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


// Get random number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color, timeOut) {
    message.style.color = color;
    message.textContent = msg;
    // Time out to hide message
    if (timeOut) {
        setTimeout(() => {
            message.textContent = '';
        }, 5000);

    }
}