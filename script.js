const supportedLanguages = ["en", "pl"];
const languageStorageKey = "whatsney-language";
const softwareCareerStartYear = 2018;
const currentYear = new Date().getFullYear();
const experienceYears = Math.max(1, currentYear - softwareCareerStartYear);
const languagePicker = document.querySelector("[data-language-picker]");

const translationContext = {
  currentYear,
  experienceYears,
};

const translationsByLanguage = {
  en: {
    pageTitle: "whatsney — Tomasz Łacny",
    metaDescription: "whatsney — independent software work by Tomasz Łacny, including AudioBridge and a serverless XML-to-BaseLinker catalog synchronizer first deployed for Comarch e-Sklep.",
    ogTitle: "whatsney — Software built with intent",
    ogDescription: "Independent software work by Tomasz Łacny, including local-first products and practical serverless integrations.",
    logoAriaLabel: "whatsney home",
    navigationAriaLabel: "Primary navigation",
    languagePickerAriaLabel: "Language",
    navAbout: "About",
    navWork: "Work",
    navContact: "Contact",
    heroEyebrow: "Based in Wrocław, Poland",
    heroTitle: "Software built<br>with <em>intent.</em>",
    heroIntro: "I’m Tomasz Łacny, the person behind <strong>whatsney</strong>. I turn ideas into thoughtful digital products with clean code, clear interfaces, and a practical approach.",
    heroPrimaryAction: "Start a conversation <span aria-hidden=\"true\">↗</span>",
    heroSecondaryAction: "Explore my work <span aria-hidden=\"true\">↓</span>",
    scrollNote: "Scroll to discover <span aria-hidden=\"true\">↓</span>",
    aboutSectionNumber: "01 / ABOUT",
    aboutTitle: "Technology should make<br>things <em>simpler.</em>",
    aboutBodyOne: ({ experienceYears }) => `I have <strong><span id="experience-years">${experienceYears}</span> years of experience</strong> creating software. I approach it as a way to solve real problems, not as an end in itself. Good technology feels natural: it is dependable, understandable, and quietly does its job.`,
    aboutBodyTwo: "From the first question to the final detail, I value clarity, curiosity, and decisions that hold up beyond launch day.",
    principleOne: "01&nbsp;&nbsp; Clarity first",
    principleTwo: "02&nbsp;&nbsp; Build for people",
    principleThree: "03&nbsp;&nbsp; Keep improving",
    workSectionNumber: "02 / SELECTED WORK",
    workTitle: "Things I’ve <em>built.</em>",
    workAction: "Discuss a project <span aria-hidden=\"true\">↗</span>",
    projectAudioBridgeDescription: "A local-first audio streaming system that turns an iPhone, iPad, or compatible Apple silicon Mac into a wireless speaker for Windows. It supports QR and manual pairing, multiple simultaneous receivers, lock-screen playback, and automatic low-latency buffer recovery.",
    projectAudioBridgeAriaLabel: "Open AudioBridge product page",
    projectWennDescription: "Co-creating and designing the software systems behind a vehicle inspection platform operating across Europe and the US, with a focus on software architecture and cloud infrastructure.",
    projectBaseLinkerDescription: "An audit-driven serverless catalog synchronizer for BaseLinker, first built after a native Comarch e-Sklep connection failed to handle variants, stock, relationships, and repeatable updates reliably. The runtime is source-agnostic: any shop, ERP, or PIM can use it when it can generate the expected product XML. It applies verified API differences, shows progress in a protected administration panel, and uses AWS Free Tier allowances plus a budget guard to keep the current workload at zero monthly cost.",
    projectBaseLinkerAriaLabel: "Open the XML to BaseLinker Sync repository",
    tagSoftware: "Software",
    tagArchitecture: "Architecture",
    tagCloud: "Cloud",
    tagXmlFeed: "XML Feed",
    tagApiIntegration: "API Integration",
    contactSectionNumber: "03 / CONTACT",
    contactTitle: "Have an idea?<br><em>Let’s talk.</em>",
    contactBody: "Have a potential project you would like to bring to life? Send me a short note about your idea, goals, and timeline. I’m open to interesting projects and new collaborations.",
    contactMailHref: "mailto:support@whatsney.com?subject=Potential%20project",
    contactProjectLabel: "Discuss a project",
    contactEmailLabel: "Email me",
    contactConnectLabel: "Connect on",
    contactFollowLabel: "Follow on",
    footerRights: ({ currentYear }) => `© <span id="year">${currentYear}</span> All rights reserved.`,
  },
  pl: {
    pageTitle: "whatsney — Tomasz Łacny",
    metaDescription: "whatsney — niezależne projekty software Tomasza Łacnego, w tym AudioBridge i serverless synchronizator katalogu XML do BaseLinkera wdrożony najpierw dla Comarch e-Sklep.",
    ogTitle: "whatsney — Software tworzone z intencją",
    ogDescription: "Niezależne projekty software Tomasza Łacnego, w tym produkty local-first i praktyczne integracje serverless.",
    logoAriaLabel: "strona główna whatsney",
    navigationAriaLabel: "Główna nawigacja",
    languagePickerAriaLabel: "Język",
    navAbout: "O mnie",
    navWork: "Projekty",
    navContact: "Kontakt",
    heroEyebrow: "Wrocław, Polska",
    heroTitle: "Software tworzone<br>z <em>intencją.</em>",
    heroIntro: "Jestem Tomasz Łacny, osoba stojąca za <strong>whatsney</strong>. Zamieniam pomysły w przemyślane produkty cyfrowe: z czystym kodem, klarownymi interfejsami i praktycznym podejściem.",
    heroPrimaryAction: "Porozmawiajmy <span aria-hidden=\"true\">↗</span>",
    heroSecondaryAction: "Zobacz projekty <span aria-hidden=\"true\">↓</span>",
    scrollNote: "Przewiń dalej <span aria-hidden=\"true\">↓</span>",
    aboutSectionNumber: "01 / O MNIE",
    aboutTitle: "Technologia powinna<br>robić rzeczy <em>prościej.</em>",
    aboutBodyOne: ({ experienceYears }) => `Mam <strong><span id="experience-years">${experienceYears}</span> lat doświadczenia</strong> w tworzeniu oprogramowania. Traktuję je jako sposób rozwiązywania realnych problemów, a nie cel sam w sobie. Dobra technologia jest naturalna: niezawodna, zrozumiała i spokojnie robi swoje.`,
    aboutBodyTwo: "Od pierwszego pytania po ostatni detal cenię klarowność, ciekawość i decyzje, które bronią się długo po starcie.",
    principleOne: "01&nbsp;&nbsp; Najpierw jasność",
    principleTwo: "02&nbsp;&nbsp; Buduj dla ludzi",
    principleThree: "03&nbsp;&nbsp; Ulepszaj dalej",
    workSectionNumber: "02 / WYBRANE PROJEKTY",
    workTitle: "Projekty, które <em>zbudowałem.</em>",
    workAction: "Omów projekt <span aria-hidden=\"true\">↗</span>",
    projectAudioBridgeDescription: "Lokalny system strumieniowania dźwięku, który zmienia iPhone'a, iPada albo kompatybilnego Maca z Apple silicon w bezprzewodowy głośnik dla Windows. Obsługuje parowanie QR i ręczne, wiele odbiorników naraz, odtwarzanie na ekranie blokady oraz automatyczne odzyskiwanie bufora o niskim opóźnieniu.",
    projectAudioBridgeAriaLabel: "Otwórz stronę produktu AudioBridge",
    projectWennDescription: "Współtworzenie i projektowanie systemów stojących za platformą inspekcji pojazdów działającą w Europie i USA, ze szczególnym naciskiem na architekturę oprogramowania i infrastrukturę chmurową.",
    projectBaseLinkerDescription: "Audytowalny, serverless synchronizator katalogu dla BaseLinkera, zbudowany po tym, jak natywne połączenie Comarch e-Sklep nie radziło sobie niezawodnie z wariantami, stanami, relacjami i powtarzalnymi aktualizacjami. Runtime jest niezależny od źródła: może go użyć każdy sklep, ERP lub PIM, jeśli generuje oczekiwany XML produktowy. Stosuje zweryfikowane różnice API, pokazuje postęp w chronionym panelu administracyjnym i wykorzystuje limity AWS Free Tier oraz budget guard, żeby obecne obciążenie utrzymać przy zerowym miesięcznym koszcie.",
    projectBaseLinkerAriaLabel: "Otwórz repozytorium XML to BaseLinker Sync",
    tagSoftware: "Oprogramowanie",
    tagArchitecture: "Architektura",
    tagCloud: "Chmura",
    tagXmlFeed: "Feed XML",
    tagApiIntegration: "Integracje API",
    contactSectionNumber: "03 / KONTAKT",
    contactTitle: "Masz pomysł?<br><em>Porozmawiajmy.</em>",
    contactBody: "Masz potencjalny projekt, który chcesz uruchomić? Wyślij mi krótką wiadomość z opisem pomysłu, celów i terminu. Jestem otwarty na ciekawe projekty i nowe współprace.",
    contactMailHref: "mailto:support@whatsney.com?subject=Potencjalny%20projekt",
    contactProjectLabel: "Omów projekt",
    contactEmailLabel: "Napisz mail",
    contactConnectLabel: "Połącz się na",
    contactFollowLabel: "Zobacz na",
    footerRights: ({ currentYear }) => `© <span id="year">${currentYear}</span> Wszelkie prawa zastrzeżone.`,
  },
};

function normalizeLanguage(languageCode) {
  if (typeof languageCode !== "string") {
    return null;
  }

  const primaryLanguage = languageCode.trim().toLowerCase().split("-")[0];
  if (supportedLanguages.includes(primaryLanguage)) {
    return primaryLanguage;
  }

  return null;
}

function readSavedLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem(languageStorageKey));
  } catch (_error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (_error) {
    return;
  }
}

function getBrowserLanguages() {
  if (typeof navigator === "undefined") {
    return [];
  }

  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return navigator.languages;
  }

  if (navigator.language) {
    return [navigator.language];
  }

  return [];
}

function detectInitialLanguage() {
  const savedLanguage = readSavedLanguage();
  if (savedLanguage) {
    return savedLanguage;
  }

  const hasPolishBrowserLanguage = getBrowserLanguages().some((languageCode) => {
    return normalizeLanguage(languageCode) === "pl";
  });

  if (hasPolishBrowserLanguage) {
    return "pl";
  }

  return "en";
}

function getTranslation(language, key) {
  const activeTranslations = translationsByLanguage[language] || translationsByLanguage.en;
  const fallbackTranslations = translationsByLanguage.en;
  const translation = activeTranslations[key] || fallbackTranslations[key];

  if (typeof translation === "function") {
    return translation(translationContext);
  }

  return translation;
}

function updateMetaContent(selector, content) {
  const metaElement = document.querySelector(selector);
  if (!metaElement || !content) {
    return;
  }

  metaElement.setAttribute("content", content);
}

function translatePage(language) {
  const activeLanguage = supportedLanguages.includes(language) ? language : "en";

  document.documentElement.lang = activeLanguage;
  document.documentElement.dataset.activeLang = activeLanguage;
  document.title = getTranslation(activeLanguage, "pageTitle");

  updateMetaContent("meta[name=\"description\"]", getTranslation(activeLanguage, "metaDescription"));
  updateMetaContent("meta[property=\"og:title\"]", getTranslation(activeLanguage, "ogTitle"));
  updateMetaContent("meta[property=\"og:description\"]", getTranslation(activeLanguage, "ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = getTranslation(activeLanguage, element.dataset.i18n);
    if (translation) {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const translation = getTranslation(activeLanguage, element.dataset.i18nAriaLabel);
    if (translation) {
      element.setAttribute("aria-label", translation);
    }
  });

  document.querySelectorAll("[data-i18n-href]").forEach((element) => {
    const translation = getTranslation(activeLanguage, element.dataset.i18nHref);
    if (translation) {
      element.setAttribute("href", translation);
    }
  });

  if (languagePicker) {
    languagePicker.value = activeLanguage;
  }
}

if (languagePicker) {
  languagePicker.addEventListener("change", (event) => {
    const selectedLanguage = normalizeLanguage(event.target.value);
    if (!selectedLanguage) {
      return;
    }

    translatePage(selectedLanguage);
    saveLanguage(selectedLanguage);
  });
}

translatePage(detectInitialLanguage());

const revealTargets = document.querySelectorAll(
  ".manifesto-grid > *, .section-heading, .project, .contact-grid > *"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => observer.observe(element));
}
