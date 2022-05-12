function getTargetAnimation({ target, duration }) {
  return target.animate({
    transform: [
      `translateX(${-50 + Math.random() * 100}vw) translateY(${-50 + Math.random() * 100}vh) translateZ(-500px) scale(.1)`, 
      `translateX(${-50 + Math.random() * 100}vw) translateY(${-50 + Math.random() * 100}vh) translateZ(201px) scale(1)`
    ],
    opacity: [0.3, 1]
  }, {
    duration: duration,
    delay: Math.random() * (duration * 1.5)
  })
}

export default getTargetAnimation
