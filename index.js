import livesHandler from './scripts/lives.js'
import scoreHandler from './scripts/score.js'
import durationHandler from './scripts/duration.js'
import collisionHandler from './scripts/collision.js'
import getTargetAnimation from './scripts/getTargetAnimation.js'
import animateCollision from './scripts/animateCollision.js'
import stepsHandler from './scripts/steps.js'
import viewportHelper from './scripts/viewport.js'
import controlHandler from './scripts/controls.js'
import setPosition from './scripts/setPosition.js'
import { getStyles } from './scripts/utils.js'
import { game, targets, playButtons } from './scripts/elements.js'

let animations = []
let raf
const initialDuration = 3000
const [step, setStep] = stepsHandler(0)
const [duration, setDuration] = durationHandler({ initialValue: initialDuration, minValue: 700 })
const [score, setScore] = scoreHandler(0)
const [lives, setLives] = livesHandler({ defaultValue: 3, callback: stopGame })
const { collisions, observer } = collisionHandler(game)
const { addViewportHelper } = viewportHelper()

let controls
(async function() {
  controls = await controlHandler(setPosition)
  init()
})()

function loop() {
  if(collisions().length) {
    collisions().forEach(({ target }) => {
      const { x, y, z, theme } = getStyles(target)
  
      if(100 - Math.abs(z) >= 1) {
        animations.find(({ id }) => id === target.id).finish()

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

function createAnimation(target) {
  let animation = animations.find(({ id }) => target.id === id)
  
  if(animation) {
    observer.unobserve(target)
    animations.splice(animations.indexOf(animation), 1)
    
    setDuration(duration() - 20)
  }

  animation = getTargetAnimation({ target, duration: duration() })
  animation.id = target.id
  animations.push(animation)

  animation.onfinish = () => step() < 3 && createAnimation(target)
  observer.observe(target)
}

function startGame() {
  animations.forEach(animation => animation.cancel())
  animations = []
  setDuration(initialDuration)
  setScore(0)
  setLives(3)
  setStep(2)
  
  targets.forEach(target => createAnimation(target))
  controls.addControls()
  raf = requestAnimationFrame(loop)
}

function stopGame() {
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

