const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
let scrollInterval;
let currentScrollPosition = 0;
const scrollAmount = 300; 

function startScrolling() {
  scrollInterval = setInterval(() => {
    currentScrollPosition += scrollAmount;

    if (currentScrollPosition >= carousel.scrollWidth) {
      currentScrollPosition = 0;
    }

    carousel.scrollTo({
      left: currentScrollPosition,
      behavior: "smooth",
    });
  }, 900); 
}

startScrolling(); 
