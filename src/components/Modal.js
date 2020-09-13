export default class Modal {
    constructor(modalSelector) {
        this._modal = modalSelector;
        this._closeButton = this._modal.querySelector('.modal__close-button');
        this._handlerEscClose = this._handlerEscClose.bind(this);
    }

    _handlerEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closeByOverlay(evt) {
        if (evt.target.classList.contains('modal')) {
            this.close();
        }
    }

    _handlerCloseButton() {
        this.close()
    }


    open() {
        this._modal.classList.add('modal_opened');
        document.addEventListener('keydown', this._handlerEscClose);
    }

    close() {
        this._modal.classList.remove('modal_opened');
        document.removeEventListener('keydown', this._handlerEscClose);
    }

    setEventListeners() {
        this._modal.addEventListener('click', this._closeByOverlay.bind(this));
        this._closeButton.addEventListener('click', this._handlerCloseButton.bind(this));

    }

    removeEventListeners() {
        this._modal.removeEventListener('click', this._closeByOverlay.bind(this));
    }
}