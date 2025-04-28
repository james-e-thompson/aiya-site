document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-menu-icon");
  const mobileNavbar = document.getElementById("mobile-navbar");
  window.addEventListener("click", () => {
    mobileNavbar.classList.add("hidden");
  });
  hamburgerButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileNavbar.classList.contains("hidden")) {
      mobileNavbar.classList.remove("hidden");
    } else {
      mobileNavbar.classList.add("hidden");
    }
  });
});
