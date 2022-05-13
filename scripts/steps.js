import { intro, game, finish} from './elements.js'
const IS_PLAYING_CLASS = 'is-playing'
const HIDDEN_CLASS = 'is-hidden'

let _step = 0

function setStep(value) {
  _step = value

  if(_step === 1) {
    game.classList.add(HIDDEN_CLASS)
    finish.classList.add(HIDDEN_CLASS)
  }

  if(_step === 2) {
    game.classList.remove(HIDDEN_CLASS)
    intro.classList.add(HIDDEN_CLASS)
    finish.classList.add(HIDDEN_CLASS)
    game.classList.add(IS_PLAYING_CLASS)
  }
  
  if(_step === 3) {
    game.classList.remove(IS_PLAYING_CLASS)
    finish.classList.remove(HIDDEN_CLASS)
  }
}

function step() {
  return _step
}

export { step, setStep }
