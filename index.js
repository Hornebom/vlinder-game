import { duration, setDuration } from './scripts/duration.js'
import { lives, setLives } from './scripts/lives.js'
import { score, setScore } from './scripts/scores.js'
import { observer, collisions } from './scripts/collisions.js'
import animateCollision from './scripts/animateCollision.js'
import { step, setStep } from './scripts/steps.js'
import addViewportHelper from './scripts/viewportHelper.js'
import getControls from './scripts/controls.js'
import setPosition from './scripts/setPosition.js'
import { getStyles } from './scripts/utils.js'
import { getAnimationById, removeAnimation, addAnimation, cancelAndRemoveAnimations, finishAnimation, getAnimation } from './scripts/animations.js'
import { game, targets, playButtons } from './scripts/elements.js'

let raf
let controls

(async function() {
  controls = await getControls(setPosition)
  init()
})()

function loop() {
  if(collisions().length) {
    collisions().forEach(({ target }) => {
      const { x, y, z, theme } = getStyles(target)
  
      if(100 - Math.abs(z) >= 1) {
        finishAnimation(target.id)

        if('evil' in target.dataset) {
          setLives(lives() - 1)
        } else {
          setScore(score() + parseInt(target.dataset.points))
        }
        
        animateCollision({ x, y, z, theme })
      }
    })
  }

  raf = requestAnimationFrame(loop)
}

function animateTarget(target) {
  let animation = getAnimationById(target.id)
  
  if(animation) {
    observer.unobserve(target)
    removeAnimation(animation)
    setDuration(duration() - 20)
  }

  animation = getAnimation({ 
    target, 
    duration: duration(), 
    id: target.id, 
    onFinish:  () => step() < 3 && animateTarget(target)
  })
  addAnimation(animation)

  observer.observe(target)
}

function startGame() {
  cancelAndRemoveAnimations()
  setDuration()
  setScore(0)
  setLives(3)
  setStep(2)
  
  targets.forEach(target => animateTarget(target))
  controls.addControls()
  raf = requestAnimationFrame(loop)
}

export function stopGame() {
  targets.forEach(target => observer.unobserve(target))
  cancelAnimationFrame(raf)
  controls.removeControls()
  setStep(3)
}

function init() {
  playButtons.forEach(button => button.addEventListener('click', startGame))
  setStep(1)
  addViewportHelper()

  if(controls.isTouch) {
    game.classList.add('is-touch')
  }
}

