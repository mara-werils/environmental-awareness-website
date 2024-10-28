document.addEventListener('DOMContentLoaded', () => {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');

    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        const formattedDateTime = now.toLocaleDateString('en-US', options);
        dateTimeDisplay.textContent = formattedDateTime;
    }

    setInterval(updateDateTime, 1000);
});