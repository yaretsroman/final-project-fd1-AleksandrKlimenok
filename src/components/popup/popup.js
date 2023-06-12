import './popup.scss';

const body = document.body;
const controls = document.querySelectorAll('.popup-control');

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

const createPopupFooter = () => {
  const footer = document.createElement('div');
  footer.setAttribute('class', 'popup__footer');

  return footer;
};

const createPopupBlock = () => {
  const popupBlock = document.createElement('div');
  popupBlock.setAttribute('class', 'popup');

  const setContent = (title, templateID) => {
    const template = document.getElementById(templateID).content.cloneNode(true);
    const popupFooter = createPopupFooter();
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
  overlayBlock.remove();
  popupBlock.innerHTML = '';
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
document.addEventListener('keydown', onEscape);
