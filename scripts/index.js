import Card from "./Card.js";
import {initialCards, object} from './data.js';
import FormValidator from './FormValidator.js';

// General Data
const content = document.querySelector('.content');
const profile = content.querySelector('.profile');

// Modal Edit Profile
const modalEdit = document.querySelector('.modal_edit');
const openmodalEdit = profile.querySelector('.profile__edit-button');
const closeModalEdit = document.querySelector('.modal__close-button');
const modalEditSave = document.querySelector('.modal__submit-button');
const formElementEdit = modalEdit.querySelector('.modal__form');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const nameInput = formElementEdit.querySelector('.modal__text_name');
const jobInput = formElementEdit.querySelector('.modal__text_job');

// Modal Add Card 
const modalAdd = document.querySelector('.modal_place');
const openModalAdd = document.querySelector('.profile__add-button');
const closeModalAdd = modalAdd.querySelector('.modal__close-button');
const modalAddSave = modalAdd.querySelector('.modal__submit-button');
const formElementAdd = modalAdd.querySelector('.modal__form');
const inputTitle = modalAdd.querySelector('.modal__text_place');
const inputLink = modalAdd.querySelector('.modal__text_link');

// Modal Image
const modalImage = document.querySelector('.modal_image');
const closeModalImage = modalImage.querySelector('.modal__close-button');

// List of Cards
const elementsList = content.querySelector('.elements__list');

// Togle Modal Window
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

// Toggle Profile Modal
function toggleProfileModal(modalEdit) {
    toggleModal(modalEdit);
    if (modalEdit.classList.contains('modal_opened')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }

    const modalProfileFormValidator = new FormValidator(object, modalEdit);
    modalProfileFormValidator.enableValidation();
    hideInputErrors(modalEdit);
};

// Toggle Add Card Modal
function toggleAddModal(modalAdd) {
    const modalCardFormValidator = new FormValidator(object, modalAdd);
    modalCardFormValidator.enableValidation();
    
    hideInputErrors(modalAdd);
    formElementAdd.reset();

    toggleModal(modalAdd);
}

// Delete Errors when Open Modal
function hideInputErrors (form) { 
    const inputElements = Array.from(form.querySelectorAll('.modal__text'));
    const errorElement = Array.from(form.querySelectorAll('.modal__input-error'));

    inputElements.forEach(input => { 
      input.classList.remove('modal__text_type_error');
    });
    
    errorElement.forEach(error => { 
      error.classList.remove('modal__input-error_active');
      error.textContent = '';
    });
  };

// Close Modal by Overlay & on Esc
function closeByOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        toggleModal(document.querySelector('.modal_opened'));
    }
};

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        toggleModal(document.querySelector('.modal_opened'));
    }
};


// Add Array of Initial Cards 
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#elements-template');
    const cardElement = card.generateCard();
  
     document.querySelector('.elements__list').append(cardElement);
  });


// Submit Profile Data
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    toggleProfileModal(modalEdit);
};

// Add New Card
function addCard (card) {
    elementsList.prepend(card);
  }

// Submit Card Data
function formSubmitHandlerCard (evt) {
    evt.preventDefault();
  
    const card = new Card(inputTitle.value, inputLink.value, '#elements-template');
    const cardElement = card.generateCard();
    addCard(cardElement);
  
    toggleAddModal(modalAdd);
  }

// Event Listeners
openmodalEdit.addEventListener('click', () => toggleProfileModal(modalEdit));
openModalAdd.addEventListener('click', () => toggleAddModal(modalAdd));
closeModalEdit.addEventListener('click', () => toggleProfileModal(modalEdit));
closeModalAdd.addEventListener('click', () => toggleAddModal(modalAdd));
closeModalImage.addEventListener('click', () => toggleModal(modalImage));

modalEdit.addEventListener('submit', formSubmitHandler);
modalAdd.addEventListener('submit', formSubmitHandlerCard);

export {toggleModal};