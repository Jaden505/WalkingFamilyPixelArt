export default class ImageAnimator {
    constructor(images, wi_styles, im_styles, name, frame_rate, animation_speed, max_pos) {
        this.images = images;
        this.wi_styles = wi_styles;
        this.im_styles = im_styles;
        this.name = name;

        this.currentImageIndex = 0;
        this.position = 0;
        this.ANIMATION_SPEED = animation_speed;
        this.FRAME_RATE = frame_rate;
        this.MAX_POSITION = max_pos;

        this.moving = null;
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
        if (this.position >= this.MAX_POSITION) {
            clearInterval(this.moving);
        }

        this.position += 1;

        if (this.position % this.FRAME_RATE === 0) {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

            const imagePath = this.images[this.currentImageIndex];
            const transform = `translateX(${this.position}%)`;
            const imageElement = document.getElementById(this.name);
            if (imageElement) {
            imageElement.src = imagePath;
            imageElement.style.transform = transform;
            }
        }
    }
}
