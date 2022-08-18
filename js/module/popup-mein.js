/* Функиция для открития окна:
Визов
OpenMein('.Кнока', '.Клас меню', 'Клас активации или де актевации', '.Часть по которой не должно бить закрития');
*/
function OpenMein (classMeinButton, classMeinName, classOn, classСontainer){
  const classButtons = document.querySelectorAll(classMeinButton);
  const className = document.querySelector(classMeinName);

  for (let i = 0; i < classButtons.length; i++) {
    const classButton = classButtons[i].addEventListener('click', function(e) {
      className.classList.toggle(classOn);
      e.preventDefault();
    }, false);
  }
  
  if (className != null) {
    className.addEventListener('click', function(e) {
      if (!e.target.closest(classСontainer)) {
        className.classList.toggle(classOn);
      }
    }, false);
  }
}

export {OpenMein};