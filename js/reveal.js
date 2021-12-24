// reference point for animations to start
const slideinContainer = document.querySelector(".slidein-container");
// target animation elements
const techSkillsContainer = document.querySelector(".techskills__container");
const techSkillsAbout = document.querySelector(".techskills__about-section");
const slideIn = document.querySelector(".slidein-text");

const calculateScrollHeight = () => {
  if (window.innerWidth < 950) return false;

  const windowHeight = window.innerHeight;
  const elementTop = slideinContainer.getBoundingClientRect().top;
  const elementHeight = 200;

  // if the space from the top is less than the entire window height, play animation
  if (elementTop < windowHeight - elementHeight) return true;

  return false;
};

const reveal = (element, displayType, animationVal) => {
  if (calculateScrollHeight()) {
    element.style.display = displayType;
    element.style.animation = animationVal;
  }

  return;
};

window.addEventListener("scroll", () =>
  reveal(slideIn, "block", "slideRight 1300ms 1")
);
window.addEventListener("scroll", () =>
  reveal(techSkillsAbout, "block", "slideRight 1300ms 1")
);
window.addEventListener("scroll", () =>
  reveal(techSkillsContainer, "flex", "slideLeft 1300ms 1")
);
