const livesElement = document.querySelector('[data-lives]')
const meterElement = document.querySelector('[data-meter]')
 
function livesHandler({ defaultValue, callback }) {
  let _lives = defaultValue

  function setLives(value) {
    _lives = value

    livesElement.setAttribute('data-lives', _lives)
    meterElement.value = _lives

    if(_lives < 1) {
      callback()
    }
  }

  function lives() {
    return _lives
  }

  return [lives, setLives]
}

export default livesHandler
