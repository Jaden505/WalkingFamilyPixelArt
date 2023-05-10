let scale = 0.8;
let growing = true;
let max_grow = 1;

const animateHeart = (reverse_grow) => {
    const heartEl = document.getElementById('Heart');
    if (!heartEl) return false;

    const updateHeart = () => {
      scale = growing ? scale + 0.001 : scale - 0.001;
      if (scale > max_grow && reverse_grow) {
        growing = false;
      } else if (scale < 0.8) {
        growing = true;
      } else if (scale > max_grow && !reverse_grow){
        return;
      }

      heartEl.style.transform = `scale(${scale})`;
      requestAnimationFrame(updateHeart);
    };
  
    updateHeart();
  };
  
  export default animateHeart;
  