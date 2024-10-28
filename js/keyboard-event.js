document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.click();
    }

    if (event.ctrlKey && event.key === 'h') {
        const popup = document.getElementById('popupForm');
        popup.style.display = 'block';
    }
});
