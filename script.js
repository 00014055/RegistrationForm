const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const birthDate = document.getElementById('birthDate');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const birthDateError = document.getElementById('birthDateError');


// Реализована валидация полей формы на Javascript.
function validateName(name) {
    // Ограничение длины полей Имя и Фамилия до 30 символов
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,30}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
//Поле Электронный адрес может содержать только валидный email-адрес
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function validateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age >= 18;
}

function checkFormValidity() {
    if (
        validateName(firstName.value) &&
        validateName(lastName.value) &&
        validateEmail(email.value) &&
        validatePassword(password.value) &&
        //Значения полей Пароль и Подтверждение пароля должны совпадать
        password.value === confirmPassword.value &&
        validateAge(birthDate.value)
    ) {
    //Кнопка "Отправить" заблокирована свойством "disabled", пока пользователь не введет валидные значения.
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

firstName.addEventListener('blur', () => {
    if (!validateName(firstName.value)) {
        firstNameError.textContent = 'Введите корректное имя.';
    } else {
        firstNameError.textContent = '';
    }
    checkFormValidity();
});

lastName.addEventListener('blur', () => {
    if (!validateName(lastName.value)) {
        lastNameError.textContent = 'Введите корректную фамилию.';
    } else {
        lastNameError.textContent = '';
    }
    checkFormValidity();
});

email.addEventListener('blur', () => {
    if (!validateEmail(email.value)) {
        emailError.textContent = 'Введите корректный email.';
    } else {
        emailError.textContent = '';
    }
    checkFormValidity();
});

password.addEventListener('blur', () => {
    if (!validatePassword(password.value)) {
        passwordError.textContent = 'Пароль должен содержать минимум 8 символов, одну цифру, одну заглавную и строчную буквы, и один спецсимвол.';
    } else {
        passwordError.textContent = '';
    }
    checkFormValidity();
});

confirmPassword.addEventListener('blur', () => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Пароли не совпадают.';
    } else {
        confirmPasswordError.textContent = '';
    }
    checkFormValidity();
});

birthDate.addEventListener('blur', () => {
    if (!validateAge(birthDate.value)) {
        birthDateError.textContent = 'Возраст должен быть не младше 18 лет.';
    } else {
        birthDateError.textContent = '';
    }
    checkFormValidity();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма успешно отправлена!');
});
