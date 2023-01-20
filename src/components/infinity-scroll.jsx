import normalizeWheel from "normalize-wheel"; // npm i normalize-wheel -D
import Media from "./Media";

class InfinityScroll {
  constructor() {
    return;
  }

  init() {
    let doc = document;
    (this.qsa = (s, o = doc) => o.querySelectorAll(s)),
      (this.qs = (s, o = doc) => o.querySelector(s));

    this.scroll = {
      ease: 0.05,
      current: 0,
      target: 0,
      last: 0
    };

    this.onResize();
    this.createMedias();
    this.update();
    this.addEventListeners();
  }

  //? - =========================  createmedias  ========================= -//
  //? - =========================  createmedias  ========================= -//
  createMedias() {
    this.imgs = this.qsa(".infinity__each");

    this.imgs = this.qsa(".infinity__each");
    this.medias = Array.from(this.imgs).map((element) => {
      let media = new Media({
        element,
        height: this.galleryHeight
      });
      return media;
    });
  }

  //? - =========================  ONWHEEL  ========================= -//
  //? - =========================  ONWHEEL  ========================= -//
  onResize(event) {
    this.viewport = {
      height: window.innerHeight,
      width: window.innerWidth
    };

    this.gallery = document.querySelector(".infinity__hold");
    // this.galleryBounds = this.gallery.getBoundingClientRect().height;
    this.galleryHeight = this.galleryBounds;

    /*if (this.medias) {
            this.medias.forEach(media => media.onResize({
                height: this.galleryHeight,
            }))
        }*/
  }

  //? - =========================  lerp  ========================= -//
  //? - =========================  lerp  ========================= -//
  lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
  }

  //? - =========================  ONWHEEL  ========================= -//
  //? - =========================  ONWHEEL  ========================= -//
  onWheel(event) {
    const normalized = normalizeWheel(event);
    const speed = normalized.pixelY;
    this.scroll.target -= speed * 0.9;
  }

  //? - =========================  UPDATE  ========================= -//
  //? - =========================  UPDATE  ========================= -//
  update() {
    this.scroll.current = this.lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    if (this.scroll.current > this.scroll.last) {
      this.direction = "down";
      //console.log(this.direction);
    } else if (this.scroll.current < this.scroll.last) {
      this.direction = "up";
      //console.log(this.direction);
    }

    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, this.direction));
    }
    //console.log(this.scroll.current);

    this.scroll.last = this.scroll.current;
    window.requestAnimationFrame(this.update.bind(this));
  }

  //? - =========================  LISTENERS  ========================= -//
  //? - =========================  LISTENERS  ========================= -//
  addEventListeners() {
    //window.addEventListener('resize', this.onResize.bind(this))

    window.addEventListener("mousewheel", this.onWheel.bind(this));
    //window.addEventListener('wheel', this.onWheel.bind(this))
  }
}
export const infinity = new InfinityScroll();
