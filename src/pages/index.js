import "./index.css";
import Card from "../components/Card.js";

import {
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
  modalEditSave,
  modalDelete,
  profileAvatarButton,
  modalAvatar,
  avatarSubmit,
  profileAvatar,
  initialCards
} from '../utils/data.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import ModalWithImage from '../components/ModalWithImage.js';
import ModalWithForm from '../components/ModalWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import ModalConfirm from "../components/ModalConfirm";


// Form Validation
const modalProfileFormValidator = new FormValidator(validationParams, modalEdit);
modalProfileFormValidator.enableValidation();

const modalCardFormValidator = new FormValidator(validationParams, modalAdd);
modalCardFormValidator.enableValidation();

const modalAvatarFormValidator = new FormValidator(validationParams, modalAvatar);
modalAvatarFormValidator.enableValidation();

// Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-15',
  headers: {
    authorization: 'ffb07e3e-85b9-4652-8210-bfa96acaf140',
    'Content-Type': 'application/json'
  }
});

// Create Modal with Image
const modalImageFull = new ModalWithImage(modalImage);

// User Information
const userProfile = new UserInfo({
  name: profileName,
  about: profileJob,
  avatar: profileAvatar
});

// Get User Data & Cards from Server
Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
  ])
  .then((values) => {
    const [userData, items] = values;
    userProfile.setUserData(userData.name, userData.about, userData._id, userData.avatar);
    const initialCardList = new Section({
        items: items,
        renderer: (item) => {
          const card = new Card({
            data: item,
            handleCardClick: globalHandleCardClick,
            handleLikeClick: globalHandleLikeCardClick,
            handleDeleteButtonClick: globalHandleDeleteCardClick
          }, userProfile.getUserId(), '#elements-template');
          const cardElement = card.generateCard();
          initialCardList.setItem(cardElement);
        }
      },
      '.elements__list');
    initialCardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })


// Open Modal Image
const globalHandleCardClick = (data) => {
  modalImageFull.open(data)
}

// Like & Dislike Card
const globalHandleLikeCardClick = (card) => {
  if (card.isLiked()) {
    api.dislikeCard(card.id())
      .then((data) => {
        card.setLikesInfo(data)
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
    api.likeCard(card.id())
      .then((data) => {
        card.setLikesInfo(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

// Delete Card
const globalHandleDeleteCardClick = (card) => {
  modalWithDelete.open();
  modalWithDelete.handlerSubmit(() => {
    modalWithDelete.loading(true);
    api.deleteCard(card.id())
      .then((data) => {
        card.deleteElement(data);
        modalWithDelete.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        modalWithDelete.loading(false);
      })
  })
}

// Render New Card
const renderCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: globalHandleCardClick,
    handleLikeClick: globalHandleLikeCardClick,
    handleDeleteButtonClick: globalHandleDeleteCardClick
  }, userProfile.getUserId(), '#elements-template');
  const cardElement = card.generateCard();
  addCardsList.addItem(cardElement);
  return card;
}


// Section for Cards
const addCardsList = new Section({
    items: initialCards,
  },
  '.elements__list'
);

// Modal for Adding Cards
const modalAddPlace = new ModalWithForm({
  handleFormSubmit: (item) => {
    modalAddPlace.loading(true);
    api.postNewCard(item)
      .then((item) => {
        renderCard(item);
        modalAddPlace.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        modalAddPlace.loading(false);
      })
  }
}, modalAdd);


// Modal for Updating User Profile
const modalEditProfile = new ModalWithForm({
  handleFormSubmit: ({
    name,
    about
  }) => {
    modalEditProfile.loading(true);
    api.setUserInfo({
        name: name,
        about: about
      })
      .then((res) => {
        userProfile.setUserData(res.name, res.about, res._id, res.avatar);
        modalEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        modalEditProfile.loading(false);
      })
  }
}, modalEdit)


// Modal for Updating User Avatar
const modalAvatarForm = new ModalWithForm({
  handleFormSubmit: ({
    avatar
  }) => {
    modalAvatarForm.loading(true);
    api.setUserAvatar({
        avatar: avatar
      })
      .then((res) => {
        userProfile.setUserData(res.name, res.about, res._id, res.avatar);
        modalAvatarForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        modalAvatarForm.loading(false);
      })
  }
}, modalAvatar)


// Modal with Delete Confirmation
const modalWithDelete = new ModalConfirm(modalDelete);


// Event Listeners
modalImageFull.setEventListeners();
modalAddPlace.setEventListeners();
modalEditProfile.setEventListeners();
modalWithDelete.setEventListeners();
modalAvatarForm.setEventListeners();


openModalAdd.addEventListener('click', () => {
  modalAddPlace.open();
  modalCardFormValidator.hideAllErrors();
  modalCardFormValidator.removeButtonActive(modalAddSave);
})


openmodalEdit.addEventListener('click', () => {
  const profileInfo = userProfile.getUserData();

  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;


  modalProfileFormValidator.hideAllErrors();
  modalProfileFormValidator.addButtonActive(modalEditSave);
  modalEditProfile.open()
})

profileAvatarButton.addEventListener('click', () => {
  modalAvatarForm.open();
  modalAvatarFormValidator.hideAllErrors();
  modalAvatarFormValidator.removeButtonActive(avatarSubmit);
})