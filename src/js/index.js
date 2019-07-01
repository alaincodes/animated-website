const burger = document.querySelector(".burger");
const switcher = document.getElementById("switchLang");
const textChange = document.getElementById("languageText");
const menu = document.querySelector(".nav-links");

// BURGER MENU CONFIG

burger.addEventListener("click", () => {
  if (burger.classList.toggle("toggle")) {
    menu.setAttribute("style", "display: flex");
    switcher.style.opacity = 0;
  } else {
    menu.setAttribute("style", "display: none");
    switcher.style.opacity = 1;
  }
});

// SWITCH LANG CONFIG
switcher.addEventListener("click", () => {
  if (
    textChange.innerHTML ===
    "Je suis John Wick, <br> Développeur JavaScript, <br> Je construis des websites."
  ) {
    textChange.innerHTML =
      "I'm John Wick, <br>JavaScript Developer, <br>I code for web and mobile devices.";
  } else {
    textChange.innerHTML =
      "Je suis John Wick, <br> Développeur JavaScript, <br> Je construis des websites.";
  }
});
