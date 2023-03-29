/*Класс отвечает за отрисовку элементов на странице
Конструктор принимает объект с двумя свойствами: items и renderer. 
items — массив данных, которые нужно добавить на страницу при инициализации класса.
renderer — функция, отвечает за создание и отрисовку данных на странице.
*/
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}