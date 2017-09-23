export const debounce = function (fn, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      fn.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (!timeout) { fn.apply(context, args) }
  }
}

export default { debounce }
