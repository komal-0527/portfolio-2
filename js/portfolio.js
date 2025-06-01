

const portfolioDetails = {
  1: {
    title: "Project One",
    description:
      "A modern and fully responsive website built with HTML5, CSS3, and JavaScript, featuring smooth animations, a clean layout, and SEO best practices.",
    image: "images/laptop2.jpg",
    liveLink: "images/laptop4.jpg",
  },
  2: {
    title: "Project Two",
    description:
      "An e-commerce web app developed using React.js and Node.js with features like shopping cart, product filtering, secure checkout, and admin dashboard.",
    image: "images/laptop4.jpg",
    liveLink: "images/laptop4.jpg",
  },
  3: {
    title: "Project Three",
    description:
      "A cross-platform mobile application built with Flutter and Dart, offering real-time chat, push notifications, and attractive UI components.",
    image: "images/laptop4.jpg",
    liveLink: "images/laptop4.jpg",
  },
};

const portfolioModal = document.getElementById("portfolio-modal");
const portfolioImg = document.getElementById("portfolio-modal-img");
const portfolioTitle = document.getElementById("portfolio-modal-title");
const portfolioDesc = document.getElementById("portfolio-modal-description");
const portfolioLiveLink = document.getElementById("portfolio-modal-live");
const portfolioCloseBtn = portfolioModal.querySelector(".close-btn");

document.querySelectorAll(".view-details").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".portfolio-card");
    const id = card.getAttribute("data-portfolio");
    const data = portfolioDetails[id];
    portfolioTitle.textContent = data.title;
    portfolioDesc.textContent = data.description;
    portfolioImg.src = data.image;
    portfolioLiveLink.href = data.liveLink;
    portfolioModal.style.display = "flex";
  });
});

portfolioCloseBtn.onclick = () => (portfolioModal.style.display = "none");
window.onclick = (e) => {
  if (e.target === portfolioModal) portfolioModal.style.display = "none";
};
