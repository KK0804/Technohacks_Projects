let countdown;
let timeRemaining;
const display = document.getElementById('time-display');

function startTimer() {
    if (!timeRemaining) {
        timeRemaining = 3600; // Set initial time in seconds (e.g., 1 hour)
    }
    
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            clearInterval(countdown);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timeRemaining = 3600; // Reset to initial time in seconds
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

