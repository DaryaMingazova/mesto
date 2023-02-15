const profile = document.querySelector('.profile');
const buttonEdit = profile.querySelector('.profile__edit-button');//Редактировать профиль
const buttonAdd = profile.querySelector('.profile__create-button');//Создать новое место

const popupEdit = document.querySelector('.popup_edit');//редактирование профиля
const popupAdd = document.querySelector('.popup_add');//добавление новой карточки
const popupImage = document.querySelector('.popup_image');

const buttonPopupEditClose = popupEdit.querySelector('.popup__close-icon');
const buttonPopupAddClose = popupAdd.querySelector('.popup__close-icon');// имя профиля в попапе
const buttonPopupImageClose = popupImage.querySelector('.popup__close-icon');//второе поле  в попапе

//форма-редактирование профиля
const formProfile = popupEdit.querySelector('.form');
const userNameInput = formProfile.querySelector('#user-name');
const userJobInput = formProfile.querySelector('#user-job');

//форма-добавления новой карточки
const formCard = popupAdd.querySelector('.form');
const placeNameInput = formCard.querySelector('#place-name');
const placeImgInput = formCard.querySelector('#place-img');

//Профиль на страничке имя и о себе
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

// Карточки
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;

// Открытая картинка
const imageCaption = popupImage.querySelector('.opened-image__caption');
const imageElement = popupImage.querySelector('.opened-image__image');

// Открытие модального окна
function openPopup(popup) {
  popup.classList.add('popup_animated');
  popup.classList.add('popup_opened');
}
//закрытие модального окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Открытие модального окна с картинкой
function handlePreviewImage(popupImageData) {
  openPopup(popupImage);

  imageElement.src = popupImageData.link;
  imageElement.alt = popupImageData.name;
  imageCaption.textContent = popupImageData.name;
}

// Cоздание карточки
function createCard(cardData) {
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.element');

  const cardElement = cardTemplate.cloneNode(true);
  const elementTitle = cardElement.querySelector('.element__title');
  const elementImage = cardElement.querySelector('.element__image');
  const likeButton = cardElement.querySelector('.element__like-icon');
  const trashButton = cardElement.querySelector('.element__trash-icon');

  elementImage.alt = cardData.name;
  elementImage.src = cardData.link;
  elementTitle.textContent = cardData.name;
  // лайкнуть карточку
  likeButton.addEventListener('click', evt => {
    evt.target.classList.toggle('element__like-icon_active');
  });

  trashButton.addEventListener('click', evt => {
    evt.target.closest('.element').remove();
  });

  elementImage.addEventListener('click', evt => {
    handlePreviewImage(cardData);
  });

  return cardElement;
}
// добавление карточки
function addCard(cardData, cardContainer, newCard) {
  const card = createCard(cardData);

  if (newCard) {
    cardContainer.prepend(card);
  } else {
    cardContainer.append(card);
  }
}

// Шесть карточек «из коробки»
// Карточки из cards.js по макету
initialCards.forEach(item => {
  addCard(item, cardsList, false);
});

// Отправка формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = userNameInput.value;
  profileSubtitle.textContent = userJobInput.value;

  closePopup(popupEdit);
}
// Отправка формы добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  addCard({
    name: placeNameInput.value,
    link: placeImgInput.value
  }, cardsList, true);

  closePopup(popupAdd);

  formCard.reset();
}
//закрытие модального окна с картинкой
buttonPopupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});

// Модальное окно редактирования профиля
buttonEdit.addEventListener('click', () => {
  openPopup(popupEdit);

  userNameInput.value = profileTitle.textContent;
  userJobInput.value = profileSubtitle.textContent;
});

buttonPopupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
});

// Модальное окно добавления карточки
buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

buttonPopupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

formProfile.addEventListener('submit', handleProfileFormSubmit);
formCard.addEventListener('submit', handleCardFormSubmit);
