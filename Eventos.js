const carrouselMain = documento.querySelector('.carrousel-main');
const video = document.querySelectorAll('video');

const prevebtn = document.querySelector('#PrevBtn');
const nextbtn = document.querySelector('#NextBtn');


let count = 0;
const size = video[0].clientWidth + 10;

nextbtn.addEventListener('click', () => {
    if(count >= video.length - 1) return;
    carrouselMain.style.transition = 'transform 0.4s ease-in-out';
    count++;
    carrouselMain.style.transform = `translateX(${-size * count}px)`;
});


prevebtn.addEventListener('click', () => {
    if(count <= 0) return;
    carrouselMain.style.transition = 'transform 0.4s ease-in-out';
    count--;
    carrouselMain.style.transform = `translateX(${-size * count}px)`;
});

/*
const carouselSlide = document.querySelector('.carousel-slide');
const videos = document.querySelectorAll('video');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 0;
const size = videos[0].clientWidth + 10; // Largura do vídeo + margem

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= videos.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
*/