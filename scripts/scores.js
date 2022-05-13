import { zeroPad } from './utils.js'
import { scoreElement, hightScoreElement } from './elements.js'

const STORAGE_KEY = 'high-score'
let _score = 0
let highScore = parseInt(localStorage.getItem(STORAGE_KEY)) // => NaN

if(isNaN(highScore)) {
  localStorage.setItem(STORAGE_KEY, _score)
  highScore = _score
}
setHighScore(highScore)

function setScore(value) {
  _score = value
  scoreElement.textContent = zeroPad(_score, 5)

  if(highScore < _score) {
    localStorage.setItem(STORAGE_KEY, _score)
    setHighScore(_score)
  }
}

function setHighScore(value) {
  hightScoreElement.textContent = zeroPad(value, 5)
}

function score() {
  return _score
}

export { score, setScore }
