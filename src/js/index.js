const burger = document.querySelector(".burger");
const switcher = document.getElementById("switchLang");
const textChange = document.getElementById("languageText");
const menu = document.querySelector(".nav-links");

// BURGER MENU CONFIG

burger.addEventListener("click", () => {
  if (burger.classList.toggle("toggle")) {
    menu.style.opacity = 1;
    switcher.style.opacity = 0;
  } else {
    menu.style.opacity = 0;
    switcher.style.opacity = 1;
  }
});

// SWITCH LANG CONFIG
switcher.addEventListener("click", () => {
  if (
    textChange.innerHTML ===
    "Je suis John, <br> Développeur JavaScript, <br> Je construis des websites."
  ) {
    textChange.innerHTML =
      "I'm John, <br>Jr. JavaScript Developer, <br>I code for web and mobile devices.";
  } else {
    textChange.innerHTML =
      "Je suis John, <br> Développeur JavaScript, <br> Je construis des websites.";
  }
});
