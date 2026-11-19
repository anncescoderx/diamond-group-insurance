const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("inquiry-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "This is a front-end preview. Please connect an approved email or CRM form endpoint before accepting inquiries.";
});
