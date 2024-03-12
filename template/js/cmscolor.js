const therealuser = document.querySelectorAll('.therealuser')
for(let i = 0;i<therealuser.length;i++){
    if(i%2 == 0){
        therealuser[i].classList.replace('therealuser','therealuser2')
    }
}
const checkstatus = document.querySelectorAll('.checkstatus')
for(let i = 0;i<checkstatus.length;i++){
    if(checkstatus[i].innerText == 'confirm'){
        checkstatus[i].style.color ='darkgreen'
    }
    else if(checkstatus[i].innerText == 'pending'){
        checkstatus[i].style.color ='#ff6600'
    }
    else if(checkstatus[i].innerText == 'none'){
        checkstatus[i].style.color ='darkgray'
    }
}