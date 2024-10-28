document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
