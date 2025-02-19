const login = document.getElementById("login");
const username = document.getElementById("login__username");
const password = document.getElementById("login__password");
const button = document.querySelector(".login__button")
const messageError = document.querySelector(".login__error");
const mailCorrect = "hei.irina.4@gmail.com"
const motDePasseCorrect = "hello";
let tentative = 0;

username.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
        password.focus();
    }
});

login.addEventListener("submit", (e) => {
    e.preventDefault();
    button.innerText = ".....";

    setTimeout(() => {
        if (username.value !== mailCorrect ||
            password.value !== motDePasseCorrect) {
            tentative++;
            messageError.style.top = "30px";
            messageError.style.opacity = "1";
            if (tentative >= 2) {
                messageError.classList.add("vibrate");
                setTimeout(() => messageError.classList.remove("vibrate"), 900);
            }
            button.innerText = "Login Now";
        } else {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "travel.html";
        }
    }, 2000);
});


button.addEventListener("mousedown", (e) => {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.currentTarget.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 500);
});
