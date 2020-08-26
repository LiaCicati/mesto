import Card from "../components/Card.js";

import {
    initialCards,
    validationParams,
    modalEdit,
    modalImage,
    modalAdd,
    openmodalEdit,
    openModalAdd,
    nameInput,
    jobInput,
    profileJob,
    profileName,
    modalAddSave,
    modalEditSave
} from '../utils/data.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import ModalWithImage from '../components/ModalWithImage.js';
import ModalWithForm from '../components/ModalWithForm.js';
import UserInfo from '../components/UserInfo.js';


function addCard(name, link) {
    const card = new Card(name, link, '#elements-template', handlerCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

const cards = new Section({
    data: initialCards,
    renderer: (item) => {
        cards.addItem(addCard(item.name, item.link));
    }
}, '.elements__list');

cards.renderItems();

const openModalImage = new ModalWithImage(modalImage);
openModalImage.setEventListeners();

function handlerCardClick(name, link) {
    openModalImage.open(link, name);
}

const modalEditProfile = new ModalWithForm(modalEdit, () => {
    user.setUserInfo(nameInput, jobInput);
    modalEditProfile.close();
});

const modalAddCard = new ModalWithForm(modalAdd, (data) => {
    cards.addItem(addCard(data.title, data.link));
    modalAddCard.close();

});

modalEditProfile.setEventListeners();
modalAddCard.setEventListeners();

const user = new UserInfo({
    name: profileName,
    job: profileJob,
});


const modalProfileFormValidator = new FormValidator(validationParams, modalEdit);
modalProfileFormValidator.enableValidation();

const modalCardFormValidator = new FormValidator(validationParams, modalAdd);
modalCardFormValidator.enableValidation();


openmodalEdit.addEventListener("click", () => {
    modalEditProfile.open();
    const infoUser = user.getUserInfo();
    nameInput.value = infoUser.name;
    jobInput.value = infoUser.job;
    modalProfileFormValidator.hideAllErrors();
    modalProfileFormValidator.addButtonActive(modalEditSave);
});

openModalAdd.addEventListener("click", () => {
    modalAddCard.open();
    modalCardFormValidator.hideAllErrors();
    modalCardFormValidator.removeButtonActive(modalAddSave);
});