const content = document.querySelector('.content');
const profile = content.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const popup = document.querySelector('.popup');
const form = popup.querySelector('.popup__form');
const openPopupEdit = profile.querySelector('.profile__edit-button');
const popupEditSave = document.querySelector('.popup__submit-button');
const closePopupEdit = document.querySelector('.popup__close-button');
const popupEdit = document.querySelector('.popup_edit');
const formElementEdit = popupEdit.querySelector('.popup__form');
const nameInput = formElementEdit.querySelector('.popup__text_name');
const jobInput = formElementEdit.querySelector('.popup__text_job');
const openPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_place');
const formElementAdd = popupAdd.querySelector('.popup__form');
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const popupAddSave = popupAdd.querySelector('.popup__submit-button');
const inputTitle = popupAdd.querySelector('.popup__text_place');
const inputLink = popupAdd.querySelector('.popup__text_link');
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsList = content.querySelector('.elements__list');
const deleteButton = document.querySelector('.element__delete-button');
const popupImage = document.querySelector('.popup_image');
const closePopupImage = popupImage.querySelector('.popup__close-button');

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

function toggleModal(popup) {
    const isOpen = popup.classList.contains('popup_opened');
    if (isOpen) {
        document.removeEventListener('keydown', closeOnEsc)
        document.removeEventListener('click', closeByOverlay);
    } else {
        document.addEventListener('keydown', closeOnEsc)
        document.addEventListener('click', closeByOverlay);
    }
    popup.classList.toggle('popup_opened');
}


function toggleProfileModal(popupEdit) {
    toggleModal(popup);
    if (popupEdit.classList.contains('popup_opened')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }

    popupEditSave.classList.remove('popup__submit-button_disabled');
    popupEditSave.removeAttribute('disabled');
    hideInputError(popupEdit, nameInput, object);
    hideInputError(popupEdit, jobInput, object);

};

function toggleAddModal(popupAdd) {

    hideInputError(popupAdd, inputLink, object);
    hideInputError(popupAdd, inputTitle, object);
    document.getElementById('popupAddForm').reset();

    toggleModal(popupAdd);
}

function closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        toggleModal(document.querySelector('.popup_opened'));
    }
};

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        toggleModal(document.querySelector('.popup_opened'));
    }
};


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    toggleProfileModal(popupEdit);
};

function showImagePopup(evt) {
    const clickedImage = evt.target;
    toggleModal(popupImage);
    popupImage.querySelector('.popup__image').src = clickedImage.src;
    popupImage.querySelector('.popup__caption').textContent = clickedImage.parentElement.querySelector('.element__title').textContent;
};

function addCard(initialCards) {
    const card = elementsTemplate.cloneNode(true);
    const cardImage = card.querySelector('.element__image');

    cardImage.src = initialCards.link;
    card.querySelector('.element__title').textContent = initialCards.name;

    card.querySelector('.element__image').addEventListener('click', showImagePopup);
    card.querySelector('.element__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like-button_active');
    });
    card.querySelector('.element__delete-button').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });

    popupAddSave.classList.add('popup__submit-button_disabled');
    popupAddSave.setAttribute('disabled', true);

    return card;
};

function renderNewCard(card) {
    const newCard = addCard(card);
    elementsList.prepend(newCard);
};

initialCards.forEach(card => {
    elementsList.append(addCard(card))
});


function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    const newPlace = {
        name: inputTitle.value,
        link: inputLink.value,
    };
    renderNewCard(newPlace);
    toggleAddModal(popupAdd);
    document.getElementById('popupAddForm').reset();
};


openPopupEdit.addEventListener('click', () => toggleProfileModal(popupEdit));
openPopupAdd.addEventListener('click', () => toggleAddModal(popupAdd));
closePopupEdit.addEventListener('click', () => toggleProfileModal(popupEdit));
closePopupAdd.addEventListener('click', () => toggleAddModal(popupAdd));
closePopupImage.addEventListener('click', () => toggleModal(popupImage));

popupEdit.addEventListener('submit', formSubmitHandler);
popupAdd.addEventListener('submit', formSubmitHandlerCard);