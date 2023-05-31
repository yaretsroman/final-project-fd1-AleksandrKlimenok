import './header-banner.scss';
import Swiper, { Autoplay, Navigation } from 'swiper';

new Swiper('.header-banner', {
  modules: [Autoplay, Navigation],
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
