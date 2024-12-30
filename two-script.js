// HTML elementlari
const passwordEye = document.querySelector('#password');
const submitButton = document.querySelector('#submit-btn');
const emailInput = document.querySelector('#main_input-one');
const logoutButton = document.querySelector('#logout-btn');
const errorMessage = document.getElementById('error-message');

// To'g'ri login va parol
const validLogin = "user@example.com"; // To'g'ri login
const validPassword = "password123";  // To'g'ri parol

// Sahifani ochish bilan birga login va parolni localStorage'dan tekshiramiz
window.onload = () => {
    const savedLogin = localStorage.getItem("login");
    const savedPassword = localStorage.getItem("password");

    // Agar localStorage'da saqlangan login va parol bo'lsa, avtomatik tarzda kiritish
    if (savedLogin && savedPassword) {
        emailInput.value = savedLogin;
        passwordEye.value = savedPassword;
        
        logoutButton.style.display = "block"; // Logout tugmasini ko‘rsatamiz
    }
};

// Parolni ko'rsatish
const showPassword = () => {
    passwordEye.type = "text";
};

// Parolni yashirish
const hidePassword = () => {
    passwordEye.type = "password";
};

// Login va parolni tekshirish
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

// Buttonni faollashtirish
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
    logoutButton.style.display = "none"; // Logout tugmasini yashirish
    emailInput.value = ''; // Inputlarni tozalash
    passwordEye.value = '';
    alert("You have logged out successfully.");
};

// Logout tugmasi bosilganda localStorage'dan ma'lumotni o‘chirish
logoutButton.addEventListener('click', clearLocalStorage);

// Submit tugmasi bosilganda, localStorage'dan ma'lumotni o‘chirish
submitButton.addEventListener('click', clearLocalStorage);
