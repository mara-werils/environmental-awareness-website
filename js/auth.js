document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");
    const signupLink = document.getElementById("signup-link");
    const logoutLink = document.getElementById("logout-link");
    const profileLink = document.getElementById("profile-link");

    // Получаем данные пользователя из localStorage
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Обновляем навигацию на основе статуса входа
    if (storedUsername) {
        loginLink.classList.add("d-none");
        signupLink.classList.add("d-none");
        logoutLink.classList.remove("d-none");
        profileLink.classList.remove("d-none");
    } else {
        loginLink.classList.remove("d-none");
        signupLink.classList.remove("d-none");
        logoutLink.classList.add("d-none");
        profileLink.classList.add("d-none");
    }

    // Обработка формы входа
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            // Проверяем введенные данные с сохраненными
            if (usernameInput === storedUsername && passwordInput === storedPassword) {
                document.getElementById("login-message").innerText = 'Login successful! Redirecting...';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                document.getElementById("login-message").innerText = 'Invalid username or password.';
            }
        });
    }

    // Обработка выхода из системы
    if (logoutLink) {
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("password");

            window.location.href = 'index.html';
        });
    }
});
