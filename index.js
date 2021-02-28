const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
  });
});

var myVideo = document.getElementById('trailerVideo');

VisSense.VisMon.Builder(VisSense(myVideo))
  .on('fullyvisible', function () {
    myVideo.play();
  })
  .on('hidden', function () {
    myVideo.pause();
  })
  .build()
  .start();
