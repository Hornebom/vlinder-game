import { clone } from './elements.js'

function animateCollision({ x, y, z, theme }) {
  clone.style.setProperty('--target-theme', theme)
  clone.animate([
    { transform: `translate3d(${x}px, ${y}px, ${z}px) scale(1)`, opacity: 1, offset: 0 },
    { transform: `translate3d(${x}px, ${y}px, ${z}px) scale(12)`, opacity: 0, offset: 1 }
  ], 150)
}

export default animateCollision
