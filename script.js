const themeButton = document.querySelector("#theme-button");
const body = document.body;

const moonIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a8.5 8.5 0 1 0 9.8 9.8Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
</svg>`;

const sunIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4"
            stroke="currentColor"
            stroke-width="2"/>
    <path d="M12 2V4
             M12 20V22
             M4.93 4.93L6.34 6.34
             M17.66 17.66L19.07 19.07
             M2 12H4
             M20 12H22
             M4.93 19.07L6.34 17.66
             M17.66 6.34L19.07 4.93"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"/>
</svg>`;

themeButton.innerHTML = moonIcon;

themeButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    const isLight = body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});