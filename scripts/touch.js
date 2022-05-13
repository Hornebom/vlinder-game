import { control, controlThumb } from './elements.js'
import setPosition from './setPosition.js'

function touchHandler() {
  const center = { x: 0, y: 0 }
  let top, left, width, height, threshold, distance, x, y

  function addControls() {
    updateVariables()
    control.addEventListener('touchmove', handleEvent)
  }
  
  function removeControls() {
    control.removeEventListener('touchmove', handleEvent)
  }

  function updateVariables() {
    const rect = control.getBoundingClientRect()
    top = rect.top
    left = rect.left
    width = rect.width
    height = rect.height
    center.x = left + width * .5
    center.y = top + height * .5
    threshold = control.clientHeight * 0.5 - controlThumb.clientHeight * 0.5
  }

  function getDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1)
  }

  function handleEvent({ targetTouches }) {
    const { innerWidth, innerHeight } = window
    const { pageX, pageY } = targetTouches[0]
    distance = getDistance(pageX, pageY, center.x, center.y)
    
    if (distance <= threshold) {
        x = center.x - pageX
        y = center.y - pageY
    } else {
        x = ((center.x - pageX) / distance) * threshold
        y = ((center.y - pageY) / distance) * threshold
    }

    moveThumb(x, y)
    setPosition({ 
      x: -x / width * (innerWidth * 1), 
      y: -y / height * (innerHeight * 1),
      perspectiveOrigin: '50% 50%'
    })
  }

  function moveThumb(x, y) {
    controlThumb.animate({
      transform: `translate(${-x}px, ${-y}px)`
    }, {
      fill: 'both',
      duration: 1
    })
  }

  return { addControls, removeControls }
}

export default touchHandler
