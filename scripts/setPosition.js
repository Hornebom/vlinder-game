import { game, player, stage } from './elements.js'
const timingOptions = {duration: 1, fill: 'both'}

function setPosition({ x, y, perspectiveOrigin }) {
  game.animate({ 
    transform: `translate(${x}px, ${y}px)`
  }, timingOptions)
  player.animate({ 
    transform: `translate(${x}px, ${y}px) rotateX(90deg)`
  }, timingOptions)
  stage.animate({ 
    transform: `translate(${-x}px, ${-y}px)`,
    perspectiveOrigin
  }, timingOptions)
}

export default setPosition
