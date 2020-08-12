import { toggleModal } from "./index.js";
// Modal Image
const modalImage = document.querySelector(".modal_image");
const modalImageFull = modalImage.querySelector(".modal__image");
const modalImageCaption = modalImage.querySelector(".modal__caption");

export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
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
    this._setEventListeners();

    const cardImage = this._element.querySelector(".element__image");
    const cardTitle = this._element.querySelector(".element__title");

    cardImage.src = this._link;
    cardTitle.textContent = this._name;

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

  _showImage() {
    modalImageFull.src = this._link;
    modalImageCaption.textContent = this._name;
    toggleModal(modalImage);
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this._showImage();
      });

    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", this._deleteCard);

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", this._toggleLikeButton);
  }
}
