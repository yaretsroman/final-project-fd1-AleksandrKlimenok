import './top-brands.scss';
import Swiper, { Autoplay } from 'swiper';

new Swiper('.top-brands', {
  modules: [Autoplay],
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 5,
});
