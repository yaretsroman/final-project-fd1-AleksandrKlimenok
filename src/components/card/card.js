import './card.scss';

class Card extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.imgUrl = this.getAttribute('img-url');
    this.category = this.getAttribute('category');
    this.price = this.getAttribute('price');
    this.isSale = this.getAttribute('sale');
    this.oldPrice = this.getAttribute('old-price');
  }

  getSaleLabel() {
    if (this.isSale) {
      return '<span class="card__sale-label overline">sale</span>';
    }

    return '';
  }

  getOldPrice() {
    if (this.oldPrice) {
      return `<del class="span2 card__price card__price--old">${this.oldPrice}</del>`;
    }
    return '';
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="card">
        ${this.getSaleLabel()}
        <img
          class="card__preview responsive-img"
          alt="Adicolor Classics Joggers"
          src="${this.imgUrl}"
        />
        <h3 class="h6 card__title">${this.title}</h3>
        <div class="card__description">
          <span class="span3 card__category-name">${this.category}</span>
          <div class="card__price">
            ${this.getOldPrice()}
            <span class="span1 card__price">${this.price}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', Card);
