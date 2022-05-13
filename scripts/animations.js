let animations = []

function getAnimationById(searchId) {
  return animations.find(({ id }) => id === searchId)
}

function removeAnimation(animation) {
  animation.finish()
  animations.splice(animations.indexOf(animation), 1)
}

function finishAnimation(id) {
  const animation = getAnimationById(id)
  if(animation) {
    animation.finish()
  }
}

function addAnimation(animation) {
  animations.push(animation)
}

function cancelAndRemoveAnimations() {
  animations.forEach(animation => animation.cancel())
  animations = []
}

function getAnimation({ target, duration, id, onFinish }) {
  const animation =  target.animate({
    transform: [
      `translateX(${-50 + Math.random() * 100}vw) translateY(${-50 + Math.random() * 100}vh) translateZ(-500px) scale(.1)`, 
      `translateX(${-50 + Math.random() * 100}vw) translateY(${-50 + Math.random() * 100}vh) translateZ(201px) scale(1)`
    ],
    opacity: [0.3, 1]
  }, {
    duration: duration,
    delay: Math.random() * (duration * 1.5)
  })
  animation.onfinish = onFinish
  animation.id = id
  return animation
}

export { 
  getAnimationById, 
  removeAnimation,
  addAnimation,
  cancelAndRemoveAnimations,
  finishAnimation,
  getAnimation
}
