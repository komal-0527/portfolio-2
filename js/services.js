const serviceDetails = {
  1: {
    title: "Responsive Web Design",
    description:
      "Our responsive web design ensures that your website provides a seamless experience across all devices—whether it's a smartphone, tablet, or desktop. We use flexible grid layouts, media queries, and optimized images to adapt your content fluidly to any screen size, enhancing usability and increasing retention.",
    image: "images/laptop4.jpg"
  },
  2: {
    title: "Frontend Development",
    description:
      "We specialize in building visually appealing and interactive user interfaces using the latest frontend technologies. Our team is proficient in HTML5, CSS3, JavaScript, and frameworks like React and Vue.js to create dynamic, fast-loading, and user-friendly applications tailored to your business goals.",
    image: "images/laptop4.jpg"
  },
  3: {
    title: "Backend Development",
    description:
      "Our backend solutions power your website with secure, scalable, and high-performance architecture. We build RESTful APIs, manage user authentication, and integrate databases using technologies like Node.js, Express, PHP, MongoDB, and MySQL, ensuring reliability and data integrity.",
    image: "images/laptop4.jpg"
  },
  4: {
    title: "Full-Stack Solutions",
    description:
      "We provide complete full-stack development services that integrate both frontend and backend technologies seamlessly. From UI/UX design to database management and server logic, we deliver fully functional web applications that are ready for deployment and scalable for growth.",
    image: "images/laptop4.jpg"
  },
  5: {
    title: "API Integration",
    description:
      "We integrate third-party APIs to extend your website’s functionality—such as payment gateways (Stripe, PayPal), geolocation (Google Maps), social logins (Google, Facebook), and CRM tools. Our approach ensures secure data handling and real-time communication between platforms.",
    image: "images/laptop4.jpg"
  },
  6: {
    title: "Performance Optimization",
    description:
      "Improve your site's performance by optimizing code, compressing images, enabling lazy loading, minifying assets, and implementing best SEO practices. We aim to reduce load time, boost Core Web Vitals, and enhance the overall user experience while improving search engine rankings.",
    image: "images/laptop4.jpg"
  }
};

// Modal functionality
const modal = document.getElementById("service-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

// Open modal with correct content
document.querySelectorAll(".learn-more").forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = index + 1;
    const data = serviceDetails[id];
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalImg.src = data.image;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

