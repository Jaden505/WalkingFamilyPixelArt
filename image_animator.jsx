export default class ImageAnimator {
    constructor(images, wi_styles, im_styles) {
        this.images = images;
        this.wi_styles = wi_styles;
        this.im_styles = im_styles;

        this.currentImageIndex = 0;
        this.position = 0;
        this.ANIMATION_SPEED = 15;
        this.FRAME_RATE = 15;
        this.MAX_POSITION = 600;

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
            const imageElement = document.getElementById('moving-image');
            if (imageElement) {
            imageElement.src = imagePath;
            imageElement.style.transform = transform;
            }
        }
    }
}
