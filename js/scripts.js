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
const ul = document.querySelector("header").querySelector("ul");

burgerButton.addEventListener("click", () => {  
    if(ul.style.display != "flex"){
        ul.style.display = "flex";
        ul.style.width = "100%";
        document.querySelector("body").style.overflow = "hidden";

        burgerButton.style.border = "5px solid black";
        burgerButton.style.color = "black";
        burgerButton.style.position = "fixed";
        burgerButton.style.top = "1.5rem";
        burgerButton.style.left = "1.5rem";
    }
    else{
        ul.style.display = "none";
        ul.style.width = "0%";
        document.querySelector("body").style.overflow = "auto";
        burgerButton.style.border = "0";
        burgerButton.style.color = document.querySelector(".info") ? "white" : "#2E2BD0";
        burgerButton.style.position = "static";
    }
});



