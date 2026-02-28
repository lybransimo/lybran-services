// Script principal LYBRAN SERVICES
// - Gestion de la navigation mobile
// - Mise à jour automatique de l'année dans le footer
// - Animations douces au scroll

/**
 * Sélectionne un élément dans le DOM.
 * En cas d'absence, renvoie null sans déclencher d'erreur.
 */
function $(selector) {
  return document.querySelector(selector);
}

/**
 * Navigation mobile : ouverture / fermeture du menu
 */
function setupMobileNavigation() {
  const toggle = $(".navbar__toggle");
  const links = $(".navbar__links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    const isOpen = links.classList.toggle("navbar__links--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu après un clic sur un lien de navigation
  links.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      links.classList.remove("navbar__links--open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * Mise à jour dynamique de l'année dans le footer.
 */
function setupDynamicYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear();
}

/**
 * Ajoute une animation progressive aux éléments marqués .js-reveal
 * lorsqu'ils entrent dans la zone visible.
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".js-reveal");
  if (!revealElements.length) return;

  // Utilisation d'IntersectionObserver pour des animations performantes
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js-reveal--visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Slider simple pour faire défiler plusieurs images
 * Structure attendue :
 * .js-slider
 *   .js-slider-image (plusieurs images)
 *   .js-slider-prev / .js-slider-next (boutons)
 */
function setupSliders() {
  const sliders = document.querySelectorAll(".js-slider");
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll(".js-slider-image");
    const prevBtn = slider.querySelector(".js-slider-prev");
    const nextBtn = slider.querySelector(".js-slider-next");

    if (!images.length) return;

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("is-active", i === index);
      });
    }

    showImage(currentIndex);

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });
    }
  });
}

/**
 * Initialisation globale du site une fois le DOM chargé.
 */
document.addEventListener("DOMContentLoaded", function () {
  setupMobileNavigation();
  setupDynamicYear();
  setupScrollReveal();
  setupSliders();
});

