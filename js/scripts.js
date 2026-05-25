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
        currentLanguage.textContent = button.querySelector(".lang-short").textContent;
        dropdown.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!languageSelect.contains(e.target)) {
        dropdown.classList.remove("active")
    }
})

// Ricard end
