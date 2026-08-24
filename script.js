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

function setTheme(theme) {
    if (theme === "light") {
        body.classList.add("light-theme");
        themeButton.innerHTML = sunIcon;
    } else {
        body.classList.remove("light-theme");
        themeButton.innerHTML = moonIcon;
    }

    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "dark";

setTheme(savedTheme);


themeButton.addEventListener("click", () => {
    const newTheme = body.classList.contains("light-theme")
        ? "dark"
        : "light";

    setTheme(newTheme);
});

const projectCards = document.querySelectorAll(".project-card");


projectCards.forEach(card => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = x - centerX;
        const offsetY = y - centerY;
        
        const moveX = offsetX/10;
        const moveY = offsetY/10;

        card.style.transform = `translate(${moveX}px, ${moveY}px)`;

        const rotateX = (offsetY / centerY) * 10; // Adjust the multiplier for more/less rotation
        const rotateY = (offsetX / centerX) * 10; // Adjust the multiplier for more/less rotation

        card.style.transform += ` rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});