let menubarCode = document.getElementById('menubarCode')
let MARK = document.getElementById('MARK')
function OpenMenu(){
  if(menubarCode.style.opacity == '0'){
       menubarCode.style.opacity = '1'
        MARK.classList.remove('fa-bars-staggered')
        MARK.classList.add('fa-xmark')
        menubarCode.style.transition = '1.2s ease-in-out'
  }
  else{
    menubarCode.style.opacity = '0'
    MARK.classList.remove('fa-xmark')
     MARK.classList.add('fa-bars-staggered')
        menubarCode.style.transition = '1.2s ease-in-out'
  }
}