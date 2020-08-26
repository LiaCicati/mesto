// Modal Edit Profile
export const modalEdit = document.querySelector('.modal_edit');
export const openmodalEdit = document.querySelector('.profile__edit-button');
export const closeModalEdit = document.querySelector('.modal__close-button');
export const modalEditSave = document.querySelector('.modal__submit-button');
export const formElementEdit = modalEdit.querySelector('.modal__form');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const nameInput = formElementEdit.querySelector('.modal__text_name');
export const jobInput = formElementEdit.querySelector('.modal__text_job');

// Modal Add Card 
export const modalAdd = document.querySelector('.modal_place');
export const openModalAdd = document.querySelector('.profile__add-button');
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

// List of Cards
export const elementsList = document.querySelector('.elements__list');


// Array of Initial Cards
export const initialCards = [{
        name: 'Хиби́ны',
        link: 'https://images.unsplash.com/photo-1518675013095-1cef34ac232e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'

    },
    {
        name: 'Башкирия',
        link: 'https://images.unsplash.com/photo-1482355383105-63c565658bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2214&q=80'

    },
    {
        name: 'Ольхо́н',
        link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

    },
    {
        name: 'Магадан',
        link: 'https://images.unsplash.com/photo-1570340831042-040b3999690c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'

    },
    {
        name: 'Озеро Байкал',
        link: 'https://images.unsplash.com/photo-1551844931-9c422b3f8a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80'

    },
    {
        name: 'Алтай',
        link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3294&q=80'

    }
];


// Validation
export const validationParams = {
    formSelector: '.modal__form',
    inputSelector: '.modal__text',
    submitButtonSelector: '.modal__submit-button',
    inactiveButtonClass: 'modal__submit-button_disabled',
    inputErrorClass: 'modal__text_type_error',
    errorClass: 'modal__input-error_active'
}

