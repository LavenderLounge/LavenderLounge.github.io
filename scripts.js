// Get the mode toggle button
const modeToggle = document.getElementById("mode-toggle");

// Check localStorage for saved mode
const savedMode = localStorage.getItem("theme");

// the use of innerHTML here should be safe since we dont take user input

// TODO: fix the bug where it only switches after user
// clicks twice on initial load

// Apply the saved mode if exists
if (savedMode) {
  document.body.classList.add(savedMode);
  modeToggle.innerHTML = savedMode === "light-mode" ? "" : "<img src=\"media/dark.svg\" />";
} else {
  // Default to light mode if no saved mode
  document.body.classList.add("light-mode");
  modeToggle.innerHTML = "<img src=\"media/dark.svg\" />";
}

// Toggle between light and dark mode
modeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    modeToggle.innerHTML = "<img src=\"media/dark.svg\" />";
    localStorage.setItem("theme", "dark-mode"); // Save the preference
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    modeToggle.innerHTML = "<img src=\"media/light.svg\" />";
    localStorage.setItem("theme", "light-mode"); // Save the preference
  }
});
