import gsap from 'gsap';

gsap.to('.overlay--light', {
  y: '-100%',
  duration: 1,
  delay: 0.5,
  ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
});

gsap.to('.overlay', {
  y: '-100%',
  duration: 1.5,
  delay: 0.5,
  ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
});

gsap.from('header', {
  scale: 0.9,
  // autoAlpha: 0,
  duration: 0.5,
  delay: 1.5
});

window.addEventListener('scroll', doSomething);

const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider__inner');
const p = document.querySelector('.slide-section__meta p');
const numbers = document.querySelector('.header__meta__group h4');
const numbers2 = document.querySelector('.header__title-section h3');

const cheeky = document.querySelector('.cheeky');
const cheekyBeeky = document.querySelector('.cheekyBeeky');
const sign = document.querySelector('.sign');

const header = document.querySelector('header');
const headerTitle = document.querySelector('.header__title-section__inner');
const headerDesc = document.querySelector('.header__desc');
const slideshow = document.querySelector('.slideshow');

function doSomething(e) {
  const distanceToHeader = header.getBoundingClientRect().top;

  headerTitle.style.transform = `translateX(${distanceToHeader / 6}px)`;
  headerDesc.style.transform = `translateY(${distanceToHeader / 12}px)`;

  const distanceToTop = slider.getBoundingClientRect().top;
  p.innerHTML = `X4.${distanceToTop.toString().substring(0, 6)}`;
  numbers.innerHTML = distanceToTop.toString().substring(0, 6);
  numbers2.innerHTML = `A3-${distanceToTop.toString().substring(0, 6)}`;
  sliderInner.style.transform = `translateX(${distanceToTop / 3}px)`;

  const distanceToCheeky = cheeky.getBoundingClientRect().top;
  cheekyBeeky.style.transform = `translateY(-${distanceToCheeky / 2}px) scale(1.1)`;
  sign.style.transform = `rotate(${distanceToCheeky / 6}deg)`;

  const distanceToSlideshow = slideshow.getBoundingClientRect().top;
  if (distanceToSlideshow < 100 && distanceToSlideshow > 98) showNext();
}

const control = document.querySelector('.pagination__control');
const slideImgsSmall = document.querySelectorAll('.slideshow-small-image img');
const slideImgsLarge = document.querySelectorAll('.slideshow-large-image img');

control.addEventListener('click', showNext);

function showNext() {
  gsap.to('.white', {
    duration: 1.2,
    x: '-100%',
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });

  gsap.to(slideImgsSmall[0], {
    duration: 0,
    autoAlpha: 0,
    delay: 0.4
  });

  gsap.to(slideImgsSmall[1], {
    duration: 0,
    autoAlpha: 1,
    delay: 0.4
  });

  gsap.to('.pagination', {
    background: '#B87757',
    delay: 0.25,
    duration: 1.2
  });

  const controls = document.querySelectorAll('.pagination__control');

  setTimeout(() => {
    controls[0].classList.remove('pagination__control--active');
    controls[1].classList.add('pagination__control--active');
  }, 250);

  gsap.to('.white2', {
    duration: 1.2,
    x: '-100%',
    delay: 0.25,
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });

  gsap.to(slideImgsLarge[0], {
    duration: 0,
    autoAlpha: 0,
    delay: 0.65
  });

  gsap.to(slideImgsLarge[1], {
    duration: 0,
    autoAlpha: 1,
    delay: 0.65
  });

  gsap.set('.white', {
    x: '100%',
    delay: 1.2
  });

  gsap.to('.white', {
    delay: 2.3,
    duration: 1.2,
    x: '-100%',
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });

  gsap.to(slideImgsSmall[1], {
    duration: 0,
    autoAlpha: 0,
    delay: 2.7
  });

  gsap.to(slideImgsSmall[2], {
    duration: 0,
    autoAlpha: 1,
    delay: 2.7
  });

  gsap.set('.white2', {
    x: '100%',
    delay: 1.45
  });

  gsap.to('.white2', {
    duration: 1.2,
    x: '-100%',
    delay: 2.55,
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });

  gsap.to(slideImgsLarge[1], {
    duration: 0,
    autoAlpha: 0,
    delay: 2.95
  });

  gsap.to(slideImgsLarge[2], {
    duration: 0,
    autoAlpha: 1,
    delay: 2.95
  });

  gsap.to('.pagination', {
    background: '#635E52',
    delay: 2.95,
    duration: 1.2
  });

  setTimeout(() => {
    controls[1].classList.remove('pagination__control--active');
    controls[2].classList.add('pagination__control--active');
  }, 2950);
}
