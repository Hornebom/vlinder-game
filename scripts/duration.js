function durationHandler({ initialValue, minValue }) {
  let _duration = initialValue

  function setDuration(value) {
    if(value > minValue) {
      _duration = value
    }
  }

  function duration() {
    return _duration
  }

  return [duration, setDuration]
}

export default durationHandler
