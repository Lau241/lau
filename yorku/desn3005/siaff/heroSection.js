document.addEventListener("scroll", function () {
  const heroContainer = document.getElementById("heroSection");
  const heroCenter = document.getElementById("hero-center");
  const heroH3 = heroCenter.querySelector("h3");

  // Correct progress calculation for sticky sections
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