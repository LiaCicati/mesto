import Modal from './Modal.js';

export default class ModalWithImage extends Modal {
    constructor(modalSelector) {
        super(modalSelector);
    }

    open({
        name,
        link
    }) {
        super.open();
        super.setEventListeners();
        const image = this._modal.querySelector('.modal__image');
        const caption = this._modal.querySelector('.modal__caption');
        image.src = link;
        image.alt = name;
        caption.textContent = name;
    }
}