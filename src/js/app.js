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

const menu = document.querySelector('.menu');
const list = document.querySelector('.top__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    list.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})
