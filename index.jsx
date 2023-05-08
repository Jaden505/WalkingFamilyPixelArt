import ImageAnimator from './image_animator.jsx';

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

// const images = [
//   'PixelArt/Kaya/Kaya_walk1.png',
//   'PixelArt/Kaya/Kaya_walk2.png',
//   'PixelArt/Kaya/Kaya_walk3.png',
//   'PixelArt/Kaya/Kaya_walk4.png',
//   'PixelArt/Kaya/Kaya_walk5.png',
// ];

const images = [
  'PixelArt/Mama/walk1.png',
  'PixelArt/Mama/walk2.png',
  'PixelArt/Mama/walk3.png',
  'PixelArt/Mama/walk4.png',
  'PixelArt/Mama/walk5.png',
  'PixelArt/Mama/walk6.png',
 ];

const ANIMATION_SPEED = 15;

let im_animator = new ImageAnimator(images, widgetStyles, imageStyles);
im_animator.start();

export const render = () => (
  <div style={widgetStyles}>
    <img id="moving-image" src={images[0]} style={imageStyles} />
  </div>
);

