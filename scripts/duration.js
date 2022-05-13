const initialDuration = 3000
let _duration = initialDuration

function setDuration(value) {
  if(value > 700) {
    _duration = value
  }
}

function resetDuration() {
  setDuration(initialDuration)
}

function duration() {
  return _duration
}

export { duration, setDuration, resetDuration }
