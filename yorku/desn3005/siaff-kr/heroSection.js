document.addEventListener("scroll", function () {
  const heroContainer = document.getElementById("heroSection");
  const heroCenter = document.getElementById("hero-center");
  const heroH3 = heroCenter.querySelector("h2");
  const heroImg = heroCenter.querySelector("h2 img");

  // ahlie fam two twos my word
  const sectionTop = heroContainer.offsetTop;
  const sectionHeight = heroContainer.offsetHeight;

  let progress = (window.scrollY - sectionTop) / sectionHeight;
  progress = Math.max(0, Math.min(1, progress));

  const start = 0.01; // 1%
  const end = 0.2;    // 40%

  if (progress >= start) {
    heroCenter.style.display = "block";
  } else {
    heroCenter.style.display = "none";
    return;
  }

  if (progress >= start && progress <= end) {
    const t = (progress - start) / (end - start);

    heroCenter.style.padding = `${t * 6}rem`;
    heroH3.style.fontSize = `${t * 48}px`;
    heroImg.style.width = `${t * 20}rem`;
  }

  if (progress > end) {
    heroCenter.style.padding = "6rem";
    heroH3.style.fontSize = "48px";
  }
});

window.addEventListener("load", () => {
  const ids = [
    "ure",
    "hit",
    "seoulinternational",
    "filmFest",
    "arc",
    "ect"
  ];

  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animationDelay = `${i * 0.15}s`; // stagger
    el.classList.add("blink-in");
  });
});


let scrollPos = window.scrollY;
let targetPos = scrollPos;
let isAnimating = false;

function animateScroll() {
    const diff = targetPos - scrollPos;
    scrollPos += diff * 0.075; // easing
    window.scrollTo(0, scrollPos);

    if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(animateScroll);
    } else {
        isAnimating = false;
    }
}

function addScrollDelta(delta) {
    targetPos += delta;
    targetPos = Math.max(0, Math.min(targetPos, document.body.scrollHeight - window.innerHeight));

    if (!isAnimating) {
        isAnimating = true;
        animateScroll();
    }
}

// scroll
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    addScrollDelta(e.deltaY);
}, { passive: false });

// baha in my blattastic
window.addEventListener('keydown', (e) => {
    let delta = 0;
    if (e.key === "ArrowDown") delta = 50;
    if (e.key === "ArrowUp") delta = -50;
    if (e.key === "PageDown") delta = window.innerHeight * 0.9;
    if (e.key === "PageUp") delta = -window.innerHeight * 0.9;

    if (delta !== 0) {
        e.preventDefault();
        addScrollDelta(delta);
    }
});

// Detect large scroll jumps (scrollbar click/keboard nav)
window.addEventListener('scroll', () => {
    if (!isAnimating) {
        scrollPos = window.scrollY;
        targetPos = window.scrollY;
    }
});



const backToTop = document.querySelector('.backto-top');
let lastScroll = 0;

// Use the ID #festivalDescription instead of .hero
const festivalHeight = document.querySelector('#festivalDescription').offsetHeight;
const revealPoint = festivalHeight * 1; // 200vh past festivalDescription

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > revealPoint) {
        if (currentScroll < lastScroll) {
            // scrolling up
            backToTop.classList.add('show');
        } else {
            // scrolling down
            backToTop.classList.remove('show');
        }
    } else {
        backToTop.classList.remove('show');
    }

    lastScroll = currentScroll;
});

function animateScrollSlow() {
    const diff = targetPos - scrollPos;
    scrollPos += diff * 0.03;
    window.scrollTo(0, scrollPos);

    if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(animateScrollSlow);
    } else {
        isAnimating = false;
    }
}

document.querySelector('.backto-top').addEventListener('click', () => {
    const hero = document.querySelector('#heroSection');
    const heroTop = hero.offsetTop;
    
    targetPos = heroTop;
    isAnimating = true;
    animateScrollSlow();
});