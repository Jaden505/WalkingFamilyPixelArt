import ImageAnimator from './image_animator.jsx';

const mamaWidgetStyles = {
  width: '250px',
  height: '250px',
  position: 'fixed',
  bottom: '16px',
  left: '-200px',
};

const kayaWidgetStyles = {
  width: '160px',
  height: '160px',
  position: 'fixed',
  bottom: '0',
  left: '-200px',
};

const imageStyles = {
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s ease',
};

const kaya_im = [
  'PixelArt/Kaya/Kaya_walk1.png',
  'PixelArt/Kaya/Kaya_walk2.png',
  'PixelArt/Kaya/Kaya_walk3.png',
  'PixelArt/Kaya/Kaya_walk4.png',
  'PixelArt/Kaya/Kaya_walk5.png',
];

const mama_im = [
  'PixelArt/Mama/walk1.png',
  'PixelArt/Mama/walk2.png',
  'PixelArt/Mama/walk3.png',
  'PixelArt/Mama/walk4.png',
  'PixelArt/Mama/walk5.png',
  'PixelArt/Mama/walk6.png',
 ];

let mama_animator = new ImageAnimator(mama_im, mamaWidgetStyles, imageStyles, 'mama', 9, 24, 800);
let kaya_animator = new ImageAnimator(kaya_im, kayaWidgetStyles, imageStyles, 'kaya', 9, 15, 1100);


mama_animator.start();

setTimeout(() => {
  kaya_animator.start();
}, 700);


export const render = () => (
  <div>
    <div style={mamaWidgetStyles}>
      <img id="mama" src={mama_im[0]} style={imageStyles} />
    </div>
    <div style={kayaWidgetStyles}>
      <img id="kaya" src={kaya_im[0]} style={imageStyles} />
    </div>
  </div>
);
