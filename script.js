const themeButton = document.querySelector("#theme-button");
const body = document.body;

themeButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
};
