'use strict';
// Ricard

// Lang button

const languageSelect = document.getElementById("language-select")
const dropdown = document.querySelector(".language-dropdown")
const currentLanguage = document.getElementById("current-language")

languageSelect.addEventListener("click", () => {
    dropdown.classList.toggle("active")
})

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        currentLanguage.textContent = button.querySelector(".lang-short").textContent;
        dropdown.classList.remove("active")
    })
})

document.addEventListener("click", (e) => {
    if (!languageSelect.contains(e.target)) {
        dropdown.classList.remove("active")
    }
})

// LAng buttom

// Feadback

const comments = document.querySelectorAll('.comment')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const counter = document.querySelector('.number-one')
let currentCenter = 1
let positions = ['left', 'center', 'right']

function updateCards() {
    comments.forEach((card, index) => {
        card.classList.remove('left', 'center', 'right')
        card.classList.add(positions[index])
    });
    counter.textContent = `${currentCenter + 1}/${comments.length}`
}

if(counter){
updateCards()

nextBtn.addEventListener('click', () => {
    positions.unshift(positions.pop())
    currentCenter++
    if(currentCenter >= comments.length){
        currentCenter = 0
    }
    updateCards();
})

prevBtn.addEventListener('click', () => {
    positions.push(positions.shift())
    currentCenter--
    if(currentCenter < 0){
        currentCenter = comments.length - 1
    }
    updateCards()
})}

// Feadback

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




