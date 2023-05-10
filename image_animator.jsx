import animateHeart from './heart_animator.jsx';

export default class ImageAnimator {
    constructor(images, wi_styles, im_styles, name, frame_rate, animation_speed) {
        this.images = images;
        this.wi_styles = wi_styles;
        this.im_styles = im_styles;
        this.name = name;

        this.currentImageIndex = 0;
        this.position = 0;
        this.ANIMATION_SPEED = animation_speed;
        this.FRAME_RATE = frame_rate;
        this.MAX_POSITION = window.innerWidth + 250;

        this.moving = null;
        this.direction = 1;  // 1 or -1
        this.heart = false;
    }

    start() {
        this.moving = setInterval(() => {
          this.moveImage();
        }, this.ANIMATION_SPEED);
      }
    
      stop() {
        clearInterval(this.moving);
        this.moving = null;
      }

      moveImage() {
        if (!this.heart) {
          animateHeart(true);
          this.heart = true;
        }

        const imageElement = document.getElementById(this.name);

        if (imageElement) {
            let co = imageElement.getBoundingClientRect().right;
            if (this.direction === 1 && co > this.MAX_POSITION || this.direction === -1 && co < 0)
            this.direction *= -1;
        }
    
        this.position += this.direction;
    
        if (this.position % this.FRAME_RATE === 0) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    
          const imagePath = this.images[this.currentImageIndex];
          let transform = `translateX(${this.position}%)`;

          if (this.direction === -1) {
            transform += ' scaleX(-1)';
          }
          if (imageElement) {
            imageElement.src = imagePath;
            imageElement.style.transform = transform;
          }
        }
      }
}
