const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav__menu .nav__link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const signOut = document.querySelectorAll(".button__sign__out");
const messageSuccess = document.querySelector(".form__image p");
const formReservation = document.querySelector("#form");
const about = document.querySelector(".reservation__section");
const footerSignUp = document.querySelector(".footer__submit");
const footerSent = document.querySelector(".footer__input p");
const navMenu = document.querySelector(".nav__menu");


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});

if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = "index.html";
}
signOut.forEach(button => {
    button.addEventListener("click", () => {
        setTimeout(() => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = "index.html";
        }, 1000);
    });
});

document.querySelectorAll("button, .destination__price, .form__submit").forEach(button => {
    button.addEventListener("click", (e) => {
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
});

let count1 = 0;
let count2 = 0;
let count3 = 0;
let started = false;

function startCounters() {
    if (started) return;
    started = true;

    const intervalCount = setInterval(() => {
        if (count1 < 100) {
            statCount.textContent = count1++;
        } else {
            clearInterval(intervalCount);
        }
    }, 60);

    const intervalYears = setInterval(() => {
        if (count2 < 221) {
            countriesCount.textContent = count2++;
        } else {
            clearInterval(intervalYears);
        }
    }, 27);

    const intervalExperience = setInterval(() => {
        if (count3 < 51) {
            experienceCount.textContent = count3++;
        } else {
            clearInterval(intervalExperience);
        }
    }, 118);
};

window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
        startCounters();
    }
});

footerSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    footerSent.style.opacity = "1";
    setTimeout(() => {
        footerSent.style.opacity = "0";
    },2000);
});

formReservation.addEventListener("submit", (e) => {
    e.preventDefault();
    messageSuccess.style.opacity = "1";
    messageSuccess.style.transform = "translateX(0px)";
    
    setTimeout(() => {
        messageSuccess.style.opacity = "0";
        messageSuccess.style.transform = "translateX(-50px)";
    }, 2500);
});

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener("click", (event) => {
    // Vérifie si le menu est ouvert
    if (document.body.classList.contains("show-mobile-menu")) {
        // Ferme le menu si on clique en dehors de la navbar et des boutons
        if (!navMenu.contains(event.target) && event.target !== menuOpenButton) {
            document.body.classList.remove("show-mobile-menu");
        }
    }
})