import './best-sellers.scss';
import 'swiper/css/navigation';

import Swiper, { Autoplay, Navigation } from 'swiper';

new Swiper('.best-seller-swiper', {
  modules: [Autoplay, Navigation],
  speed: 1000,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.best-seller__next-btn',
    prevEl: '.best-seller__prev-btn',
  },
  slidesPerView: 4,
});
