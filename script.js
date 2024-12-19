const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let index = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * width}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

// Handle resizing
window.addEventListener('resize', updateCarousel);

