document.getElementById("year").textContent = new Date().getFullYear();

const softwareCareerStartYear = 2018;
const experienceYears = Math.max(
  1,
  new Date().getFullYear() - softwareCareerStartYear
);
document.getElementById("experience-years").textContent = experienceYears;

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
