export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  
      return cardElement;
    }
  
    // метод слушателя кнопки "лайк"
    _handleLikeCard() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
  
    // метод слушателя кнопки "удалить"
    _handleDeleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    _setEventListeners() {
      // открытие попапа просмотра изображения кликом по изображению
      this._image.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      })
      // слушатель кнопки удаления карточки
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._handleDeleteCard();
      })
      // слушатель кнопки лайк
      this._element.querySelector('.element__like').addEventListener('click', () => {
        this._handleLikeCard();
      })
    }
  
    // метод создания готовой карточки
    generateCard() {
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.element__image');
      this._setEventListeners();
  
      this._image.src = this._link;
      this._image.alt = this._name;
      this._element.querySelector('.element__text').textContent = this._name;
  
      return this._element;
    }
  }