const showInputError = (formElement, inputElement, errorMessage, el) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(el.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(el.errorClass);
};

const hideInputError = (formElement, inputElement, el) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(el.inputErrorClass);
    errorElement.classList.remove(el.errorClass);
    errorElement.textContent = '';
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const checkInputValidity = (formElement, inputElement, el) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, el);
    } else {
        hideInputError(formElement, inputElement, el);
    }
};

const toggleButtonState = (inputList, buttonElement, el) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(el.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(el.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};


const setEventListeners = (formElement, el) => {
    const inputList = Array.from(formElement.querySelectorAll(el.inputSelector));
    const buttonElement = formElement.querySelector(el.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, el);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, el);
            toggleButtonState(inputList, buttonElement, el);
        });
    });
};

const enableValidation = (el) => {
    const formList = Array.from(document.querySelectorAll(el.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, el);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__input-error_active'
});