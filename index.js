const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const myVideo = document.getElementById('trailerVideo');

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

VisSense.VisMon.Builder(VisSense(myVideo))
  .on('fullyvisible', function () {
    myVideo.play();
  })
  .on('hidden', function () {
    myVideo.pause();
  })
  .build()
  .start();

function onPersonSelect(e) {
  const persons = document.querySelectorAll('.person');
  const textWrapper = document.querySelectorAll('.person-text-wrapper');
  const id = e.target.id;
  const textElement = document.querySelector('.' + id + '-text');

  persons.forEach((e) => {
    e.classList.remove('active');
  });

  textWrapper.forEach((e) => {
    e.classList.remove('active');
  });

  e.target.classList.add('active');
  textElement.classList.add('active');
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
