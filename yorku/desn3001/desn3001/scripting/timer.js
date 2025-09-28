// total span of time we want to map scroll to (example: 7 days)
const totalMinutes = 1.5 * 24 * 60; // 1 day

function formatTime(minutes) {
  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const mins = minutes % 60;
  return `${days}d ${hours}h ${mins}m till Due`;
}

const countdownEl = document.querySelector('.countdown');

window.addEventListener('scroll', () => {
  // horizontal scroll progress
  const scrollLeft = window.scrollX;
  const maxScroll = document.documentElement.scrollWidth - window.innerWidth;
  let progress = scrollLeft / maxScroll; // 0 → 1

  // invert progress so left = up, right = down
  let minutes = Math.round((1 - progress) * totalMinutes);

  // prevent negative values
  minutes = Math.max(0, minutes);

  countdownEl.textContent = formatTime(minutes);
});
