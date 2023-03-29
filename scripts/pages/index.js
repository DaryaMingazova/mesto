import {nameInput, jobInput, profileName, profileText, popupFormProfile,
   inputAddCardName, inputAddCardLink, initialCards, closeButtons,
   cardsContainer, popupFormCard, popupEditProfile, popupAddCard, buttonOpenPopupProfile,
    buttonOpenAddCard, config} from '../utils/constants.js';

import Section from "../components/Section.js";
import FormValidator from '../components/FormValidator.js';
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";


/* Функции */
// Заносим данные в форму попапа редактирования профиля
function fillInEditProfileFormInputs({ username, job }) {
  nameInput.value = username;
  jobInput.value = job;
};
// функционал создания новой карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      viewImagePopup.open(name, link);
    }}, '#template-card');
  const cardElement = card.generateCard();
  return cardElement;
};


/* Профиль юзера */
// создание экземпляра класса, отвечающего за отображение информации о пользователе
const userInfo = new UserInfo({
  username: '.profile__title',
  job: '.profile__subtitle'
});

// создание попапа с формой редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      username: dataForm.username,
      job: dataForm.job
    });
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();
// Обработчик кнопки Edit попапа редактирования профиля
buttonOpenPopupProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillInEditProfileFormInputs({
    username: info.username,
    job: info.job
  });
  editProfilePopup.open();
});


const formAddCardValidator = new FormValidator(config, popupFormCard);
formAddCardValidator.enableValidation();

/* Карточки с изображениями */
// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    addCardPopup.close();
  }
});
// добавляем слушатели этому попапу:
addCardPopup.setEventListeners();
// обработчик открытия попапа
buttonOpenAddCard.addEventListener('click', () => {
  formAddCardValidator.toggleButtonState();
  addCardPopup.open();
})
// Создание экземпляра класса Section
// отрисовка карточек на странице из массива
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, '.elements');
cardsList.renderItems();

/* Попап просмотра изображения */
const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();


// валидация формы редактирования профиля
const formEditProfileValidator = new FormValidator(config, popupFormProfile);
formEditProfileValidator.enableValidation();
