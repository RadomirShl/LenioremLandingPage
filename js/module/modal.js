/* Функиция для открития модального окна:
клас кнопки открития*/
function modalWindow(buttonNeme){
  const modal = document.querySelector('.modal');
  const button = document.querySelectorAll(buttonNeme);

  if (button.length > 0) {
    for(let i = 0; button.length > i; i++){
      button[i].addEventListener('click', function(e) {
        modal.classList.remove('modal--not_activated');
        e.preventDefault();
      }, false); 
    }
  }
  
  if (modal != null) {
    modal.addEventListener('click', function(e) {
      if (!e.target.closest('.modal__container')) {
        modal.classList.toggle('modal--not_activated');
      }
      e.preventDefault();
    }, false);
  }
}
export {modalWindow};