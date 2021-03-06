import { game } from './elements.js'

let _collisions = []

const observer = new IntersectionObserver(
  handleCollisions, { root: game, threshold: 0 }
)

function handleCollisions(entries) {
  _collisions = entries.filter(({ isIntersecting }) => isIntersecting)
}

function collisions() {
  return _collisions
}

export { observer, collisions }
