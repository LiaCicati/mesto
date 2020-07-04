let content = document.querySelector(".content");
let openPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let form = popup.querySelector(".popup__form");
let nameInput = form.querySelector(".popup__text_name");
let jobInput = form.querySelector(".popup__text_job");
let profileName = content.querySelector(".profile__name");
let profileJob = content.querySelector(".profile__job");

function togglePopup() {

    popup.classList.toggle("popup_opened");
    if (popup.classList.contains("popup_opened")) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    togglePopup();

}


openPopupButton.addEventListener("click", togglePopup)
closePopupButton.addEventListener("click", togglePopup)
form.addEventListener("submit", formSubmitHandler);