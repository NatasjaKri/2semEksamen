// JavaScript Document

const toggleButton = document.getElementById("toggle-theme");

// 1. Find ud af hvilken mode der skal bruges ved load
let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
  // Brug systemindstilling hvis intet er gemt
  savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// 2. Sæt mode og ikon ud fra valgt mode
setTheme(savedTheme);

// 3. Skift mode når der klikkes på knappen
toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// 4. Funktion til at opdatere mode + ikon
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("icon-sun").style.display = theme === "dark" ? "inline" : "none";
  document.getElementById("icon-moon").style.display = theme === "dark" ? "none" : "inline";
}
