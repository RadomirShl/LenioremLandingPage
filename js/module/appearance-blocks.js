/* Функиция для создане анимации:
Получаит на вход класи для анимации*/
function animItems (animClass){
  let animItems = document.querySelectorAll(animClass);
// Скривает все елементи для анимации
  for(let i = 0; i < animItems.length; i++){
    animItems[i].classList.add('animation');  
  }

  if(animItems.length > 0){
    window.addEventListener('scroll', animSkrol)
    function animSkrol(){
      for(let i = 0; i < animItems.length; i++){
        const animItem = animItems[i];
        const animItemOffset = offset(animItem).top - animItem.offsetHeight;
        let animItemPoit = window.innerHeight ;
        if(pageYOffset > animItemOffset - animItemPoit){
          animItem.classList.add('animation--active');
        }
      }
    }
    function offset(el){
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }
  }
}
export {animItems};