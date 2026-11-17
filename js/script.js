const root = document.documentElement;

const themeToggle = document.querySelector("[data-theme-toggle]");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const darkEnabled = root.dataset.theme !== "dark";
    root.dataset.theme = darkEnabled ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(darkEnabled));
  });
}

const typingTarget = document.querySelector("[data-typing-text]");
if (typingTarget) {
  const phrases = ["one commit at a time.", "reviewing each other's work.", "building something together."];
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = true;

  const typeNext = () => {
    const phrase = phrases[phraseIndex];
    characterIndex += deleting ? -1 : 1;
    typingTarget.textContent = phrase.slice(0, characterIndex);

    let delay = deleting ? 55 : 85;
    if (characterIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    } else if (characterIndex >= phrases[phraseIndex].length) {
      deleting = true;
      delay = 1100;
    }
    window.setTimeout(typeNext, delay);
  };
  window.setTimeout(typeNext, 1100);
}

const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) yearTarget.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  const feedback = document.querySelector("[data-form-feedback]");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) {
      if (feedback) feedback.textContent = "Please correct the highlighted fields.";
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    if (feedback) feedback.textContent = `Thanks, ${name}! Your demo message passed validation.`;
    contactForm.reset();
  });
}
