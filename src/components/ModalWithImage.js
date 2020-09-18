import Modal from './Modal.js';

export default class ModalWithImage extends Modal {
    constructor(modalSelector) {
        super(modalSelector);
        this._modalImage = this._modal.querySelector('.modal__image');
        this._modalCaption = this._modal.querySelector('.modal__caption');
    }

    open({
        name,
        link
    }) {
        super.open();
        super.setEventListeners();
        const image = this._modalImage;
        const caption = this._modalCaption;
        image.src = link;
        image.alt = name;
        caption.textContent = name;
    }
}