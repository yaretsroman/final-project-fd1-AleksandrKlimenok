import './header.scss';

const btn = document.querySelector('.header__mobile-btn');
const drawer = document.querySelector('.drawer');

const toggleDrawer = () => {
  drawer.classList.toggle('drawer--active');
};

btn.addEventListener('click', toggleDrawer);
