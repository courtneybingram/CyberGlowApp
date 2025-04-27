const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

let currentSlide = 0;

// Hide all slides except title slide
slides.forEach((slide, index) => {
  if (index !== 0) slide.style.display = "none";
});

// When "Start Lesson" is clicked
startBtn.addEventListener("click", () => {
  slides[currentSlide].style.display = "none"; // hide title slide
  currentSlide++;
  slides[currentSlide].style.display = "block"; // show lesson 1
  nextBtn.style.display = "inline-block";
  startBtn.style.display = "none";
});

// When "Next" is clicked
nextBtn.addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide++;

  if (currentSlide < slides.length) {
    slides[currentSlide].style.display = "block";
  }

  if (currentSlide === slides.length - 1) {
    nextBtn.style.display = "none"; // optionally hide on last slide
  }
});
