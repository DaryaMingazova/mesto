class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    }

    _hideErrorMessage(inputElement) {
        const { inputErrorClass, errorClass } = this._config;
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
    
        errorElement.textContent = ''
    }

    _showErrorMessage(inputElement) {
        const { inputErrorClass, errorClass } = this._config;
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.add(inputErrorClass);
        errorElement.classList.add(errorClass);
    
        errorElement.textContent = inputElement.validationMessage;
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideErrorMessage(inputElement, this._config);
        }
        else {
            this._showErrorMessage(inputElement, this._config);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((item) => {
          if (item.validity.valid) {
            return false;
          }
          else {
            return true;
          }
        })
    }

    toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.disabled = true;
        }
        else {
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
    
        this.toggleButtonState(this._inputList, this._buttonElement);
    
        this._inputList.forEach((inputElement) => {

            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement, this._formElement);
                this.toggleButtonState(this._inputList, this._buttonElement);
            })
        })
    }

    resetForm() {
      this.toggleButtonState(); //<== управляем кнопкой ==

      this._inputList.forEach((inputElement) => {
        this._hideError(inputElement) //<==очищаем ошибки ==
      });
    }

    enableValidation() {
      this._setEventListeners();
    }
}

export { FormValidator }
