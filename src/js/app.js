import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const list = document.querySelector('.top__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    list.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})

