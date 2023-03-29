import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.figure__image');
    this._popupName = this._popup.querySelector('.figure__caption');
  }

  open (name, link) {
    this._popupImage.src = link;
    this._popupName.textContent = name;
    this._popupImage.alt = name;
    super.open();
  }
}
