export default class Modal {
    constructor(modalSelector) {
        this._modalSelector = modalSelector;
        this._closeButton = this._modalSelector.querySelector('.modal__close-button');
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
        this._modalSelector.classList.add('modal_opened');
        document.addEventListener('keydown', this._handlerEscClose.bind(this));
    }

    close() {
        this._modalSelector.classList.remove('modal_opened');
        document.removeEventListener('keydown', this._handlerEscClose.bind(this));
    }

    setEventListeners() {
        this._modalSelector.addEventListener('click', this._closeByOverlay.bind(this));
        this._closeButton.addEventListener('click', this._handlerCloseButton.bind(this));

    }

    removeEventListeners() {
        this._modalSelector.removeEventListener('click', this._closeByOverlay.bind(this));
    }
}