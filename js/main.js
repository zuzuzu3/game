'use strict';
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    } else if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDpts() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        moveSlides();
        updateDots();
      })
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    })
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDpts();


  next.addEventListener('click', () => {
    currentIndex++;
    updateDots();
    moveSlides();
    updateButtons();
  })

  prev.addEventListener('click', () => {
    currentIndex--;
    updateDots();
    moveSlides();
    updateButtons();
  })

  window.addEventListener('resize', () => {
    moveSlides();
  })
}