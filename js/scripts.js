'use strict';
// Ricard

const languageSelect = document.getElementById("language-select");
const dropdown = document.querySelector(".language-dropdown");
const currentLanguage = document.getElementById("current-language");

languageSelect.addEventListener("click", () => {
    dropdown.classList.toggle("active")
})

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        currentLanguage.textContent = button.textContent;
        dropdown.classList.remove("active")
    })
})

document.addEventListener("click", (e) => {
    if (!languageSelect.contains(e.target)) {
        dropdown.classList.remove("active")
    }
})

// Ricard end

//Burger Menu
const burgerButton = document.querySelector("#burger-button");
const burgerMenu = document.querySelector(".burger-menu")
const ul = document.querySelector("header").querySelector("ul");
const closeButton = burgerMenu.querySelector("#closeMenu");

burgerButton.addEventListener("click", () => {  
    burgerMenu.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    burgerMenu.style.display = "none";
    document.querySelector("body").style.overflow = "auto";

});




