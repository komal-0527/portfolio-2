function openTab(tabName) {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach((link) => link.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  document.querySelector(`#${tabName}`).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}



// navbar logic
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = navLinks.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const icon = menuToggle.querySelector("i");
  if (navLinks.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

