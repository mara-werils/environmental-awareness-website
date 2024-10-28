document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const alertMessage = document.getElementById('alert-message');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
    
        let errors = [];
    
        if (!name.value) {
            errors.push('Please enter your name.');
        }
    
        if (!email.value.includes('@')) {
            errors.push('Please enter a valid email address.');
        }
    
        if (!message.value) {
            errors.push('Please enter your message.');
        }
    
        if (errors.length > 0) {
            alertMessage.innerHTML = errors.join('<br>');
            alertMessage.classList.add('alert', 'alert-danger');
            alertMessage.style.display = 'block';
        } else {
            alertMessage.style.display = 'none';
            this.submit();
        }
    });
    

const storedUsername = 'user1';
const storedPassword = 'password123';

function handleLogin() {
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        localStorage.setItem('username', inputUsername);
        alert('Вы успешно вошли!');
    } else {
        alert('Неверное имя пользователя или пароль.');
    }
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    handleLogin();
});
