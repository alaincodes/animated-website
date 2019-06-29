const burger = document.querySelector(".burger");
const switcher = document.getElementById("switchLang");
const textChange = document.getElementById("languageText");
const menu = document.getElementById("nav-links");
const switcherBtn = document.querySelector(".switch");

// BURGER MENU CONFIG

burger.addEventListener("click", () => {
  if (burger.classList.toggle("toggle")) {
    menu.style.opacity = 1;
    switcherBtn.style.opacity = 0;
  } else {
    menu.style.opacity = 0;
    switcherBtn.style.opacity = 1;
  }
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
