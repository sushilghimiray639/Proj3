// Shraddha Bijukchhe | script.js | 2026-03-12

// Document ready (for future jQuery or DOM scripts)
document.addEventListener("DOMContentLoaded", function() {
  console.log("Wild Rescues site loaded");
});

/* Hamburger menu toggle for mobile navigation */
function hamburger() {
  const menu = document.getElementById("menu-links");
  if (!menu) return;
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* FAQ toggle function (if you have FAQs on other pages) */
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  if (!answer) return;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

/* Optional: Smooth scroll for "Skip to Content" link */
const skipLink = document.querySelector(".skip-link");
if (skipLink) {
  skipLink.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector("#main-content") || document.querySelector("main");
    target.scrollIntoView({ behavior: "smooth" });
  });
}
