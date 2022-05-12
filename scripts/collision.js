function collisionHandler(root) { 
  let _collisions = []
  const observer = new IntersectionObserver(handleCollisions, { root, threshold: 0 })

  function handleCollisions(entries) {
    _collisions = entries.filter(({ isIntersecting }) => isIntersecting)
  }

  function collisions() {
    return _collisions
  }

  return { collisions, observer }
}

export default collisionHandler
