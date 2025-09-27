const svgAlt = document.querySelector('svg.lineAlt')
const pathAlt = svgAlt.querySelector('path')

const pathLengthAlt = pathAlt.getTotalLength()
pathAlt.style.strokeDasharray = pathLengthAlt
pathAlt.style.strokeDashoffset = pathLengthAlt

// Precompute (x, length) samples
const samplesAlt = []
const STEPSAlt = 1000
for (let i = 0; i <= STEPSAlt; i++) {
  const lenAlt = (i / STEPSAlt) * pathLengthAlt
  const ptAlt = pathAlt.getPointAtLength(lenAlt)
  samplesAlt.push({ x: ptAlt.x, len: lenAlt })
}

// Smooth interpolation between samples
function getLengthAtXAlt(xTargetAlt) {
  let i = 0
  while (i < samplesAlt.length && samplesAlt[i].x < xTargetAlt) i++
  const prevAlt = samplesAlt[i - 1] || samplesAlt[0]
  const nextAlt = samplesAlt[i] || samplesAlt[samplesAlt.length - 1]
  const tAlt = (xTargetAlt - prevAlt.x) / (nextAlt.x - prevAlt.x || 1)
  return prevAlt.len + tAlt * (nextAlt.len - prevAlt.len)
}

// Current stroke offset (for smoothing)
let currentOffsetAlt = pathLengthAlt

// Update stroke based on scroll with easing
function scrollAlt() {
  const scrollDistanceAlt = window.scrollX
  const maxScrollAlt = document.documentElement.scrollWidth - window.innerWidth
  const progressXAlt = scrollDistanceAlt / maxScrollAlt

  const bboxAlt = pathAlt.getBBox()
  const targetXAlt = bboxAlt.x + bboxAlt.width * progressXAlt

  const targetOffsetAlt = pathLengthAlt - getLengthAtXAlt(targetXAlt)

  // Smoothly interpolate (lerp)
  const speedAlt = 0.1 // 0 = no movement, 1 = instant
  currentOffsetAlt += (targetOffsetAlt - currentOffsetAlt) * speedAlt
  pathAlt.style.strokeDashoffset = currentOffsetAlt

  requestAnimationFrame(scrollAlt)
}

// Start loop
scrollAlt()
