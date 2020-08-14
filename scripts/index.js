import Card from "./Card.js";

import {
    initialCards,
    validationParams
} from './data.js';

import FormValidator from './FormValidator.js';

import {
    toggleModal
} from './utilities.js';

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

// Toggle Profile Modal
function toggleProfileModal(modalEdit) {
    toggleModal(modalEdit);
    if (modalEdit.classList.contains('modal_opened')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }

    modalProfileFormValidator.hideAllErrors();
    modalProfileFormValidator.addButtonActive(modalEditSave);

}

// Toggle Add Card Modal
function toggleAddModal(modalAdd) {
    toggleModal(modalAdd);

    formElementAdd.reset();
    modalCardFormValidator.hideAllErrors();
    modalCardFormValidator.removeButtonActive(modalAddSave);
}

// Add Array of Initial Cards 
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#elements-template');
    const cardElement = card.generateCard();

    elementsList.append(cardElement);
});


// Enable Validation
const modalProfileFormValidator = new FormValidator(validationParams, modalEdit);
modalProfileFormValidator.enableValidation();

const modalCardFormValidator = new FormValidator(validationParams, modalAdd);
modalCardFormValidator.enableValidation();


// Submit Profile Data
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    toggleProfileModal(modalEdit);
}

// Add New Card
function addCard(card) {
    elementsList.prepend(card);
}

// Submit Card Data
function formSubmitHandlerCard(evt) {
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