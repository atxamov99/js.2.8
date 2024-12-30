alert("login 'mars' password '2022'")
const passwordEye = document.querySelector('#password');
const submitButton = document.querySelector('#submit-btn');
const emailInput = document.querySelector('#main_input-one');
const errorMessage = document.getElementById('error-message');

// To'g'ri login va parol
const validLogin = "mars"; // To'g'ri login
const validPassword = "2022";  // To'g'ri parol

// Sahifani ochish bilan birga login va parolni localStorage'dan tekshiramiz
window.onload = () => {
    const savedLogin = localStorage.getItem("login");
    const savedPassword = localStorage.getItem("password");

    if (savedLogin && savedPassword) {
        emailInput.value = savedLogin;
        passwordEye.value = savedPassword;
    }
};

const showPassword = () => {
    passwordEye.type = "text";
};

const hidePassword = () => {
    passwordEye.type = "password";
};

const validateLogin = () => {
    const enteredLogin = emailInput.value;
    const enteredPassword = passwordEye.value;

    // Login va parolni tekshirish
    if (enteredLogin === validLogin && enteredPassword === validPassword) {
        // Login va parol to'g'ri bo'lsa, localStorage'ga saqlash
        localStorage.setItem("login", enteredLogin);
        localStorage.setItem("password", enteredPassword);
        window.location.href = "two.html"; // To'g'ri login bo'lsa, ikkinchi sahifaga o'tish
    } else {
        // Xato login yoki parol bo'lsa
        errorMessage.style.display = "block";
        emailInput.classList.add("error");
        passwordEye.classList.add("error");
        submitButton.disabled = true;
        submitButton.classList.remove("active");
    }
};

const updateButtonState = () => {
    if (emailInput.value.trim() !== "" && passwordEye.value.trim() !== "") {
        submitButton.disabled = false;
        submitButton.classList.add("active");
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
    }
};

// Enter tugmasini bosganda login qilish
function checkEnter(event) {
    if (event.key === "Enter") {
        validateLogin();
    }
}

// LocalStorage'dan o'chirish uchun, submit tugmasi bosilganda
const clearLocalStorage = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
};

submitButton.addEventListener('click', clearLocalStorage);
