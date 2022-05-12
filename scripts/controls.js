async function controlHandler(callback) {
  let addControls, removeControls
  const isTouch = 'ontouchstart' in window
  const moduleName = isTouch ? 'touch' : 'pointer'
  
  await import(`./${moduleName}.js`)
    .then(({ default: module }) => {
      const handler = module(callback)
      addControls = handler.addControls 
      removeControls = handler.removeControls
    })
  
  return { isTouch, addControls, removeControls }
}

export default controlHandler
