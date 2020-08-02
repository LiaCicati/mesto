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

// Template Document
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsList = content.querySelector('.elements__list');


// Array of Initial Cards
const initialCards = [{
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

    modalEditSave.classList.remove('modal__submit-button_disabled');
    modalEditSave.removeAttribute('disabled');
    hideInputError(modalEdit, nameInput, object);
    hideInputError(modalEdit, jobInput, object);

};

// Toggle Add Card Modal
function toggleAddModal(modalAdd) {

    hideInputError(modalAdd, inputLink, object);
    hideInputError(modalAdd, inputTitle, object);
    document.getElementById('modalAddForm').reset();

    toggleModal(modalAdd);
}

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

// Submit Profile Data
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    toggleProfileModal(modalEdit);
};

// Open Modal Image
function showImageModal(evt) {
    const clickedImage = evt.target;
    toggleModal(modalImage);
    modalImage.querySelector('.modal__image').src = clickedImage.src;
    modalImage.querySelector('.modal__caption').textContent = clickedImage.parentElement.querySelector('.element__title').textContent;
};

// Initial Cards & New Cards
function addCard(initialCards) {
    const card = elementsTemplate.cloneNode(true);
    const cardImage = card.querySelector('.element__image');

    cardImage.src = initialCards.link;
    card.querySelector('.element__title').textContent = initialCards.name;

    card.querySelector('.element__image').addEventListener('click', showImageModal);
    card.querySelector('.element__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like-button_active');
    });
    card.querySelector('.element__delete-button').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });

    modalAddSave.classList.add('modal__submit-button_disabled');
    modalAddSave.setAttribute('disabled', true);

    return card;
};

function renderNewCard(card) {
    const newCard = addCard(card);
    elementsList.prepend(newCard);
};

initialCards.forEach(card => {
    elementsList.append(addCard(card))
});

// Submit Card Data
function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    const newPlace = {
        name: inputTitle.value,
        link: inputLink.value,
    };
    renderNewCard(newPlace);
    toggleAddModal(modalAdd);
    document.getElementById('modalAddForm').reset();
};

// Event Listeners
openmodalEdit.addEventListener('click', () => toggleProfileModal(modalEdit));
openModalAdd.addEventListener('click', () => toggleAddModal(modalAdd));
closeModalEdit.addEventListener('click', () => toggleProfileModal(modalEdit));
closeModalAdd.addEventListener('click', () => toggleAddModal(modalAdd));
closeModalImage.addEventListener('click', () => toggleModal(modalImage));

modalEdit.addEventListener('submit', formSubmitHandler);
modalAdd.addEventListener('submit', formSubmitHandlerCard);