let slideIndex = 0;

function mudarSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  slideIndex += direction;

  if (slideIndex >= totalSlides) {
    slideIndex = 0; // Volta ao primeiro slide
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1; // Vai para o último slide
  }

  const offset = -slideIndex * 100;
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`;
}

// Troca automática a cada 5 segundos
setInterval(() => {
  mudarSlide(1);
}, 5000);
