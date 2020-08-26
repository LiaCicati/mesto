export default class Card {
  constructor(name, link, cardSelector, handlerCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
    this._deleteCard = this._deleteCard.bind(this);
    this._toggleLikeButton = this._toggleLikeButton.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardName = this._element.querySelector('.element__title');
    this._cardImage = this._element.querySelector('.element__image');
    this._setEventListeners();

    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _toggleLikeButton() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", this._deleteCard);

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", this._toggleLikeButton);

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handlerCardClick(this._name, this._link);
    });
  }
}