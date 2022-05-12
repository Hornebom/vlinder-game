function zeroPad(num, places) {
  var zero = places - num.toString().length + 1
  return new Array(+(zero > 0 && zero)).join('0') + num
}

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

function getStyles(element) {
  const style = getComputedStyle(element)
  const theme = style.getPropertyValue('--target-theme')
  const { m41: x, m42: y, m43: z } = new DOMMatrixReadOnly(style.transform)
  
  return { x, y, z, theme }
}

export { zeroPad, debounce, getStyles }
