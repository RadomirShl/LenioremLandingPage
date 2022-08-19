/* Функиция для открития окна:
Визов
OpenMein('.Кнока', '.Клас меню', 'Клас активации или де актевации', '.Часть по которой не должно бить закрития');
*/
function OpenMein (classMeinButton, classMeinName, classOnOf, classСontainer){
  const classButtons = document.querySelectorAll(classMeinButton);
  const className = document.querySelector(classMeinName);

  for (let i = 0; i < classButtons.length; i++) {
    const classButton = classButtons[i].addEventListener('click', function(e) {
      className.classList.toggle(classOnOf);
      e.preventDefault();
      if (className != null) {
        window.onkeydown = function(e) {
          if (e.keyCode == 27) {
            className.classList.toggle(classOnOf);
            window.onkeydown = 0;
          }
        };
      }
    }, false);
  }
  if (className != null) {
    className.addEventListener('click', function(e) {
      if (!e.target.closest(classСontainer)) {
        className.classList.toggle(classOnOf);
      }
    }, false);
  }
  
}

export {OpenMein};