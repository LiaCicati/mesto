let content = document.querySelector(".content");
let openPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let form = popup.querySelector(".popup__form");

function togglePopup() {
    popup.classList.toggle("popup_opened");

    let nameInput = form.querySelector(".popup__text_name");
    let jobInput = form.querySelector(".popup__text_job");

    let profileName = content.querySelector(".profile__name");
    let profileJob = content.querySelector(".profile__job");

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = form.querySelector(".popup__text_name");
    let jobInput = form.querySelector(".popup__text_job");

    let name = nameInput.value;
    let job = jobInput.value;
    console.log(nameInput.value);
    console.log(jobInput.value);

    let profileName = content.querySelector(".profile__name");
    let profileJob = content.querySelector(".profile__job");
    profileName.textContent = name;
    profileJob.textContent = job;

    togglePopup();

}


openPopupButton.addEventListener("click", togglePopup)
closePopupButton.addEventListener("click", togglePopup)
form.addEventListener("submit", formSubmitHandler);