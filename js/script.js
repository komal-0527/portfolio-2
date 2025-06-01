
function openTab(tabName) {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach((link) => link.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  document.querySelector(`#${tabName}`).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}


