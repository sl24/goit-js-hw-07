// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

//создаем ссылку на инпут
const inputRef = document.querySelector('#font-size-control');

// создаем ссылку на спан
const textRef = document.querySelector('#text');

// вешаем слушателя события на инпут
inputRef.addEventListener('input', () => {
  textRef.style.fontSize = inputRef.value + 'px';
});
