document.getElementById('readMoreBtn').addEventListener('click', function() {
    const moreContent = document.getElementById('moreContent');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'Read Less'; 
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});


function getGreetingBasedOnTime() {
    const greetingDisplay = document.getElementById('greetingDisplay');
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';

    switch (true) {
        case (hour < 12):
            greeting = 'Good Morning!';
            break;
        case (hour >= 12 && hour < 18):
            greeting = 'Good Afternoon!';
            break;
        case (hour >= 18 && hour < 22):
            greeting = 'Good Evening!';
            break;
        default:
            greeting = 'Good Night!';
    }

    greetingDisplay.textContent = greeting;
}

window.onload = getGreetingBasedOnTime;

