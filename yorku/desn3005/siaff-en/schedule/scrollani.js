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

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetPos = Math.max(0, Math.min(targetPos, maxScroll));

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