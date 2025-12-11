// Fade in animation

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fadeinup');
  const viewportHeight = document.documentElement.clientHeight;
  const triggerPoint = 0.65; // desktop trigger

  function checkFade() {
    if (window.innerWidth < 540) return; // skip mobile

    sections.forEach(section => {
      if (!section.classList.contains('animateUp') && section.getBoundingClientRect().top <= viewportHeight * triggerPoint) {
        section.classList.add('animateUp');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // initial check
});

//navigation bar scroll effect

  const fixedContainer = document.querySelector('.fixedContainer');
   let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      fixedContainer.classList.remove("nav--revealed");
   fixedContainer.classList.add("nav--hidden");
    } else {
    fixedContainer.classList.remove("nav--hidden");
    fixedContainer.classList.add("nav--revealed");
    }
lastScrollY = window.scrollY;
  });

//Refresh page when breakpoint changes

let currentBreakpoint = window.innerWidth > 540 ? "desktop" : "mobile";

window.addEventListener("resize", function() {
  let newBreakpoint = window.innerWidth > 540 ? "desktop" : "mobile";
  if (newBreakpoint !== currentBreakpoint) {
    location.reload();
  }
});