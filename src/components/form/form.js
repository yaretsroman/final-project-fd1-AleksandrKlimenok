import './form.scss';

const input = document.querySelectorAll('form__input');
const formSearchicon = document.querySelectorAll('.form__icon');
let currentForm = null;

const onFocus = (evt) => {
  const label = evt.target.labels[0];
  label.classList.add('form__label--active');
};

const onBlur = (evt) => {
  const label = evt.target.labels[0];
  const value = evt.target.value;
  if (value === '') {
    label.classList.remove('form__label--active');
  }
};

input.forEach((element) => {
  element.addEventListener('focus', onFocus);
  element.addEventListener('blur', onBlur);
});

const onClickIcon = (evt) => {
  evt.preventDefault();
  const parent = evt.currentTarget.parentElement;
  const wrapper = parent.querySelector('.form__input-wrapper');
  currentForm = wrapper;
  wrapper.classList.remove('form__input-wrapper--hidden');
};

formSearchicon.forEach((element) => {
  element.addEventListener('click', onClickIcon);
});

document.addEventListener('click', (evt) => {
  if (!evt.target.contains(currentForm)) {
    if (currentForm) {
      const wrapper = parent.querySelector('.form__input-wrapper');
      wrapper.classList.add('form__input-wrapper--hidden');
     }
   }
});

