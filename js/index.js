//Expanded sidebar
const showNav = (toggleId,navbarId,bodyId,cardsId,dropId,buttonId)=>{
  const toggle = document.getElementById(toggleId)
  navbar = document.getElementById(navbarId)
  bodypadding = document.getElementById(bodyId)
  cardgap = document.getElementById(cardsId)
  dropgap = document.getElementById(dropId)
  buttongap = document.getElementById(buttonId)

  cardgap.style.columnGap = "4.5rem"
  dropgap.style.columnGap = "12rem"
  buttongap.style.columnGap = "10rem"

  if(toggle && navbar){
    toggle.addEventListener('click',()=>{
      navbar.classList.toggle('expand')
      bodypadding.classList.toggle('bodypadding')

      if(cardgap.style.columnGap == "4.5rem"){
        cardgap.style.columnGap = "2.5rem"
      }
      else{
        cardgap.style.columnGap = "4.5rem"
      }

      if(dropgap.style.columnGap == "12rem"){
        dropgap.style.columnGap = "9rem"
      }
      else{
        dropgap.style.columnGap = "12rem"
      }

      if(buttongap.style.columnGap == "10rem"){
        buttongap.style.columnGap = "7rem"
      }
      else{
        buttongap.style.columnGap = "10rem"
      }

    })
  }
}

const dropDown = (dropToggle,dropClass,dropIcon,n)=>{
  dropClass = document.getElementsByClassName(dropClass)
  dropIcon = document.getElementsByClassName(dropIcon)
  for(i=0;i<dropClass.length; i++){
    if(i===n){
      dropClass[i].classList.toggle("show-drop")
      dropIcon[i].classList.toggle("rotate-icon")
    }
  }
}

drop1 = document.getElementById('drop1')
drop2 = document.getElementById('drop2')
drop3 = document.getElementById('drop3')

drop1.addEventListener('click',()=>{
  dropDown('drop1','dropdown-content','drop-icon',0)
})

drop2.addEventListener('click',()=>{
  dropDown('drop1','dropdown-content','drop-icon',1)
})

drop3.addEventListener('click',()=>{
  dropDown('drop1','dropdown-content','drop-icon',2)
})

showNav('nav-toggle','navbar','body-id','cards-id','drop-id','button-id')
