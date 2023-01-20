export default class {
  constructor(el, height) {
    this.el = el.element;
    //this.height = el.height
    this.height = window.innerHeight * 3.5;
    this.extra = 0;
  }

  update(posY, direction) {
    let thisOffset = this.el.getBoundingClientRect().top;
    this.el.style.transform = `translate3d(0, ${posY.current.toFixed(0) - this.extra
      }px, 0)`;

    if (
      direction === "up" &&
      thisOffset < -this.el.getBoundingClientRect().height
    ) {
      this.extra -= this.height;
    }

    if (direction === "down" && thisOffset > this.height) {
      this.extra += this.height;
    }
  }

  onResize(sizes) {
    this.extra = 0;
  }
}
