
const widgetStyles = {
  width: '200px',
  height: '200px',
  position: 'fixed',
  bottom: '0',
  left: '0',
};

const imageStyles = {
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s ease',
};

const images = [
  'PixelArt/Kaya_walk1.png',
  'PixelArt/Kaya_walk2.png',
  'PixelArt/Kaya_walk3.png',
  'PixelArt/Kaya_walk4.png',
  'PixelArt/Kaya_walk5.png',
];

let currentImageIndex = 0;
let position = 0;
const INTERVAL = 15;
const IMG_SWITCH_INTERVAL = 15;
const MAX_POSITION = 600;

function moveImage() {
  if (position >= MAX_POSITION) {
    clearInterval(moving);
  }

  position += 1;

  if (position % IMG_SWITCH_INTERVAL === 0) {
    currentImageIndex = (currentImageIndex + 1) % images.length;

    const imagePath = images[currentImageIndex];
    const transform = `translateX(${position}%)`;
    const imageElement = document.getElementById('moving-image');
    if (imageElement) {
      imageElement.src = imagePath;
      imageElement.style.transform = transform;
    }
  }
}

let moving = setInterval(moveImage, INTERVAL);

export const render = () => (
  <div style={widgetStyles}>
    <img id="moving-image" src={images[0]} style={imageStyles} />
  </div>
);

