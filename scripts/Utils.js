export {toggleModal};
// Togle Any Modal Window
function toggleModal(modal) {
    const isOpen = modal.classList.contains('modal_opened');
    if (isOpen) {
        document.removeEventListener('keydown', closeOnEsc)
        document.removeEventListener('click', closeByOverlay);
    } else {
        document.addEventListener('keydown', closeOnEsc)
        document.addEventListener('click', closeByOverlay);
    }
    modal.classList.toggle('modal_opened');
}

// Close Modal by Overlay & on Esc
function closeByOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        toggleModal(document.querySelector('.modal_opened'));
    }
}

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        toggleModal(document.querySelector('.modal_opened'));
    }
}