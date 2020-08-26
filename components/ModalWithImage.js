import Modal from './Modal.js';
export default class ModalWithImage extends Modal {
    constructor(modalSelector) {
        super(modalSelector);
    }

    open(cardImage, cardName) {
        const image = this._modalSelector.querySelector('.modal__image');
        const name = this._modalSelector.querySelector('.modal__caption');

        image.src = cardImage;
        image.alt = cardName;
        name.textContent = cardName;

        super.open();
    }
}