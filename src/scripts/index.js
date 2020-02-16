import gsap from 'gsap';

//simple tween like the old TweenMax.to(...)
// gsap.to('h1', { duration: 2, x: 100 });

//create a timeline and add a tween
// var tl = gsap.timeline();
// tl.to('h1', { duration: 2, x: 100 });
// tl.to('h1', { duration: 2, y: 100 });

window.addEventListener('scroll', doSomething);

const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider__inner');
const p = document.querySelector('.slide-section__meta p');
const numbers = document.querySelector('.header__meta__group h4');
const numbers2 = document.querySelector('.header__title-section h3');

function doSomething(e) {
  var distanceToTop = slider.getBoundingClientRect().top;
  p.innerHTML = `X1.${distanceToTop}`;
  numbers.innerHTML = distanceToTop;
  numbers2.innerHTML = `A3-${distanceToTop}`;
  sliderInner.style.transform = `translateX(${distanceToTop / 3}px)`;
}
