document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const backBtns = document.querySelectorAll(".back-btn");

    let currentStep = 0;

    function showCurrentStep() {
        formSteps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
    }

    function showErrorMessage(input, message) {
        let errorElement = input.parentElement.querySelector(".error-message");
        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error-message", "text-danger");
            input.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
        input.classList.add("is-invalid");
    }

    function clearErrorMessage(input) {
        const errorElement = input.parentElement.querySelector(".error-message");
        if (errorElement) {
            errorElement.textContent = "";
        }
        input.classList.remove("is-invalid");
    }

    nextBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const inputs = formSteps[currentStep].querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                clearErrorMessage(input); // Очистка предыдущего сообщения об ошибке

                if (!input.checkValidity()) {
                    valid = false;

                    // Выбор сообщения об ошибке в зависимости от типа проверки
                    if (input.validity.valueMissing) {
                        showErrorMessage(input, "This field is required.");
                    } else if (input.validity.typeMismatch) {
                        showErrorMessage(input, "Please enter a valid value.");
                    } else if (input.validity.tooShort) {
                        showErrorMessage(input, `Minimum length is ${input.minLength} characters.`);
                    } else if (input.validity.tooLong) {
                        showErrorMessage(input, `Maximum length is ${input.maxLength} characters.`);
                    }
                }
            });

            if (valid) {
                currentStep++;
                if (currentStep < formSteps.length) {
                    showCurrentStep();
                }
            }
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            currentStep--;
            if (currentStep >= 0) {
                showCurrentStep();
            }
        });
    });

    showCurrentStep();
});
