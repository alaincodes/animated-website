const burger = document.querySelector(".nav-container");
const switcher = document.getElementById("switchLang");
const languageText = document.getElementById("languageChange");
const h1 = document.getElementById("languageText");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
});

switcher.addEventListener("click", () => {
  if (
    h1.innerHTML ===
    "Je suis John, <br> Développeur JavaScript Jr. <br> Je construis des websites."
  ) {
    h1.innerHTML =
      "I'm John, <br>Jr. JavaScript Developer, <br>I code for web and mobile devices.";
  } else {
    h1.innerHTML =
      "Je suis John, <br> Développeur JavaScript Jr. <br> Je construis des websites.";
  }
});
