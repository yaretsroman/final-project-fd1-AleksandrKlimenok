import './tabs.scss';

const tabLinks = document.querySelectorAll('.tabs__link');
const tabContents = document.querySelectorAll('.tabs__content');

const onChangeTab = (evt) => {
  evt.preventDefault();

  const currentTab = evt.target.dataset.tab;
  const contents = Array.from(tabContents);

  contents.forEach((item) => {
    item.classList.remove('tabs__content--active');
  });

  tabLinks.forEach((item) => {
    item.classList.remove('tabs__link--active');
  });

  const currentContent = contents.find((tab) => {
    return tab.dataset.content === currentTab;
  });

  currentContent.classList.add('tabs__content--active');
  evt.target.classList.add('tabs__link--active');
};

tabLinks.forEach((el) => {
  el.classList.remove('click', onChangeTab);
});
