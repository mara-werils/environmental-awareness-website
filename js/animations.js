document.querySelectorAll('.alert-message').forEach(alert => {
    alert.style.transition = 'all 0.5s ease';
    alert.style.opacity = 1;
    setTimeout(() => {
        alert.style.opacity = 0;
    }, 4000);
});
