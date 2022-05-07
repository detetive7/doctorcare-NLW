function onScroll() {
  showNavOnScroll()
  buttonTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function buttonTopOnScroll() {
  if (scrollY > 500) {
    buttonTop.classList.remove('hidden')
  } else {
    buttonTop.classList.add('hidden')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
