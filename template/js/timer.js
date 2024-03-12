const focustime = document.querySelector("#p2")
const studytime = document.querySelector("#p4")
const idcheck = document.querySelector("#btnplay")
const idcheck2 = document.querySelector("#btnplay2")

// ------------------------------------------------

//study time set when paused video
let second = 0
let interval = null

function timecount(){
    second++
    sec = second % 60
    hrs =  Math.floor(second / 3600)
    minute = Math.floor((second-(hrs*3600))/60)
    //format
    if(sec < 10) sec = '0'+ sec
    if(minute<10) minute = '0'+ minute
    if(hrs < 10) hrs = '0'+ hrs

    studytime.innerText=`${hrs}:${minute}:${sec}`
}
function timerclick(){
    if(interval){
        return
    }
    interval = setInterval(timecount,1000)
}
function stoptimer(){
    clearInterval(interval)
    interval = null

}

// ------------------------------------------------

//Focus time set when paused video
//And Reset , Count from zero second
let second1 = 0
let second3 = 0
let intervalfocus = null

function timecountfocus(){
    if (second3==0){

        second1++
        let second2 = second1
        sec = second2 % 60
        hrs =  Math.floor(second2/ 3600)
        minute = Math.floor((second2-(hrs*3600))/60)
    
        //format
        if(sec < 10) sec = '0'+ sec
        if(minute<10) minute = '0'+ minute
        if(hrs < 10) hrs = '0'+ hrs
    
        focustime.innerText=`${hrs}:${minute}:${sec}`
    
    }
    else{
        
        function startfromzero(){
             //เริ่มนับใหม่เลย ถ้า Second 3 != 0
            second1++
            let second2 = second1-second3
            sec = second2 % 60
            hrs =  Math.floor(second2/ 3600)
            minute = Math.floor((second2-(hrs*3600))/60)

            //format
            if(sec < 10) sec = '0'+ sec
            if(minute<10) minute = '0'+ minute
            if(hrs < 10) hrs = '0'+ hrs

            let x = (parseInt(focustime.innerText[0]+focustime.innerText[1]))
            let y = (parseInt(focustime.innerText[3]+focustime.innerText[4]))
            let z = (parseInt(focustime.innerText[6]+focustime.innerText[7]))
            let secondshow = ((x*3600)+(y*60)+(z))
            console.log(secondshow)

            if (second2>secondshow){
                focustime.innerText=`${hrs}:${minute}:${sec}`
            }
            // *************************
        }
        startfromzero()
        
    }
    
}
function timerclickfocus(){
    if(intervalfocus){
        return
    }
    intervalfocus = setInterval(timecountfocus,1000)
}
function stoptimerfocus(){
    clearInterval(intervalfocus)
    intervalfocus = null
}
function secfocus(){
    second3 = second1
}

idcheck.addEventListener('click',timerclick)
idcheck.addEventListener('click',timerclickfocus)
idcheck2.addEventListener('click',stoptimer)
idcheck2.addEventListener('click',stoptimerfocus)
idcheck2.addEventListener('click',secfocus)


// ------------------------------------------------

const calendermonth =
["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
"กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]

const calenderdate = [28,29,30,31]

const objmonth = {
    "m1":"มกราคม",
    "m2":"กุมภาพันธ์",
    "m3":"มีนาคม",
    'm4':"เมษายน",
    'm5':"พฤษภาคม",
    'm6':"มิถุนายน",
    'm7':"กรกฎาคม",
    'm8':"สิงหาคม",
    'm9':"กันยายน",
    'm10':"ตุลาคม",
    'm11':"พฤศจิกายน",
    'm12':"ธันวาคม"
}

//2020+4 feb = 29
//sun 1 janruaurary 2023

let dateall = new Date().toString() 
    day = dateall.slice(0,3)    //วันนี้
    date = dateall.slice(8,10)  //วันที่วันนี้
    month = dateall.slice(4,7)  //เดือนนี้
    year = dateall.slice(11,15) //ปีนี้
    
    let monththai , calmonth
    if(month==="Jan"){
        monththai = (objmonth.m1)
        calmonth = 1
    }
    else if(month==="Feb"){
        monththai = (objmonth.m2)
        calmonth = 2
    }
    else if(month==="Mar"){
        monththai = (objmonth.m3)
        calmonth = 3
    }
    else if(month==="Apr"){
        monththai = (objmonth.m4)
        calmonth = 4
    }
    else if(month==="May"){
        calmonth = 5
        monththai = (objmonth.m5) 
    } 
    else if(month==="Jun"){
        calmonth = 6
        monththai = (objmonth.m6)
    }
    else if(month==="Jul"){
        calmonth = 7
        monththai = (objmonth.m7)
    }
    else if(month==="Aug"){
        calmonth = 8
        monththai = (objmonth.m8)
    }   
    else if(month==="Sep"){
        calmonth = 9
        monththai = (objmonth.m9)
    }
    else if(month==="Oct"){
        calmonth = 10
        monththai = (objmonth.m10)
    }
    else if(month==="Nov"){
        calmonth = 11
        monththai = (objmonth.m11)
    }
    else if(month==="Dec"){
        calmonth = 12
        monththai = (objmonth.m12)
    }
     //monththaiตรงนี้เป็นglobal
function formatmonthandyear(){
    const monthheader = document.querySelector(".monthheader")
    const yearheader = document.querySelector(".yearheader")
    monthheader.innerText=`${monththai}`
    yearheader.innerText=`${year}`
    // console.log(parseInt( yearheader))
}
formatmonthandyear()


//เปลี่ยนเดือน ปี
const leftbtnchangemonthandyear = document.getElementById('leftbtnmonthandyear')
const rightbtnchangemonthandyear = document.getElementById('rightbtnmonthandyear')
function changemonthandyearleft(){
    calmonth -= 1
    console.log(calmonth)
    let monththai //ทำงานในblockนี้
    if(calmonth==1){
        monththai = (objmonth.m1)
    }
    else if(calmonth==2){
        monththai = (objmonth.m2)
    }
    else if(calmonth==3){
        monththai = (objmonth.m3)
    }
    else if(calmonth==4){
        monththai = (objmonth.m4)
    }
    else if(calmonth==5){
        monththai = (objmonth.m5) 
    } 
    else if(calmonth==6){
        monththai = (objmonth.m6)
    }
    else if(calmonth==7){
        monththai = (objmonth.m7)
    }
    else if(calmonth==8){
        monththai = (objmonth.m8)
    }   
    else if(calmonth==9){
        monththai = (objmonth.m9)
    }
    else if(calmonth==10){
        monththai = (objmonth.m10)
    }
    else if(calmonth==11){
        monththai = (objmonth.m11)
    }
    else if(calmonth==12){
        monththai = (objmonth.m12)
    }
    else{
        monththai = (objmonth.m12)
        calmonth = 12
        year = parseInt(year)
        year -= 1
    }
    const monthheader = document.querySelector(".monthheader")
    const yearheader = document.querySelector(".yearheader")
    monthheader.innerText=`${monththai}`
    yearheader.innerText=`${year}`
    todayfocus()

}
function changemonthandyearright(){
    calmonth += 1
    console.log(calmonth)
    let monththai //ทำงานฝนblockนี้
    if(calmonth==1){
        monththai = (objmonth.m1)
    }
    else if(calmonth==2){
        monththai = (objmonth.m2)
    }
    else if(calmonth==3){
        monththai = (objmonth.m3)
    }
    else if(calmonth==4){
        monththai = (objmonth.m4)
    }
    else if(calmonth==5){
        monththai = (objmonth.m5) 
    } 
    else if(calmonth==6){
        monththai = (objmonth.m6)
    }
    else if(calmonth==7){
        monththai = (objmonth.m7)
    }
    else if(calmonth==8){
        monththai = (objmonth.m8)
    }   
    else if(calmonth==9){
        monththai = (objmonth.m9)
    }
    else if(calmonth==10){
        monththai = (objmonth.m10)
    }
    else if(calmonth==11){
        monththai = (objmonth.m11)
    }
    else if(calmonth==12){
        monththai = (objmonth.m12)
    }
    else{
        monththai = (objmonth.m1)
        calmonth = 1
        year = parseInt(year)
        year += 1
    }
    const monthheader = document.querySelector(".monthheader")
    const yearheader = document.querySelector(".yearheader")
    monthheader.innerText=`${monththai}`
    yearheader.innerText=`${year}`
    todayfocus()
}
leftbtnchangemonthandyear.addEventListener('click',changemonthandyearleft)
rightbtnchangemonthandyear.addEventListener('click',changemonthandyearright)

// ------------------------------------------------

idcheck2.addEventListener("click",()=>{ // function ที่เพิ่มเวลาเรียนไปในวันที่เรียน
    const datetest = document.querySelectorAll(".datediv p")
    const datedivdiv = document.querySelectorAll(".datediv div")

    let dateall = new Date().toString()

    day = dateall.slice(0,3)    //วันนี้
    date = dateall.slice(8,10)  //วันที่วันนี้
    month = dateall.slice(4,7)  //เดือนนี้
    year = dateall.slice(11,15) //ปีนี้

    for(i in datetest){
        
        let dateincalender = datetest[i].innerText
        let hrs = (parseInt(studytime.innerText[0]+studytime.innerText[1]))
        let minute = (parseInt(studytime.innerText[3]+studytime.innerText[4]))

        if(minute<10) minute = '0'+ minute
        if(hrs < 10) hrs = '0'+ hrs

        let studytoday =  `${hrs}:${minute}`
        const monthheader = document.querySelector(".monthheader")
        const yearheader = document.querySelector(".yearheader")
        
        if (dateincalender===date  && year == yearheader.innerText && monththai == monthheader.innerText){ //loop checkdate in calender == datetoday ? //monthglobal  == monthinnertext ?
            datedivdiv[i].innerHTML = `${studytoday}`
            datedivdiv[i].setAttribute("id","showdatediv")
        }
        
    }
})
function todayfocus(){//เช็คว่าวันนี้วันอะไรแล้วก็วงกลม
    const datetest = document.querySelectorAll(".datediv p")
    const datediv = document.querySelectorAll(".datediv")

    let dateall = new Date().toString()

    daytoday = dateall.slice(0,3)    //วันนี้
    datetoday = dateall.slice(8,10)  //วันที่วันนี้
    yeartoday = dateall.slice(11,15) //ปีนี้
    
    for(i in datetest){
        let dateincalender = datetest[i].innerText

        const monthheader = document.querySelector(".monthheader")
        const yearheader = document.querySelector(".yearheader")
        if (dateincalender===datetoday  && yeartoday == yearheader.innerText && monththai == monthheader.innerText){ //monthglobal  == monthinnertext ?
            datediv[i].setAttribute("style","border:1px white solid;box-shadow: 0.25px 0.25px 2px gray,-0.25px -0.25px 2px gray;border-radius: 3px;")
        }
        else{
            datediv[i].setAttribute("style","border:0px;")
        }
    }
}

todayfocus()

// ------------------------------------------------

////date today = 06 error cause date in calender = 6
//fix them all bitch
//space bar paused play