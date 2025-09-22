const svg = document.querySelector('svg.line')
const path = svg.querySelector('path')

const pathLength = path.getTotalLength()
path.style.strokeDasharray = pathLength
path.style.strokeDashoffset = pathLength

// Precompute (x, length) samples
const samples = []
const STEPS = 1000
for (let i = 0; i <= STEPS; i++) {
  const len = (i / STEPS) * pathLength
  const pt = path.getPointAtLength(len)
  samples.push({ x: pt.x, len })
}

// Smooth interpolation between samples
function getLengthAtX(xTarget) {
  let i = 0
  while (i < samples.length && samples[i].x < xTarget) i++
  const prev = samples[i - 1] || samples[0]
  const next = samples[i] || samples[samples.length - 1]
  const t = (xTarget - prev.x) / (next.x - prev.x || 1)
  return prev.len + t * (next.len - prev.len)
}

// Current stroke offset (for smoothing)
let currentOffset = pathLength

// Update stroke based on scroll with easing
function scroll() {
  const scrollDistance = window.scrollX
  const maxScroll = document.documentElement.scrollWidth - window.innerWidth
  const progressX = scrollDistance / maxScroll

  const bbox = path.getBBox()
  const targetX = bbox.x + bbox.width * progressX

  const targetOffset = pathLength - getLengthAtX(targetX)

  // Smoothly interpolate (lerp)
  const speed = 0.1 // 0 = no movement, 1 = instant
  currentOffset += (targetOffset - currentOffset) * speed
  path.style.strokeDashoffset = currentOffset

  requestAnimationFrame(scroll)
}

// Start loop
scroll()

window.addEventListener('wheel', (e) => {
  // Prevent default vertical scroll
  e.preventDefault()

  // Scroll horizontally instead
  // e.deltaY gives the vertical scroll amount
  window.scrollBy({
    left: e.deltaY, // Move horizontally by vertical delta
    behavior: 'auto' // instant, can use 'smooth' for smoothing
  })
}, { passive: false })
