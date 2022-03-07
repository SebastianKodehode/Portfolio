// ===== Burger Menu ===== //
let burgerMenu = document.getElementById('nav-burger');
let overlay = document.getElementById('nav-list');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

overlay.addEventListener('click', function () {
  burgerMenu.classList.remove('close')
  overlay.classList.remove('overlay')
})



// ===== Fade in div ===== //

const trigger = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  },
  {
    threshold: 0,
  }
)

trigger.forEach(trigger => {
  observer.observe(trigger)
})

