const header = document.querySelector(".site-header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 32);
}

window.addEventListener("scroll", updateHeader);
updateHeader();

const projectCards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

projectCards.forEach((card) => {
  card.classList.add("reveal-ready");
  cardObserver.observe(card);
});