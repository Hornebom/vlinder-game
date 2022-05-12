function positionHandler({ game, player, stage }) {
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

  return { setPosition }
}

export default positionHandler
