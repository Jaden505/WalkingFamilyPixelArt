import ImageAnimator from './image_animator.jsx';
import { img_styles, widget_styles, paths, heart, heart_img_styles, heart_widget_styles } from './pixelart_details.jsx';

let animator = new ImageAnimator(paths, widget_styles, img_styles, 'MamaAndKaya', 9, 24);
animator.start();

export const render = () => (
  <div>
    <div style={widget_styles}>
      <img id="MamaAndKaya" src={paths[0]} style={img_styles} />
    </div>
    <div style={heart_widget_styles}>
      <img id="Heart" src={heart} style={heart_img_styles} />
    </div>
  </div>
);
