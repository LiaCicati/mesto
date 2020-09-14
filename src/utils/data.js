// User Profile
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const openmodalEdit = document.querySelector('.profile__edit-button');
export const openModalAdd = document.querySelector('.profile__add-button');
export const profileAvatarButton = document.querySelector('.profile__avatar-edit');

// Modal Edit Profile
export const modalEdit = document.querySelector('.modal_edit');
export const closeModalEdit = document.querySelector('.modal__close-button');
export const modalEditSave = document.querySelector('.modal__submit-button');
export const formElementEdit = modalEdit.querySelector('.modal__form');
export const nameInput = formElementEdit.querySelector('.modal__text_name');
export const jobInput = formElementEdit.querySelector('.modal__text_job');

// Modal Add Card 
export const modalAdd = document.querySelector('.modal_place');
export const closeModalAdd = modalAdd.querySelector('.modal__close-button');
export const modalAddSave = modalAdd.querySelector('.modal__submit-button');
export const formElementAdd = modalAdd.querySelector('.modal__form');
export const inputTitle = modalAdd.querySelector('.modal__text_place');
export const inputLink = modalAdd.querySelector('.modal__text_link');

// Modal Image
export const modalImage = document.querySelector('.modal_image');
export const closeModalImage = modalImage.querySelector('.modal__close-button');
export const modalImageFull = modalImage.querySelector(".modal__image");
export const modalImageCaption = modalImage.querySelector(".modal__caption");

// Modal Delete
export const modalDelete = document.querySelector('.modal_delete');
export const modalDeleteButton = modalDelete.querySelector('.modal__submit-button');

// Modal Avatar
export const modalAvatar = document.querySelector('.modal_avatar');
export const avatarSubmit = modalAvatar.querySelector(".modal__submit-button");

// List of Cards
export const elementsList = document.querySelector('.elements__list');

// Array of Initial Cards
export const initialCards = [];

// Validation
export const validationParams = {
    formSelector: '.modal__form',
    inputSelector: '.modal__text',
    submitButtonSelector: '.modal__submit-button',
    inactiveButtonClass: 'modal__submit-button_disabled',
    inputErrorClass: 'modal__text_type_error',
    errorClass: 'modal__input-error_active'
}