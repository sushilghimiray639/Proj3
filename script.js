

// Document ready (for future jQuery features if needed)
document.addEventListener("DOMContentLoaded", function() {
  console.log("Document ready - Wild Rescues site");
});

// Hamburger menu toggle
function hamburger() {
  const menu = document.getElementById("menu-links");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// FAQ toggle (if used)
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
