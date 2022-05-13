import { initialDuration } from '../index.js'

let _duration = initialDuration

function setDuration(value) {
  if(value > 700) {
    _duration = value
  }
}

function duration() {
  return _duration
}

export { duration, setDuration }
