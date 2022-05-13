import setPosition from './setPosition.js'

function pointerHandler(onUpdate) {
  function addControls() {
    window.addEventListener('mousemove', handleEvent)
  }
  
  function removeControls() {
    window.removeEventListener('mousemove', handleEvent)
  }

  function handleEvent({ pageX, pageY }) {
    const { innerWidth, innerHeight } = window

    setPosition({ 
      x: pageX - innerWidth * .5, 
      y: pageY - innerHeight * .5,
      perspectiveOrigin: `${(.5 + pageX / innerWidth) * 50}% ${(.5 + pageY / innerHeight) * 50}%`
    })
  }

  return { addControls, removeControls }
}

export default pointerHandler
