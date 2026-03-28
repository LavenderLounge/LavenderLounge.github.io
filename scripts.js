/* ---------------------------------------------------------
   Lavender Lounge — Material 3 Theme Controller
   Default: Dark Mode
--------------------------------------------------------- */

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

/* Always start in dark mode */
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

  applyTheme("dark");
}

initTheme();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
