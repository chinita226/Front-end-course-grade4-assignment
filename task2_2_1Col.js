
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left=slideWidth *0 + 'px';
// slides[1].style.left=slideWidth *1 + 'px';
// slides[2].style.left=slideWidth *2 + 'px';//get 3 pictures all appear
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
// use loop for pictures
slides.forEach(setSlidePosition);

//right
nextButton.addEventListener('click', e => {
    //move slide
    const currenSlide = track.querySelector('.current-slide');
    const nextSlide = currenSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currenSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

