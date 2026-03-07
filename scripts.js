// Get the mode toggle button
const modeToggle = document.getElementById("mode-toggle");

// Check localStorage for saved mode
const savedMode = localStorage.getItem("theme");

// Apply the saved mode if exists
if (savedMode) {
  document.body.classList.add(savedMode);
  modeToggle.textContent = savedMode === "light-mode" ? "🌙" : "🌞";
} else {
  // Default to light mode if no saved mode
  document.body.classList.add("light-mode");
  modeToggle.textContent = "🌙";
}

// Toggle between light and dark mode
modeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    modeToggle.textContent = "🌞";
    localStorage.setItem("theme", "dark-mode"); // Save the preference
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    modeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light-mode"); // Save the preference
  }
});
