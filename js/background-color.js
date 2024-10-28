document.getElementById('colorToggleBtn').addEventListener('click', function() {
        const body = document.body;
        const isBlack = body.style.backgroundColor === 'black';
    
        if (isBlack) {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }
    });
    