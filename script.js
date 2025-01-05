alert("login 'mars' password '2022'")
const passwordEye = document.querySelector('#password');
const submitButton = document.querySelector('#submit-btn');
const emailInput = document.querySelector('#main_input-one');
const errorMessage = document.getElementById('error-message');


const validLogin = "mars"; 
const validPassword = "2022";  

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

    if (enteredLogin === validLogin && enteredPassword === validPassword) {
        localStorage.setItem("login", enteredLogin);
        localStorage.setItem("password", enteredPassword);
        window.location.href = "two.html";
    } else {
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

function checkEnter(event) {
    if (event.key === "Enter") {
        validateLogin();
    }
}

const clearLocalStorage = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
};

submitButton.addEventListener('click', clearLocalStorage);
