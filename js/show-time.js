document.addEventListener('DOMContentLoaded', () => {
    const timeBtn = document.getElementById('showTimeBtn');
    const timeDisplay = document.getElementById('timeDisplay');

    timeBtn.addEventListener('click', () => {
        const currentTime = new Date().toLocaleTimeString();
        timeDisplay.textContent = `Current time: ${currentTime}`;
    });
});
