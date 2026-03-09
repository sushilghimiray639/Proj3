// Hamburger menu toggle
function hamburger() {
  const menu = document.getElementById("menu-links");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// FAQ toggle
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
