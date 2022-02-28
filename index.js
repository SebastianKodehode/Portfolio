// ===== Burger Menu ===== //
let burgerMenu = document.getElementById('nav-burger');
let overlay = document.getElementById('nav-list');

burgerMenu.addEventListener('click',function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

overlay.addEventListener('click', function() {
  burgerMenu.classList.remove('close')
  overlay.classList.remove('overlay')
})



// ===== Fade in div ===== //

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries, 
  appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, 
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })

