import './drawer.scss';

const closeBtn = document.querySelector('.drawer__close');
const drawer = document.querySelector('.drawer');

closeBtn.addEventListener('click', () => {
  drawer.classList.remove('drawer--active');
});
