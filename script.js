document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;

  function goToSlide(index) {
      if (index < 0) {
          index = totalItems - 1;
      } else if (index >= totalItems) {
          index = 0;
      }
      currentIndex = index;
      document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goToNextSlide() {
      goToSlide(currentIndex + 1);
  }

  setInterval(goToNextSlide, 3000);
});