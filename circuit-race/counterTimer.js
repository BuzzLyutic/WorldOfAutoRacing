   // Set the target date for the countdown
   const targetDate = new Date("2024-02-29");
   
   function calculateTimeRemaining() {
       const currentDate = new Date();
       const timeRemaining = targetDate - currentDate;
       
       // Calculate days, hours, minutes, and seconds
       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
       
       // Return an object with the calculated values
       return {
           days,
           hours,
           minutes,
           seconds
       };
   }

   function updateTimerDisplay() {
    const { days, hours, minutes, seconds } = calculateTimeRemaining();
    
    // Update the countdown elements with the calculated values
    document.getElementById('days').textContent = formatTimeValue(days);
    document.getElementById('hours').textContent = formatTimeValue(hours);
    document.getElementById('minutes').textContent = formatTimeValue(minutes);
    document.getElementById('seconds').textContent = formatTimeValue(seconds);
}

function formatTimeValue(value) {
    return String(value).padStart(2, "0");
}

function startCountdown() {
    updateTimerDisplay(); // Update display immediately
    
    // Update the timer display every second
    setInterval(() => {
        updateTimerDisplay();
    }, 1000);
}

// Call the startCountdown function to begin the countdown
startCountdown();
