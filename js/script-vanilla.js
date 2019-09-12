
const contributersButon = document.querySelector('#toggle-contributers');
const contributers = document.querySelector('.contributers__list');

contributersButon.addEventListener('click', () => {
  contributers.classList.toggle('contributers__list--hide');
});
