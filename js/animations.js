document.querySelectorAll('.alert-message').forEach(alert => {
    alert.style.transition = 'all 0.5s ease';
    alert.style.opacity = 1;
    setTimeout(() => {
        alert.style.opacity = 0;
    }, 4000);
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});


document.querySelector('a[href="#main-content"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
});





document.querySelectorAll('.animated-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        let rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600); // Удаление ripple-эффекта после анимации
    });
});




