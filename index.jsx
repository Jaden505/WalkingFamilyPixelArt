import ImageAnimator from './image_animator.jsx';
import { mama_im, kaya_im, mama_widget_styles, kaya_widget_styles, im_styles } from './pixelart_details.jsx';

let mama_animator = new ImageAnimator(mama_im, mama_widget_styles, im_styles, 'mama', 9, 24, 800);
let kaya_animator = new ImageAnimator(kaya_im, kaya_widget_styles, im_styles, 'kaya', 9, 15, 1100);

mama_animator.start();
setTimeout(() => {
  kaya_animator.start();
}, 700);

export const render = () => (
  <div>
    <div style={mama_widget_styles}>
      <img id="mama" src={mama_im[0]} style={im_styles} />
    </div>
    <div style={kaya_widget_styles}>
      <img id="kaya" src={kaya_im[0]} style={im_styles} />
    </div>
  </div>
);
