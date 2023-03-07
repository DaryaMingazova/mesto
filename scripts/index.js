import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__subtitle');
const popupFormProfile = document.querySelector('#form-profile');

const inputAddCardName = document.querySelector('.form__input_type_place');
const inputAddCardLink = document.querySelector('.form__input_type_link');

const cardsContainer = document.querySelector('.elements');
const popupFormCard = document.querySelector('#form-card');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formAddCard = popupAddCard.querySelector('.form');
const inputList = formAddCard.querySelectorAll('.form__input');

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');
const buttonAddCardSave = popupAddCard.querySelector('.form__button');

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

const esc = 'Escape';

// Функция закрытия по оверлею 
const setOverlayListener = function(evt) {
   if(evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
   }
}

// Функция закрытия по кнопке Escape
const setEscListener = function(evt) {
  if(evt.key === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Добавления карточек при загрузке страницы
initialCards.forEach (function (item){
  renderCard(item.link, item.name);
})

function generateCard(link, name) {
   const cardElement = new Card('#template-card', name, link, openPopup);
   return cardElement.createCard();
 }

function renderCard(link, name) {
  const cardTemplate = generateCard(link, name);
  cardsContainer.prepend(cardTemplate);
  closePopup(popupAddCard);
}


// Добавления карточек через инпут попапа
function handleCardFormSubmit(evt) {
   evt.preventDefault();
   renderCard(inputAddCardLink.value, inputAddCardName.value);
   closePopup(popupAddCard);

   //Валидация карточки
   formAddCardValidator.toggleButtonState();
}

// Открытие окна редактирования профиля
function openEditPopup() {
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

// Изменение данных профиля 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function openPopup(popup) {
   popup.classList.add('popup_opened');
   document.addEventListener('mousedown', setOverlayListener);
   document.addEventListener('keydown', setEscListener);
}

function closePopup(popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('mousedown', setOverlayListener);
   document.removeEventListener('keydown', setEscListener);
}

// Cлушатель отправки формы редактирования профиля
popupFormProfile.addEventListener('submit', handleProfileFormSubmit); 

// Cлушатель кнопки открытия попапа редактирования профиля
buttonOpenPopupProfile .addEventListener('click', openEditPopup);

// Слушатель кнопки открытия попапа для добавления карточки
buttonOpenAddCard.addEventListener('click', () => {
   openPopup(popupAddCard);
});

// Cлушатель отправки формы добавления карточки из попапа
popupFormCard.addEventListener('submit', handleCardFormSubmit);

//закрытие всех попапов
// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

const config = {
   formSelector: '.form',
   inputSelector: '.form__input',
   submitButtonSelector: '.form__button',
   inputErrorClass: 'form__input_type_error',
   errorClass: 'form__input-error_is-active'    
}

// валидация формы редактирования профиля
const formEditProfileValidator = new FormValidator(config, popupFormProfile);
formEditProfileValidator.enableValidation();
// валидация формы добавления новой карточки
const formAddCardValidator = new FormValidator(config, popupFormCard);
formAddCardValidator.enableValidation();

export {openPopup};