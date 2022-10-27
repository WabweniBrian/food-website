// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [backToTop, links, sections] = [
  _("backToTop"),
  qsa(".navbar a"),
  qsa("section"),
];

// Add Active class to navbar links when page scrolls
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

var swiper = new Swiper(".home-slider", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  loop: true,
  autoplay: 4000,
  nextButton: "#next",
  prevButton: "#prev",
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Back to top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("active", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
