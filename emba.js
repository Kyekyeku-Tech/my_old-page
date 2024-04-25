 function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const targetDate = new Date(Date.UTC(2024, 3, 27, 2, 0, 0)); // year, monthIndex (April is 3), day, hours, minutes, seconds
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        } else {
            countdownElement.textContent = "We've embarked on our journey!";
        }
    }

    setInterval(updateCountdown, 1000);
