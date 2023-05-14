// Carousel images
const images = [
  "./../media/carousel/IMG_1.JPG",
  "./../media/carousel/IMG_2.JPG",
  "./../media/carousel/IMG_3.JPG",
  "./../media/carousel/IMG_4.JPG",
  "./../media/carousel/IMG_5.JPG",
  "./../media/carousel/IMG_6.JPG",
  "./../media/carousel/IMG_7.JPG",
  "./../media/carousel/IMG_8.JPG",
  "./../media/carousel/IMG_9.JPG",
];

// Get carousel section and create image elements
const carouselSection = document.getElementById("carrosselmain");
const imageElements = images.map((image) => {
  const img = document.createElement("img");
  img.src = image;
  img.classList.add("carousel-image");
  return img;
});

// Set up carousel index and show first image
let currentIndex = 0;
imageElements[currentIndex].classList.add("active");
carouselSection.appendChild(imageElements[currentIndex]);

// Function to switch to next image
function showNextImage() {
  // Remove current image and show next one
  imageElements[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % imageElements.length;
  imageElements[currentIndex].classList.add("active");

  // Remove old image from carousel and add new one
  carouselSection.removeChild(carouselSection.firstChild);
  carouselSection.appendChild(imageElements[currentIndex]);
}

// Start carousel timer
const carouselTimer = setInterval(showNextImage, 5000);
