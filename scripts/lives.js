import { livesElement, meterElement } from './elements.js'
import { stopGame } from '../index.js'
 
let _lives = 3

function setLives(value) {
  _lives = value

  livesElement.setAttribute('data-lives', _lives)
  meterElement.value = _lives

  if(_lives < 1) {
    stopGame()
  }
}

function lives() {
  return _lives
}

export { lives, setLives}
