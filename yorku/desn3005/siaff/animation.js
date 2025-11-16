document.addEventListener("DOMContentLoaded", () => {
  const descImage = document.getElementById("descImage");

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