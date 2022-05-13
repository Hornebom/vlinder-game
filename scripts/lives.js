import { livesElement, meterElement } from './elements.js'
import { stopGame } from '../index.js'
 
const initialLives = 3
let _lives = initialLives

function setLives(value) {
  _lives = value

  livesElement.setAttribute('data-lives', _lives)
  meterElement.value = _lives

  if(_lives < 1) {
    stopGame()
  }
}

function resetLives() {
  setLives(initialLives)
}

function lives() {
  return _lives
}

export { lives, setLives, resetLives }
