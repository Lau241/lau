document.addEventListener("DOMContentLoaded", () => {
  const descImage = document.getElementsByClassName("reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        descImage.classList.add("visible");
        observer.unobserve(descImage); // animate only once
      }
    });
  }, {
    threshold: 0.6
  });

  observer.observe(descImage);
});


// Progress bar animation
const bars = ["bar1", "bar2", "bar3"];
let index = 0;

function rotateBars() {
    // reset all bars
    bars.forEach(id => {
        const el = document.getElementById(id);
        el.style.backgroundColor = "#D9D9D9";
        el.style.width = "10%";     // default width
    });

    // activate one
    const active = document.getElementById(bars[index]);
    active.style.backgroundColor = "#FF0000";
    active.style.width = "80%";     // animated width change

    // rotate index
    index = (index + 1) % bars.length;
}

setInterval(rotateBars, 15000);
rotateBars();

const models = [
    document.querySelectorAll(".switch-model1"),
    document.querySelectorAll(".switch-model2"),
    document.querySelectorAll(".switch-model3")
];

let modelIndex = 0;

function rotateModels() {
    const current = models[modelIndex];
    const next = models[(modelIndex + 1) % models.length];

    // 1. Fade out current
    current.forEach(el => {
        el.classList.add("hidden");
    });

    // 2. After fade-out completes → hide + fade in next
    setTimeout(() => {
        current.forEach(el => {
            el.style.display = "none";
        });

        next.forEach(el => {
            el.style.display = "";      // show again
            void el.offsetWidth;        // force reflow for animation restart
            el.classList.remove("hidden"); // fade in
        });
    }, 800); // matches CSS transition duration

    // Rotate index
    modelIndex = (modelIndex + 1) % models.length;
}

// Run every 15 seconds (sync with progress bars)
setInterval(rotateModels, 15000);

// Initial visibility setup
models.forEach((group, i) => {
    group.forEach(el => {
        el.style.display = i === 0 ? "" : "none";
        if (i !== 0) el.classList.add("hidden");
    });
});