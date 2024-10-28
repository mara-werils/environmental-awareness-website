document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    if (!loginLink || !logoutLink) {
        console.error("Elements with ID 'login-link' or 'logout-link' are missing.");
        return;
    }

    const username = localStorage.getItem("username");

    if (username) {
        loginLink.classList.add("d-none");
        logoutLink.classList.remove("d-none");
    } else {
        loginLink.classList.remove("d-none");
        logoutLink.classList.add("d-none");
    }

    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                localStorage.setItem("username", username);
                document.getElementById("login-message").innerText = 'Login successful! Redirecting...';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                document.getElementById("login-message").innerText = 'Invalid username or password.';
            }
        });
    }

    logoutLink.addEventListener("click", function () {
        localStorage.removeItem("username");
        alert("You have logged out.");
        window.location.href = 'login.html';
    });
});
