import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".clients__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
    },
});

new Swiper(".presents__swiper", {
    slidesPerView: 1,
    spaceBetween: 13,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      575:{
        slidesPerView: 2,
      }
    },
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.top__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    list.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})