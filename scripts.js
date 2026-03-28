/* ---------------------------------------------------------
   Lavender Lounge — Material 3 Theme Controller
--------------------------------------------------------- */

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  themeToggle.innerHTML =
    theme === "dark"
      ? `<span class="material-symbols-rounded">light_mode</span>`
      : `<span class="material-symbols-rounded">dark_mode</span>`;
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return applyTheme(saved);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

initTheme();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
