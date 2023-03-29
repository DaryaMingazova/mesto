export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const nameInput = document.querySelector('.form__input_type_name');
export const jobInput = document.querySelector('.form__input_type_description');

export const profileName = document.querySelector('.profile__title');
export const profileText = document.querySelector('.profile__subtitle');
export const popupFormProfile = document.querySelector('#form-profile');//

export const inputAddCardName = document.querySelector('.form__input_type_place');
export const inputAddCardLink = document.querySelector('.form__input_type_link');

export const cardsContainer = document.querySelector('.elements');

export const popupFormCard = document.querySelector('#form-card');//
// находим попап редактирования профиля
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const formAddCard = popupAddCard.querySelector('.form');

export const inputList = formAddCard.querySelectorAll('.form__input');
// находим кнопку для открытия попапа редактирования профиля
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const buttonOpenAddCard = document.querySelector('.profile__add-button');

// находим все крестики проекта по универсальному селектору
export const closeButtons = document.querySelectorAll('.popup__close');

export const esc = 'Escape';

export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_is-active'    
}