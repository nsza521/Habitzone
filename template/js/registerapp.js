const p1 = document.querySelector('.pleaseinputhide1')
const p2 = document.querySelector('.pleaseinputhide2')
const p3 = document.querySelector('.pleaseinputhide3')
const p4 = document.querySelector('.pleaseinputhide4')
const p5 = document.querySelector('.pleaseinputhide5')
const p6 = document.querySelector('.pleaseinputhide6')

const nameinput = document.getElementById('nameinput')
const surnameinput = document.getElementById('surnameinput')
const emailinput = document.getElementById('emailinput')
const passwordinput = document.getElementById('passwordinput')
const confirmpasswordinput = document.getElementById('confirmpasswordinput')
const phoneinput = document.getElementById('phoneinput')
const myBtn = document.getElementById('myBtn')
const click = document.getElementById('clickcheckbox')

document.getElementById("myBtn").disabled = true;
function clickmeifucan(){
    let checkbox = document.getElementById('checkboxcheck')
    let checkbool = checkbox.checked
    let tspw = document.querySelector('#tspw')

    let nip = nameinput.value != ''
    let stnip = surnameinput.value != ''
    let emip = emailinput.value != ''
    let pwip = passwordinput.value != ''
    let cfpwip = confirmpasswordinput.value != ''
    let phip = phoneinput.value != ''
    let resultlogic = nip&&stnip&&emip&&pwip&&cfpwip&&phip
    
    let p1c = p1.classList.contains('pleaseinputhide1')
    let p2c = p2.classList.contains('pleaseinputhide2')
    let p3c = p3.classList.contains('pleaseinputhide3')
    let p4c = p4.classList.contains('pleaseinputhide4')
    let p5c = p5.classList.contains('pleaseinputhide5')
    let p6c = p6.classList.contains('pleaseinputhide6')
    let tspwcheck = tspw.classList.contains('tooshortpasswordhide')

    let resultlogicclass = p1c&&p2c&&p3c&&p4c&&p5c&&p6c&&tspwcheck
    
    if(resultlogic && resultlogicclass && checkbool){
        const classbtn = document.getElementById('myBtn')
        classbtn.disabled = false
        classbtn.classList.remove('btnhide')
        classbtn.classList.add('btnshow')
    }
    else{
        const classbtn = document.getElementById('myBtn')
        classbtn.disabled = true
        classbtn.classList.remove('btnshow')
        classbtn.classList.add('btnhide')

    }
}
function pleaseinputname(){
    if(nameinput.value == ''){
        p1.classList.remove('pleaseinputhide1')
        p1.classList.add('pleaseinputshow1')
    }
    else{
        if(!(nameinput.value == '')){
            p1.classList.remove('pleaseinputshow1')
            p1.classList.add('pleaseinputhide1')
        }
    }   
    clickmeifucan()
}
function pleaseinputsurname(){
    if(surnameinput.value == ''){
        p2.classList.remove('pleaseinputhide2')
        p2.classList.add('pleaseinputshow2')
    }
    else{
        if(!(surnameinput.value == '')){
            p2.classList.remove('pleaseinputshow2')
            p2.classList.add('pleaseinputhide2')
        }
    }   
    clickmeifucan()
}
function pleaseinputemail(){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailinputtext = emailinput.value
    
    if(emailinput.value == '' ){
        p3.classList.remove('pleaseinputhide3')
        p3.classList.add('pleaseinputshow3')
    }
    else if(emailinput.value != ''){
        if(emailinputtext.match(validRegex)){
            p3.classList.remove('pleaseinputshow3')
            p3.classList.add('pleaseinputhide3')
        }
        else{
            p3.classList.remove('pleaseinputhide3')
            p3.classList.add('pleaseinputshow3')
        }
    }   
    clickmeifucan()
}
function pleaseinputpassword(){
    let passwordtext = passwordinput.value
    let passwordlenght = passwordtext.length
    const tspwhide = document.querySelector('#tspw')
    function containsNumbers(str) {
        return /[0-9]/.test(str);
    }
    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }
    function isCharacterALetterThai(char) {
        return (/[ก-ฮ]/).test(char)
    }
    if(passwordlenght >= 8){
        if(containsNumbers(passwordtext) && (isCharacterALetter(passwordtext)|| isCharacterALetterThai(passwordtext))){
            p4.classList.remove('pleaseinputshow4')
            p4.classList.add('pleaseinputhide4')
            tspwhide.classList.remove('tooshortpasswordshow')
            tspwhide.classList.add('tooshortpasswordhide')
        }
        else{
            tspwhide.classList.remove('tooshortpasswordhide')
            tspwhide.classList.add('tooshortpasswordshow')
            p4.classList.remove('pleaseinputshow4')
            p4.classList.add('pleaseinputhide4')
           
        }
    }
    else if(passwordinput.value == ''){
            p4.classList.remove('pleaseinputhide4')
            p4.classList.add('pleaseinputshow4')
            tspwhide.classList.remove('tooshortpasswordshow')
            tspwhide.classList.add('tooshortpasswordhide')
    }
    else if(passwordlenght < 8){
        if((passwordinput.value != '')){
            p4.classList.remove('pleaseinputshow4')
            p4.classList.add('pleaseinputhide4')
            tspwhide.classList.remove('tooshortpasswordhide')
            tspwhide.classList.add('tooshortpasswordshow')
        }
        
    }
    clickmeifucan()
    checkpassword()
}
function checkpassword(){
    const password = passwordinput.value
    const confirmpass = confirmpasswordinput.value

    if(password != confirmpass){
        p5.classList.remove('pleaseinputhide5')
        p5.classList.add('pleaseinputshow5')
    }
    else{
       if(password == confirmpass){
            p5.classList.remove('pleaseinputshow5')
            p5.classList.add('pleaseinputhide5')
        }
    }   
    clickmeifucan()
}
function pleaseinputphone(){
    let phoneinputtext = phoneinput.value
    let phoneinputlenght = phoneinputtext.length
    function containsNumbers(str) {
        return /[0-9]/.test(str);
    }
    if(phoneinput.value == ''){
        p6.classList.remove('pleaseinputhide6')
        p6.classList.add('pleaseinputshow6')
    }
    else{
        if((containsNumbers(phoneinput.value) && phoneinputlenght == 10)){
            p6.classList.remove('pleaseinputshow6')
            p6.classList.add('pleaseinputhide6')
        }
        else{
            p6.classList.remove('pleaseinputhide6')
            p6.classList.add('pleaseinputshow6')
        }
    }
    clickmeifucan()
}

nameinput.addEventListener('keyup',pleaseinputname)
nameinput.addEventListener('blur',pleaseinputname)
surnameinput.addEventListener('keyup',pleaseinputsurname)
surnameinput.addEventListener('blur',pleaseinputsurname)
emailinput.addEventListener('keyup',pleaseinputemail)
emailinput.addEventListener('blur',pleaseinputemail)
passwordinput.addEventListener('keyup',pleaseinputpassword)
passwordinput.addEventListener('blur',pleaseinputpassword)
confirmpasswordinput.addEventListener('keyup',checkpassword)
confirmpasswordinput.addEventListener('blur',checkpassword)
phoneinput.addEventListener('keyup',pleaseinputphone)
phoneinput.addEventListener('blur', pleaseinputphone)
click.addEventListener('click',clickmeifucan)
  