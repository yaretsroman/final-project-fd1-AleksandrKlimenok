import './tabs.scss';
// import { products } from '../../constants/products';

const tabLinks = document.querySelectorAll('.tabs__link');
const tabContents = document.querySelectorAll('.tabs__content');

// const tabsProducts = document.querySelectorAll('.tabs-products');
// const template = document.getElementById('template-card');

// const addTemplate = (products, el) => {
//   products.forEach((product) => {
//     const card = template.content.cloneNode(true);
//     const preview = card.querySelector('.card__preview');
//     const title = card.querySelector('.card__title');
//     const categoryName = card.querySelector('.card__category-name');
//     const price = card.querySelector('.card__price');

//     preview.setAttribute('src', product.preview);
//     preview.setAttribute('alt', product.title);

//     title.textContent = product.title;
//     categoryName.textContent = product.categoryName;
//     price.textContent = `$${product.price}`;

//     el.append(card);
//   });
// };

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

  // const wrapper = currentContent.querySelector('.tabs__grid-wrapper');
  // wrapper.innerHTML = '';

  // const filteredProducts =
  //   currentTab === 'all'
  //     ? products
  //     : products.filter((products) => {
  //         return products.categoryName.toLocaleLowerCase() === currentTab;
  //       });

  // addTemplate(filteredProducts, wrapper);
  evt.target.classList.add('tabs__link--active');
};

tabLinks.forEach((el) => {
  el.addEventListener('click', onChangeTab);
});

// const initTabProducts = () => {
//   const activeTab = Array.from(tabsProducts).find((el) =>
//     el.classList.contains('tabs__content--active'),
//   );

//   addTemplate(products, activeTab.querySelector('.tabs__grid-wrapper'));
// };

// initTabProducts();

// const categories = products
//   .map((product) => product.categoryName)
//   .filter((item, index, arr) => arr.findIndex((el) => el === item) === index);

// console.log(categories);
