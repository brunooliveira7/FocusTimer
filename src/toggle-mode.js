let darkMode = true; // app começa no darkMode
const buttonToggle = document.querySelector("#toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light");
  
  // só para mudar o texto da acessibilidade
  const mode = darkMode ? "light" : "dark";
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode ativado`;
  darkMode = !darkMode;
});
