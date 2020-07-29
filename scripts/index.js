const content = document.querySelector(".content");
const profile = content.querySelector('.profile');
const profileName = profile.querySelector(".profile__name");
const profileJob = profile.querySelector(".profile__job");
const popup = document.querySelector('.popup');
const form = popup.querySelector(".popup__form");
const openPopupEdit = profile.querySelector(".profile__edit-button");
const closePopupEdit = document.querySelector(".popup__close-button");
const popupEdit = document.querySelector(".popup_edit");
const formElementEdit = popupEdit.querySelector(".popup__form");
const nameInput = formElementEdit.querySelector(".popup__text_name");
const jobInput = formElementEdit.querySelector(".popup__text_job");
const openPopupAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_place");
const formElementAdd = popupAdd.querySelector(".popup__form");
const closePopupAdd = popupAdd.querySelector(".popup__close-button");
const popupAddSave = popupAdd.querySelector(".popup__submit-button");
const inputTitle = popupAdd.querySelector('.popup__text_place');
const inputLink = popupAdd.querySelector('.popup__text_link');
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsList = content.querySelector(".elements__list");
const deleteButton = document.querySelector(".element__delete-button");
const popupImage = document.querySelector('.popup_image');
const placeImage = popupImage.querySelector('.popup__image');
const placeTitle = popupImage.querySelector('.popup__caption');
const closePopupImage = popupImage.querySelector(".popup__close-button");

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


function togglePopup(popup) {
    popup.classList.toggle("popup_opened");
    if (popupEdit.classList.contains("popup_opened")) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
};


const closeByOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        togglePopup(document.querySelector('.popup_opened'));
    }
};

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        togglePopup(document.querySelector('.popup_opened'));
    }
};


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    togglePopup(popup);
};

function showImagePopup(evt) {
    const clickedImage = evt.target;
    togglePopup(popupImage);

    popupImage.querySelector('.popup__image').src = clickedImage.src;
    popupImage.querySelector('.popup__caption').textContent = clickedImage.parentElement.querySelector('.element__title').textContent;
};


function addCard(nameValue, linkValue) {

    const placesCard = elementsTemplate.cloneNode(true);
    placesCard.querySelector(".element__image").src = linkValue;
    placesCard.querySelector(".element__title").textContent = nameValue;
    placesCard.querySelector('.element__image').addEventListener('click', showImagePopup);
    placesCard.querySelector('.element__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like-button_active');
    });

    placesCard.querySelector('.element__delete-button').addEventListener('click', (evt) => {
        evt.target.closest(".element").remove();

    });

    elementsList.prepend(placesCard);
}

initialCards.forEach(item => (addCard(item.name, item.link)));

function formSubmitHandlerCard(evt) {
    evt.preventDefault();

    const name = inputTitle.value;
    const link = inputLink.value;

    addCard(name, link);

    togglePopup(popupAdd);
}

openPopupEdit.addEventListener("click", () => togglePopup(popupEdit));
openPopupAdd.addEventListener("click", () => togglePopup(popupAdd));
closePopupEdit.addEventListener("click", () => togglePopup(popupEdit));
closePopupAdd.addEventListener("click", () => togglePopup(popupAdd));
closePopupImage.addEventListener("click", () => togglePopup(popupImage));

document.addEventListener('click', closeByOverlay);
document.addEventListener('keydown', closeOnEsc);

form.addEventListener("submit", formSubmitHandler);
popupAdd.addEventListener('submit', formSubmitHandlerCard);