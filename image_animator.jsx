export default class ImageAnimator {
    constructor(images, wi_styles, im_styles, name, frame_rate, animation_speed, max_position) {
        this.images = images;
        this.wi_styles = wi_styles;
        this.im_styles = im_styles;
        this.name = name;

        this.currentImageIndex = 0;
        this.position = 0;
        this.ANIMATION_SPEED = animation_speed;
        this.FRAME_RATE = frame_rate;
        this.MAX_POSITION = max_position;

        this.moving = null;
        this.direction = 1;  // 1 or -1
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
        if (this.position >= this.MAX_POSITION || this.position < 0) {
          this.direction *= -1;
        }
    
        this.position += this.direction;
    
        if (this.position % this.FRAME_RATE === 0) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    
          const imagePath = this.images[this.currentImageIndex];
          let transform = `translateX(${this.position}%)`;
          const imageElement = document.getElementById(this.name);

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
