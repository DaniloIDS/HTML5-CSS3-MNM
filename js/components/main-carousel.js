// 1 Acessar o browser
// 2 Acessar o documento (HTML)
// 3 Pegar o botão
// 4 Saber se o botão está sendo clicado

const ButtonRight = window.document.querySelector('.button-arrow.-right');
const ButtonLeft = window.document.querySelector('.button-arrow.-left');
const Elements = window.document.querySelector('.elements');

let pixels = 0;

ButtonRight.addEventListener('click', function() {
 pixels = pixels + 100;
 Elements.style = `transform: translateX(${pixels}px);`;
});

ButtonLeft.addEventListener('click', function() {
  pixels = pixels - 100;
  Elements.style = `transform: translateX(${pixels}px);`;
});