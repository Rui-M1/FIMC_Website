let slideIndex = 0;
const images = [
  './../media/carousel/IMG_1.JPG',
  './../media/carousel/IMG_2.JPG',
  './../media/carousel/IMG_3.JPG',
  './../media/carousel/IMG_4.JPG',
  './../media/carousel/IMG_5.JPG',
  './../media/carousel/IMG_6.JPG',
  './../media/carousel/IMG_7.JPG',
  './../media/carousel/IMG_8.JPG',
];

document.addEventListener('DOMContentLoaded', function() {
  const slideshowContainer = document.getElementById('slideshow-container');
  let timer; // Timer variable

  function createSlide(imgSrc) {
    const slide = document.createElement('div');
    slide.className = 'mySlides fade';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '100%';

    slide.appendChild(img);
    slideshowContainer.appendChild(slide);
  }

  function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    timer = setTimeout(showSlides, 4500); // Change image every 4.5 seconds
  }

  // Create slides from the image URLs
  for (let i = 0; i < images.length; i++) {
    createSlide(images[i]);
  }

  showSlides();

  // Next/previous controls
  function plusSlides(n) {
    clearTimeout(timer); // Clear the existing timer
    const slides = document.getElementsByClassName('mySlides');
    slideIndex += n;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    timer = setTimeout(showSlides, 4500); // Change image every 4.5 seconds
  }

  // Thumbnail image controls
  function currentSlide(n) {
    clearTimeout(timer); // Clear the existing timer
    slideIndex = n;
    showSlides();
  }

  // Attach onclick event handlers to the previous and next buttons
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  prevButton.addEventListener('click', function() {
    plusSlides(-1);
  });
  nextButton.addEventListener('click', function() {
    plusSlides(1);
  });
});
