document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            toggleThemeBtn.textContent = "Switch to Day Theme";
        } else {
            toggleThemeBtn.textContent = "Switch to Night Theme";
        }
    }

    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
            this.textContent = "Switch to Day Theme";
        } else {
            localStorage.setItem('theme', 'light-theme');
            this.textContent = "Switch to Night Theme";
        }
    });
});
