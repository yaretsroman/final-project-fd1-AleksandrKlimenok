import './footer.scss';

const anchor = document.querySelector('.footer__anchor');

const onClickAnchor = (evt) => {
  evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

anchor.addEventListener('click', onClickAnchor);
