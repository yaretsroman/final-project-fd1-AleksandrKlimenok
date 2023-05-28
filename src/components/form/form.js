import './form.scss';

const input = document.querySelectorAll('.form_input')

const onFocus = (evt) => {
 console.log(evt.target);
};

const onBlur = (evt) => {
    const label = evt.target.labels[0];
    const value = evt.target.value;
    if (value === '') {
        label.classList.remove('form_')
    }

}

inputs.forEach((elment, key) => {
    console.addEventListener('focus', onFocus);
});
