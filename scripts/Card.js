//import { openPopup} from './index.js';

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImage = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');

class Card {
    constructor(cardSelector, name, link, openPopup) {
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link
        this._openPopup = openPopup;
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
        .content.querySelector('.element').cloneNode(true)

        return cardElement
    }

    _openPopupCard() {
        this._openPopup(popupFigure)
        popupFigureImage.src = this._link;
        popupFigureCaption.textContent = this._name;
        popupFigureImage.alt = this._name;    
    }

    _deleteCard() {
        this._element.remove();
    }

    _handlelikeButton(evt) {
        evt.target.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            this._openPopupCard();
        })
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard();
        })
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._handlelikeButton(evt);
        })
    }

    createCard() {
        const title = this._element.querySelector('.element__text');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        title.textContent = this._name;

        this._setEventListeners();


        return this._element;
    }
}

export {Card}