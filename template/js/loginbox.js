const loginboxopen = document.querySelector(".loginbox2")
const overlay = document.querySelector(".overlaynoactive")
const inputpassword = document.querySelector(".inputpassword")
const eyeslash = document.querySelector(".eye")

function openloginbox(){
    loginboxopen.classList.toggle("loginbox")
    overlay.classList.toggle("overlay")
}
function closeloginbox(){
    loginboxopen.classList.toggle("loginbox")
    overlay.classList.toggle("overlay")
}
function showhidepassword(){
    if (inputpassword.type == "password"){
        eyeslash.classList.toggle("eyeremove")
        inputpassword.setAttribute("type","text")
    }
    else{
        eyeslash.classList.toggle("eyeremove")
        inputpassword.setAttribute("type","password")

    }
}

function pleaseinputusername(){
    if(userinputloginbox.value == ''){
        const  P1 = document.querySelector('#loginboxP1')
        P1.classList.remove('headinloginboxP')
        P1.classList.add('headinloginboxPshow')
        console.log(userinputloginbox.value)
    }
    else{
        if(!(userinputloginbox.value == '')){
            const  P1 = document.querySelector('#loginboxP1')
            P1.classList.remove('headinloginboxPshow')
            P1.classList.add('headinloginboxP')
        }
    }   
}
function pleaseinputpassword(){
    if(userinputpasswordbox.value == ''){
        const  P2 = document.querySelector('#loginboxP2')
        P2.classList.remove('headinloginboxP')
        P2.classList.add('headinloginboxPshow')
        console.log(userinputloginbox.value)
    }
    else{
        if(!(userinputpasswordbox.value == '')){
            const  P2 = document.querySelector('#loginboxP2')
            P2.classList.remove('headinloginboxPshow')
            P2.classList.add('headinloginboxP')
        }
    }   
}
const userinputloginbox = document.getElementById("inputusername1")
const userinputpasswordbox = document.getElementById("inputusername2")
userinputloginbox.addEventListener('blur',pleaseinputusername)
userinputpasswordbox.addEventListener('blur',pleaseinputpassword)

const btnopenlogin = document.getElementById('btnopenlogin')
const btncloselogin = document.getElementById('btncloselogin')
btnopenlogin.addEventListener('click',openloginbox)
btncloselogin.addEventListener('click',closeloginbox)

