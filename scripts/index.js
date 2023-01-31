const popupElement = document.querySelector('.popup'); //popup
const editProfile = document.querySelector('.profile__edit-profile'); //открыть редактирование профиля
const closeButton = popupElement.querySelector('.popup__close-button'); //закрыть редактирование
const saveButton = document.querySelector('.popup__save-button'); //кнопка сохранить
const userName = document.querySelector('.profile__user-name'); // имя профиля на странице
const userJob = document.querySelector('.profile__user-job'); //поле 2 на странице

	let nameInput = document.querySelector('.popup__user-name');
	let jobInput = document.querySelector('.popup__user-job'); 


function openPopup() {
	popupElement.classList.remove('popup_closed');
}

function closePopup() {
	popupElement.classList.add('popup_closed');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


// Находим форму в DOM
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

	// Находим поля формы в DOM

	// Получите значение полей из свойства value
	userName.textContent = nameInput.value;
	userJob.textContent = jobInput.value;

	closePopup();
	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 