el.addEventListener('click', evt => {
  let start = performance.now()
  requestAnimationFrame(function raf (now) {
    let count = Math.floor(now - start)
    el.style.setProperty('--thick', (count / duration * 45))
    el.style.setProperty('--rad', (count / duration * 200))
    if (count > duration) {
      return
    }
    requestAnimationFrame(raf)
  })
})