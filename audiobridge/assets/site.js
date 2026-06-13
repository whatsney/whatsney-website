const supportedLanguages = ["en", "pl", "es"];
const savedLanguage = localStorage.getItem("whatsney-language");
const browserLanguage = navigator.language.toLowerCase().split("-")[0];
const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : "en";

const picker = document.querySelector("[data-language-picker]");

function setLanguage(language) {
  const activeLanguage = supportedLanguages.includes(language) ? language : "en";
  document.documentElement.dataset.activeLang = activeLanguage;
  document.documentElement.lang = activeLanguage;
  localStorage.setItem("whatsney-language", activeLanguage);

  if (picker) {
    picker.value = activeLanguage;
  }
}

picker?.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

setLanguage(initialLanguage);
