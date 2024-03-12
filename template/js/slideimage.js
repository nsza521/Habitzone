let second = 0
let interval = null
const simg1 = document.querySelector('#simg1')
const simg2 = document.querySelector('#simg2')
const simg3 = document.querySelector('#simg3')

function timecount(){
  second++
  sec = second % 60
  hrs =  Math.floor(second / 3600)
  minute = Math.floor((second-(hrs*3600))/60)

  if(second % 5 == 0){
    if(simg1.classList.contains('img1')){
        simg1.style.opacity = "0";
        simg2.style.opacity = "1";
        simg1.classList.remove('img1')
        simg1.classList.add('img1left')
    }
    else if(simg1.classList.contains('img1left')){
        simg2.style.opacity = "0";
        simg3.style.opacity = "1";

        simg1.classList.remove('img1left')
        simg1.classList.add('img1leftmore')
    }
    else if(simg1.classList.contains('img1leftmore')){
      simg3.style.opacity = "0";
      simg1.style.opacity = "1";
      simg1.classList.remove('img1leftmore')
      simg1.classList.add('img1')
  }
  }
  
}
function timerclick(){
  if(interval){
      return
  }
  interval = setInterval(timecount,1000)
}
timerclick()