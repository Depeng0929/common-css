export default function setupMain() {
  function setMaxHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }
  function setRetina() {
    if (window.devicePixelRatio) {
      const dpr = devicePixelRatio >= 3? 3: devicePixelRatio >= 2? 2: 1;
      document.documentElement.setAttribute('data-dpr', `${dpr}`);
    }
  }
  setMaxHeight()
  setRetina()
  window.addEventListener('resize', setMaxHeight)
}
