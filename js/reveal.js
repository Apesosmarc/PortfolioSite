const slideinContainer = document.querySelector(".slidein-container");

const reveal = () => {
  const slidein = document.querySelector(".slidein-text");

  const windowHeight = window.innerHeight;
  const elementTop = slideinContainer.getBoundingClientRect().top;
  const elementHeight = 200;

  if (elementTop < windowHeight - elementHeight) {
    slidein.style.display = "block";
    slidein.style.animation = "slide 1300ms 1";
  } else {
    slidein.style.display = "none";
  }
};

window.addEventListener("scroll", reveal);
