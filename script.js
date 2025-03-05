localStorage.setItem('theme', "")
localStorage.getItem("theme")

let theme = window.localStorage.getItem('theme')
let button = document.querySelector('.switch input')
console.log(button.parentNode)
let linkshover = document.querySelectorAll('.nav-container>.nav-list>li>a ')

if (theme === 'darkmode') {
  document.body.classList.add("darkmode")
}

button.addEventListener('click', function () {
  document.body.classList.toggle('darkmode')
  if (theme === "darkmode") {
    document.body.classList.remove("darkmode")
    window.localStorage.setItem('theme', '')
  } else {
    window.localStorage.setItem('theme', 'darkmode')
  }
})

// menu-mobile

let menuM = document.querySelector('span.material-symbols-outlined');

let navM = document.querySelector('.nav-mobile')

menuM.addEventListener('click', function () {
  navM.classList.toggle('close')

})
