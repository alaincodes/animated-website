const burger = document.querySelector(".nav-container");
const switcher = document.getElementById("switchLang");
const languageText = document.getElementById("languageChange");
const textChange = document.getElementById("languageText");
const menu = document.getElementById("nav-links");
const switcherBtn = document.querySelector(".switch");

// BURGER MENU CONFIG
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle")
    ? menu.setAttribute("style", "opacity: 1") &&
      switcherBtn.setAttribute("style", "opacity: 0")
    : menu.setAttribute("style", "opcity: 0") &&
      switcherBtn.setAttribute("style", "opacity: 1");
});

// SWITCH LANG CONFIG
switcher.addEventListener("click", () => {
  if (
    textChange.innerHTML ===
    "Je suis John, <br> Développeur JavaScript Jr. <br> Je construis des websites."
  ) {
    textChange.innerHTML =
      "I'm John, <br>Jr. JavaScript Developer, <br>I code for web and mobile devices.";
  } else {
    textChange.innerHTML =
      "Je suis John, <br> Développeur JavaScript Jr. <br> Je construis des websites.";
  }
});
