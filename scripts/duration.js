let _duration = 3000

function setDuration(value) {
  if(value > 700) {
    _duration = value
  }
}

function duration() {
  return _duration
}

export { duration, setDuration }
