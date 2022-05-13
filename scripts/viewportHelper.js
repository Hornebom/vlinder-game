import { app } from './elements.js'
import { debounce } from './utils.js'

let vh = 0

const resizeHandler = debounce(() => {
  const newHeight = window.innerHeight 

  if(newHeight !== vh) {
    vh = newHeight
    app.style.setProperty('--vh', `${vh}px`)
  }
}, 300)

function addViewportHelper() {
  window.addEventListener('resize', resizeHandler)
}

resizeHandler()

export default addViewportHelper
