import './popup.scss';

const body = document.body;
const controls = document.querySelectorAll('.popup-control');

const createButton = (caption) => {
  const btn = document.createElement('button');
  btn.classList.add('popup__btn');
  btn.textContent = caption;

  return btn;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'popup-overlay');
  return overlay;
};

const createContent = (tempate) => {
  const content = document.createElement('div');
  content.setAttribute('class', 'popup__content');
  content.append(tempate);

  return content;
};

const createPopupHeader = (title) => {
  const header = document.createElement('div');
  header.setAttribute('class', 'popup__header');
  header.textContent = title;

  return header;
};

const createPopupFooter = (btn) => {
  const footer = document.createElement('div');
  footer.append(btn);
  footer.setAttribute('class', 'popup__footer');

  return footer;
};

const createPopupBlock = () => {
  const popupBlock = document.createElement('div');
  popupBlock.setAttribute('class', 'popup');

  const setContent = (title, templateID) => {
    const btn = createButton('Cancel');
    const template = document.getElementById(templateID).content.cloneNode(true);
    const popupFooter = createPopupFooter(btn);
    const popupHeader = createPopupHeader(title);
    const popupContent = createContent(template);
    popupBlock.append(popupHeader, popupContent, popupFooter);
  };

  return {
    popupBlock,
    setContent,
  };
};

const overlayBlock = createOverlay();
const { popupBlock, setContent } = createPopupBlock();

const open = (evt) => {
  const title = evt.target.dataset.popupTitle;
  const tempateId = evt.target.dataset.templateId;

  setContent(title, tempateId);
  body.append(overlayBlock);
  body.append(popupBlock);
};

const close = () => {
  popupBlock.innerHTML = '';
  overlayBlock.remove();
  popupBlock.remove();
};

const onEscape = (evt) => {
  if (evt.code === 'Escape') {
    close();
  }
};

controls.forEach((el) => {
  if (el) {
    el.addEventListener('click', open);
  }
});

overlayBlock.addEventListener('click', close);
popupBlock.addEventListener('click', (evt) => {
  if (evt.target.closest('.popup__btn')) {
    close();
  }
});
document.addEventListener('keydown', onEscape);
