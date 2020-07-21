/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = [
  "./assets/carousel/mountains.jpeg", 
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

const carouselMaker = () => {
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const image = document.createElement('img')
  const rightBtn = document.createElement('div')
  
  carousel.className = 'carousel'
  leftBtn.className = 'left-button'
  rightBtn.className = 'right-button'

  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  

  image.src = images[0];
  const img1 = images[0];
	const img2 = images[1];
	const img3 = images[2];
	const img4 = images[3];
  const img = [
  img1, img2, img3, img4
  ]
  
  carousel.append(leftBtn, image, rightBtn)

  // carousel.appendChild(leftBtn)
  // carousel.appendChild(img1)
  // carousel.appendChild(img2)
  // carousel.appendChild(img3)
  // carousel.appendChild(img4)
  // carousel.appendChild(rightBtn)
  
  image.style.display = 'block'

  let i = 0;
  const counter = 1;
  const size = images.clientwidth;

  carouselContainer.style.transform = `translateX(${-size * counter}px)`;


leftBtn.addEventListener('click', event => {
	if(i > 0){
    i -= 1;
    image.src = img[i];
		}
	if(i === 0){
		i = 3;
		image.src = img[i];
  }
  carouselContainer.style.transition = 'transform 0.4s ease-in-out';
  });
  
	rightBtn.addEventListener('click', event => {
		if(i <= img.length){
      i += 1;
		image.src = img[i];
		}
		if(i == 4){
			i = 0;
			image.src = img[i];
    }
    carouselContainer.style.transition = 'transform 0.4s ease-in-out';
	});
  
  
  return carousel
}



// query/append carousel
const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(carouselMaker());
