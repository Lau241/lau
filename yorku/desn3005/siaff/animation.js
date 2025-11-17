document.addEventListener("DOMContentLoaded", () => {
  const revealImgs = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.6
  });

  // observe each class
  revealImgs.forEach(img => {
    if (img instanceof Element) { // debug: make sure it's a proper element
      observer.observe(img);
    }
  });
});


// Progress bar animation im going to dahdahleh 4th building myself holy fuck
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

setInterval(rotateBars, 20000);
rotateBars();

// yes because making animations alongside ar is fun and not a nightmare at all

const models = [
    document.querySelectorAll(".switch-model1"),
    document.querySelectorAll(".switch-model2"),
    document.querySelectorAll(".switch-model3")
];

let modelIndex = 0;

function rotateModels() {
    const current = models[modelIndex];
    const next = models[(modelIndex + 1) % models.length];

    // fade out current
    current.forEach(el => {
        el.classList.add("hidden");
    });

    // 2. fade-out completes → hide + fade in next
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
setInterval(rotateModels, 20000);

// Initial visibility setup
models.forEach((group, i) => {
    group.forEach(el => {
        el.style.display = i === 0 ? "" : "none";
        if (i !== 0) el.classList.add("hidden");
    });
});