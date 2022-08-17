/* Функиция для создане анимации:
Получаит на вход класи для 
*/
function animItems (animClass){
  let animItems = document.querySelectorAll(animClass);
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