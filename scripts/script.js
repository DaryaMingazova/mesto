const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__subtitle');
const popupFormProfile = document.querySelector('#form-profile');
const inputAddCardName = document.querySelector('.form__input_type_place');
const inputAddCardLink = document.querySelector('.form__input_type_link');
const cardsContainer = document.querySelector('.elements');
const popupFormCard = document.querySelector('#form-card');

const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupFigure = document.querySelector('.popup_type_image');

const popupFigureImage = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');

const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('#edit-profile-close');
const buttonClosePopupAdd = document.querySelector('.popup__button-close');
const buttonAddCardSave = popupAddCard.querySelector('.form__button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');
const buttonCloseImage = document.querySelector('#closeImage');

const template = document.querySelector('#template-card').content;
const card = template.querySelector('.element').cloneNode(true);
const esc = 'Escape';

// Функция закрытия по Escape
const setEscListener = function(evt) {
  if(evt.key === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
// Функция закрытия по оверлею 
const setOverlayListener = function(evt) {
   const openedPopup = document.querySelector('.popup_opened');
       if(evt.target === openedPopup) {
           closePopup(openedPopup);
  }
}
 
// Шесть карточек «из коробки»
// Карточки из cards.js по макету
 initialCards.forEach (function (item){
   renderCard(item.link, item.name);
})

function renderCard(link, name) {
   cardsContainer.prepend(createCard(link, name));
}

function createCard(link, name) {
   const card = template.querySelector('.element').cloneNode(true);
   const elementImage = card.querySelector('.element__image');
   const elementText = card.querySelector('.element__text');
   elementImage.src = link;
   elementImage.alt = name;
   elementText.textContent = name;

   buttonHandleLike(card);
   deleteCard(card);
   openPopupImg(card);

   return card;
}

// Отправка формы добавления карточки
function handleCardFormSubmit(evt) {
   evt.preventDefault();
   renderCard(inputAddCardLink.value, inputAddCardName.value);
   popupFormCard.reset();
   closePopup(popupAddCard);
   buttonAddCardSave.disabled = true;
}

//Удаления картинок

function deleteCard(card) {
   card.querySelector('.element__delete-button').addEventListener('click', function(evt) {
      evt.target.closest('.element').remove();
   });
   }

 // Лайка на картинках
function buttonHandleLike(card) {
   card.querySelector('.element__like').addEventListener('click', function(evt) {
       evt.target.classList.toggle('element__like_active');
   })
}

// Открытие попапа фото карточки
function openPopupImg(card) {
card.querySelector('.element__image').addEventListener('click', function(evt) {
       openPopup(popupFigure);
       const caption = evt.target.closest('.element').querySelector('.element__text').textContent;
       popupFigureImage.alt = caption;
       popupFigureImage.src = evt.target.src;
       popupFigureCaption.textContent = caption;
   });
}

// Открытие окна редактирования профиля
function openEditPopup() {
  openPopup(popupEdit)
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

// Изменение данных профиля 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEdit);
}

function closeAddCardPopup() {
   closePopup(popupAddCard);
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

//слушатель отправки формы редактирования профиля
popupFormProfile.addEventListener('submit', handleProfileFormSubmit); 

//слушатель кнопки открытия попапа редактирования профиля
buttonOpenPopup.addEventListener('click', openEditPopup);

//кнопка закрытия попапа редактирования профиля
buttonClosePopup.addEventListener('click', () => {
   closePopup(popupEdit);
});

//Слушатель кнопки открытия попапа для добавления карточки
buttonOpenAddCard.addEventListener('click', () => {
   openPopup(popupAddCard);
});

//Слушатель кнопки закрытия попапа добавления карточки
buttonClosePopupAdd.addEventListener('click', closeAddCardPopup);

//слушатель отправки формы добавления карточки из попапа
popupFormCard.addEventListener('submit', handleCardFormSubmit);

//слушатель кнопки закрытия попапа с фото
buttonCloseImage.addEventListener('click', () => {
   closePopup(popupFigure);
});
