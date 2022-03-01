function changeMode() {
  changeClass()
  changeText()
}

function changeClass() {
  bTn.classList.toggle(darkModeClass)
  pageTitle.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'
  if (body.classList.contains(darkModeClass)) {
    bTn.innerHTML = lightMode
  
    return
  }
  bTn.innerHTML = darkMode
 
}
const darkModeClass = 'dark-mode'
const bTn = document.getElementById('mode-selector')
const pageTitle = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

bTn.addEventListener('click', changeMode)
