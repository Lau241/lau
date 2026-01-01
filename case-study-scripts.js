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

//Play videos only when in screen

document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.1 });

  videos.forEach(video => observer.observe(video));
});


//Table of contents

const toc = document.querySelector('.table-of-contents');
const tocInner = document.querySelector('.toc-inner');
const openBtn = document.querySelector('.open-button');
const panel = document.querySelector('.content-links');
const tocBtn = document.getElementById('toc-btn');

const peekPercent = 0;

function setPeek() {
  const panelWidth = panel.offsetWidth;
  const peekPx = (peekPercent / 100) * panelWidth;
  if (!toc.classList.contains('open')) {
    tocInner.style.transform = `translateX(-${panelWidth - peekPx}px)`;
  }
}

setPeek();

// Toggle open/close
openBtn.addEventListener('click', () => {
  const isOpen = toc.classList.toggle('open');
  if (isOpen) {
    tocInner.style.transform = 'translateX(0)';
    tocBtn.classList.add('flipped');
  } else {
    setPeek();
    tocBtn.classList.remove('flipped')
  }
});

window.addEventListener('resize', setPeek);



//highlighting toc

const sections = document.querySelectorAll('section.toc-section');
const links = toc.querySelectorAll('ul li a');
const OFFSET = 150;

function updateActiveLink() {
  let currentSectionId = sections[0].id;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= OFFSET) {
      currentSectionId = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove('white');
    link.classList.add('dark-gray');

    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.remove('dark-gray');
      link.classList.add('white');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

