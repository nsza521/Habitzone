const mainvideo = document.querySelector("video")
mainvideo.volume=0.5;
mainvideo.playbackRate = 1

//Button
const buttonplay = document.querySelector('.buttonplay')
const buttonpause = document.querySelector(".buttonpauseopacity0")
//Container 
const container = document.querySelector(".container")
const videoplayer = document.querySelector(".videoplayer")
//Fullscreen button
const fullscreenbtn = document.querySelector(".buttonfullscreen")
const fullscreenexitbtn = document.querySelector(".buttonfullscreenexit0")
//Volume
const volumeslide = document.querySelector(".range")
const volumeoff = document.querySelector(".volumeoff0")
const volumeon = document.querySelector(".volumeon")
//Processbar
const progressbar = document.querySelector(".progressbar")
const process = document.querySelector(".processbar")
//Timevideo
const timerun = document.querySelector(".timerun")
const timeall = document.querySelector(".timeall")



const btnplaypause = document.getElementById('btnplay')
const btnplaypause2 = document.getElementById('btnplay2')
const btnreplay = document.getElementById('btnreplay')
const btnforward = document.getElementById('btnforward')
const playinpic = document.getElementById('btnplayinpic')
const fullsrc = document.getElementById('btnfullscreen')
const fullsrc2 = document.getElementById('btnfullscreen2')
function playpause(){//Function Play , Pause video
    if(mainvideo.paused){
        mainvideo.play()
        buttonplay.classList.replace("buttonplay","buttonplayopacity0")
        buttonpause.classList.replace("buttonpauseopacity0","buttonpause")
        // container.requestFullscreen()
    }
    else{
        mainvideo.pause()
        buttonplay.classList.replace("buttonplayopacity0","buttonplay")
        buttonpause.classList.replace("buttonpause","buttonpauseopacity0")
    }
}
function skip10(){//Skip,Return Button
    mainvideo.currentTime += 10
}
function return10(){
    mainvideo.currentTime -= 10
}
function fullscreen(){//Fullscreen button
    if(document.fullscreenElement){
        fullscreenbtn.classList.replace("buttonfullscreen0","buttonfullscreen")
        fullscreenexitbtn.classList.replace("buttonfullscreenexit","buttonfullscreenexit0")
        mainvideo.classList.replace("videomax","video")
        return document.exitFullscreen()

    }
    else{
        fullscreenbtn.classList.replace("buttonfullscreen","buttonfullscreen0")
        fullscreenexitbtn.classList.replace("buttonfullscreenexit0","buttonfullscreenexit")
        videoplayer.requestFullscreen()
        mainvideo.classList.replace("video","videomax")
        document.exitFullscreen()
    }
} 
function pictureinpicture(){//Play on picture in picture
    mainvideo.requestPictureInPicture()
}
btnplaypause.addEventListener('click',playpause)
btnplaypause2.addEventListener('click',playpause)
btnreplay.addEventListener('click',return10)
btnforward.addEventListener('click',skip10)
playinpic.addEventListener('click',pictureinpicture)
fullsrc.addEventListener('click',fullscreen)
fullsrc2.addEventListener('click',fullscreen)



//Volume Button
const volumeonbtn = document.getElementById('volumeonbtn')
const volumeoffbtn = document.getElementById('volumeoffbtn')
function volumeonoff(){
    if(volumeon.classList.contains("volumeon")){
        volumeon.classList.replace("volumeon","volumeon0")
        volumeoff.classList.replace("volumeoff0","volumeoff")
        mainvideo.volume = 0
    }
    else{
        volumeon.classList.replace("volumeon0","volumeon")
        volumeoff.classList.replace("volumeoff","volumeoff0")
        mainvideo.volume=0.5;
        
    }
}
volumeonbtn.addEventListener('click',volumeonoff)
volumeoffbtn.addEventListener('click',volumeonoff)
//Volume Slide
volumeslide.addEventListener("input", e=>{
    mainvideo.volume = e.target.value
    if (e.target.value == 0){
        //change icon
        volumeon.classList.replace("volumeon","volumeon0")
        volumeoff.classList.replace("volumeoff0","volumeoff")
    }
    else{
        //change icon
        volumeon.classList.replace("volumeon0","volumeon")
        volumeoff.classList.replace("volumeoff","volumeoff0")
    }
})



//Appericate {Youtube : CodingNepal} <3 love u
const format = time => {
    //getting second minute hours
    let seconds = Math.floor(time%60),
    minute = Math.floor(time/60)%60,
    hours = Math.floor (time/3600);

    //adding 0 at the begining if particular value is less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minute = minute < 10 ? `0${minute}`:minute;
    hours = hours < 10 ? `0${hours}` :hours;  

    // if hours is 0 return minute & second only else return all
    if(hours == 0){
        return `${minute}:${seconds}`;
    }
    return `${hours}:${minute}:${seconds}`
}
const circle = document.querySelector('.circleprogress0')
//Time update and process bar
mainvideo.addEventListener("timeupdate",e=>{
    let { currentTime , duration } = e.target
    let percent = (currentTime / duration) * 100
    progressbar.style.width = `${percent}%`;
    circle.style.left = `${percent}%`
    timerun.innerText = format(currentTime);
})
mainvideo.addEventListener("loadeddata",e=>{
    timeall.innerText = format(e.target.duration)
})
//Click to change video time
process.addEventListener("click", e=>{
    let timeline = process.clientWidth
    mainvideo.currentTime = (e.offsetX / timeline) * mainvideo.duration
})



//Dragable video timeline
const draggableProcess = e =>{
    let timeline = process.clientWidth
    progressbar.style.width = `${e.offsetX}px`
    circle.style.left =  `${e.offsetX}px`
    mainvideo.currentTime = (e.offsetX / timeline) * mainvideo.duration
    timerun.innerText = format(mainvideo.currentTime);
}
process.addEventListener("mousedown", ()=>{
    process.addEventListener("mousemove",draggableProcess)
})
document.addEventListener("mouseup",()=>{
    process.removeEventListener("mousemove",draggableProcess)
})
process.addEventListener("mousemove" , e=>{
    const progressTime = document.querySelector(".timertrack")
    let offsetX =e.offsetX
    progressTime.style.left = `${offsetX}px`
    let timeline = process.clientWidth
    let percent = (e.offsetX / timeline) * mainvideo.duration
    progressTime.innerText = format(percent)
})



//Showhidetimer when mouse on the progressbar
const timer = document.querySelector(".timertrack0")
const processbarshowhide = document.getElementById('processbarshowhide')
function showtrack(){
    timer.classList.replace("timertrack0","timertrack") 
    circle.classList.replace("circleprogress0","circleprogress") 
}
function hidetrack(){
    timer.classList.replace("timertrack","timertrack0")  
    circle.classList.replace("circleprogress","circleprogress0") 
}
processbarshowhide.addEventListener('mouseover',showtrack)
processbarshowhide.addEventListener('mouseout',hidetrack)



//Toggle Speed Option Class
const btnspeed = document.getElementById('btnspeed')
const speedoption0 = document.querySelector(".speedoption0")
const spd08 = document.getElementById('spd08')
const spd1 = document.getElementById('spd1')
const spd125 = document.getElementById('spd125')
const spd15 = document.getElementById('spd15')
const spd175 = document.getElementById('spd175')
const spd2 = document.getElementById('spd2')
function speedoption(){
    speedoption0.classList.toggle("speedoption")
}
//speedfunction
function clicktochangespeed08(){
    mainvideo.playbackRate = 0.8
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn08 = document.querySelector(".sbtn08")

    if(speedoption.classList.contains("speed1")){
        const sbtn1 = document.querySelector(".sbtn1-select")
        sbtn1.classList.replace("sbtn1-select","sbtn1")
        const speed1 = document.querySelector(".speed1")
        speed1.classList.replace("speed1","speed08")
    }
    else if(speedoption.classList.contains("speed125")){
        const sbtn125 = document.querySelector(".sbtn125-select")
        sbtn125.classList.replace("sbtn125-select","sbtn125")
        const speed125 = document.querySelector(".speed125")
        speed125.classList.replace("speed125","speed08")
    }   
    else if(speedoption.classList.contains("speed15")){
        const sbtn15 = document.querySelector(".sbtn15-select")
        sbtn15.classList.replace("sbtn15-select","sbtn15")
        const speed15 = document.querySelector(".speed15")
        speed15.classList.replace("speed15","speed08")
    } 
    else if(speedoption.classList.contains("speed175")){
        const sbtn175 = document.querySelector(".sbtn175-select")
        sbtn175.classList.replace("sbtn175-select","sbtn175")
        const speed175 = document.querySelector(".speed175")
        speed175.classList.replace("speed175","speed08")
    }    
    else if(speedoption.classList.contains("speed2")){
        const sbtn2 = document.querySelector(".sbtn2-select")
        sbtn2.classList.replace("sbtn2-select","sbtn2")
        const speed2 = document.querySelector(".speed2")
        speed2.classList.replace("speed2","speed08")
    }    

    sbtn08.classList.replace("sbtn08","sbtn08-select")

}
function clicktochangespeed1(){
    
    mainvideo.playbackRate = 1
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn1 = document.querySelector(".sbtn1")

    if(speedoption.classList.contains("speed08")){
        const sbtn08 = document.querySelector(".sbtn08-select")
        sbtn08.classList.replace("sbtn08-select","sbtn08")
        const speed08 = document.querySelector(".speed08")
        speed08.classList.replace("speed08","speed1")
    }
    else if(speedoption.classList.contains("speed125")){
        const sbtn125 = document.querySelector(".sbtn125-select")
        sbtn125.classList.replace("sbtn125-select","sbtn125")
        const speed125 = document.querySelector(".speed125")
        speed125.classList.replace("speed125","speed1")
        
    }   
    else if(speedoption.classList.contains("speed15")){
        const sbtn15 = document.querySelector(".sbtn15-select")
        sbtn15.classList.replace("sbtn15-select","sbtn15")
        const speed15 = document.querySelector(".speed15")
        speed15.classList.replace("speed15","speed1")
    } 
    else if(speedoption.classList.contains("speed175")){
        const sbtn175 = document.querySelector(".sbtn175-select")
        sbtn175.classList.replace("sbtn175-select","sbtn175")
        const speed175 = document.querySelector(".speed175")
        speed175.classList.replace("speed175","speed1")
    }    
    else if(speedoption.classList.contains("speed2")){
        const sbtn2 = document.querySelector(".sbtn2-select")
        sbtn2.classList.replace("sbtn2-select","sbtn2")
        const speed2 = document.querySelector(".speed2")
        speed2.classList.replace("speed2","speed1")
    }    

    sbtn1.classList.replace("sbtn1","sbtn1-select")

}
function clicktochangespeed125(){
    
    mainvideo.playbackRate = 1.25
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn125 = document.querySelector(".sbtn125")

    if(speedoption.classList.contains("speed08")){
        const sbtn08 = document.querySelector(".sbtn08-select")
        sbtn08.classList.replace("sbtn08-select","sbtn08")
        const speed08 = document.querySelector(".speed08")
        speed08.classList.replace("speed08","speed125")
    }
    else if(speedoption.classList.contains("speed1")){
        const sbtn1 = document.querySelector(".sbtn1-select")
        sbtn1.classList.replace("sbtn1-select","sbtn1")
        const speed1 = document.querySelector(".speed1")
        speed1.classList.replace("speed1","speed125")
        
    }   
    else if(speedoption.classList.contains("speed15")){
        const sbtn15 = document.querySelector(".sbtn15-select")
        sbtn15.classList.replace("sbtn15-select","sbtn15")
        const speed15 = document.querySelector(".speed15")
        speed15.classList.replace("speed15","speed125")
    } 
    else if(speedoption.classList.contains("speed175")){
        const sbtn175 = document.querySelector(".sbtn175-select")
        sbtn175.classList.replace("sbtn175-select","sbtn175")
        const speed175 = document.querySelector(".speed175")
        speed175.classList.replace("speed175","speed125")
    }    
    else if(speedoption.classList.contains("speed2")){
        const sbtn2 = document.querySelector(".sbtn2-select")
        sbtn2.classList.replace("sbtn2-select","sbtn2")
        const speed2 = document.querySelector(".speed2")
        speed2.classList.replace("speed2","speed125")
    }    

    sbtn125.classList.replace("sbtn125","sbtn125-select")

}
function clicktochangespeed15(){
    
    mainvideo.playbackRate = 1.5
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn15 = document.querySelector(".sbtn15")

    if(speedoption.classList.contains("speed08")){
        const sbtn08 = document.querySelector(".sbtn08-select")
        sbtn08.classList.replace("sbtn08-select","sbtn08")
        const speed08 = document.querySelector(".speed08")
        speed08.classList.replace("speed08","speed15")
    }
    else if(speedoption.classList.contains("speed1")){
        const sbtn1 = document.querySelector(".sbtn1-select")
        sbtn1.classList.replace("sbtn1-select","sbtn1")
        const speed1 = document.querySelector(".speed1")
        speed1.classList.replace("speed1","speed15")
        
    }   
    else if(speedoption.classList.contains("speed125")){
        const sbtn125 = document.querySelector(".sbtn125-select")
        sbtn125.classList.replace("sbtn125-select","sbtn125")
        const speed125 = document.querySelector(".speed125")
        speed125.classList.replace("speed125","speed15")
    } 
    else if(speedoption.classList.contains("speed175")){
        const sbtn175 = document.querySelector(".sbtn175-select")
        sbtn175.classList.replace("sbtn175-select","sbtn175")
        const speed175 = document.querySelector(".speed175")
        speed175.classList.replace("speed175","speed15")
    }    
    else if(speedoption.classList.contains("speed2")){
        const sbtn2 = document.querySelector(".sbtn2-select")
        sbtn2.classList.replace("sbtn2-select","sbtn2")
        const speed2 = document.querySelector(".speed2")
        speed2.classList.replace("speed2","speed15")
    }    

    sbtn15.classList.replace("sbtn15","sbtn15-select")

}
function clicktochangespeed175(){
    
    mainvideo.playbackRate = 1.75
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn175 = document.querySelector(".sbtn175")

    if(speedoption.classList.contains("speed08")){
        const sbtn08 = document.querySelector(".sbtn08-select")
        sbtn08.classList.replace("sbtn08-select","sbtn08")
        const speed08 = document.querySelector(".speed08")
        speed08.classList.replace("speed08","speed175")
    }
    else if(speedoption.classList.contains("speed1")){
        const sbtn1 = document.querySelector(".sbtn1-select")
        sbtn1.classList.replace("sbtn1-select","sbtn1")
        const speed1 = document.querySelector(".speed1")
        speed1.classList.replace("speed1","speed175")
        
    }   
    else if(speedoption.classList.contains("speed125")){
        const sbtn125 = document.querySelector(".sbtn125-select")
        sbtn125.classList.replace("sbtn125-select","sbtn125")
        const speed125 = document.querySelector(".speed125")
        speed125.classList.replace("speed125","speed175")
    } 
    else if(speedoption.classList.contains("speed15")){
        const sbtn15 = document.querySelector(".sbtn15-select")
        sbtn15.classList.replace("sbtn15-select","sbtn15")
        const speed15 = document.querySelector(".speed15")
        speed15.classList.replace("speed15","speed175")
    }    
    else if(speedoption.classList.contains("speed2")){
        const sbtn2 = document.querySelector(".sbtn2-select")
        sbtn2.classList.replace("sbtn2-select","sbtn2")
        const speed2 = document.querySelector(".speed2")
        speed2.classList.replace("speed2","speed175")
    }    

    sbtn175.classList.replace("sbtn175","sbtn175-select")

}
function clicktochangespeed2(){
    
    mainvideo.playbackRate = 2
    const speedoption = document.querySelector("#speedoptionid")
    const sbtn2 = document.querySelector(".sbtn2")

    if(speedoption.classList.contains("speed08")){
        const sbtn08 = document.querySelector(".sbtn08-select")
        sbtn08.classList.replace("sbtn08-select","sbtn08")
        const speed08 = document.querySelector(".speed08")
        speed08.classList.replace("speed08","speed2")
    }
    else if(speedoption.classList.contains("speed1")){
        const sbtn1 = document.querySelector(".sbtn1-select")
        sbtn1.classList.replace("sbtn1-select","sbtn1")
        const speed1 = document.querySelector(".speed1")
        speed1.classList.replace("speed1","speed2")
        
    }   
    else if(speedoption.classList.contains("speed125")){
        const sbtn125 = document.querySelector(".sbtn125-select")
        sbtn125.classList.replace("sbtn125-select","sbtn125")
        const speed125 = document.querySelector(".speed125")
        speed125.classList.replace("speed125","speed2")
    } 
    else if(speedoption.classList.contains("speed15")){
        const sbtn15 = document.querySelector(".sbtn15-select")
        sbtn15.classList.replace("sbtn15-select","sbtn15")
        const speed15 = document.querySelector(".speed15")
        speed15.classList.replace("speed15","speed2")
    }    
    else if(speedoption.classList.contains("speed175")){
        const sbtn175 = document.querySelector(".sbtn175-select")
        sbtn175.classList.replace("sbtn175-select","sbtn175")
        const speed175 = document.querySelector(".speed175")
        speed175.classList.replace("speed175","speed2")
    } 

    sbtn2.classList.replace("sbtn2","sbtn2-select")

}
btnspeed.addEventListener('click',speedoption)
spd08.addEventListener('click',clicktochangespeed08)
spd1.addEventListener('click',clicktochangespeed1)
spd125.addEventListener('click',clicktochangespeed125)
spd15.addEventListener('click',clicktochangespeed15)
spd175.addEventListener('click',clicktochangespeed175)
spd2.addEventListener('click',clicktochangespeed2)



// const wrapper = document.querySelector(".wrappershow")
// const hidecontrol = ()=>{
//     if(mainvideo.paused) return
//     timer = setTimeout(()=>{
//         wrapper.classList.remove("wrappershow")
//         wrapper.classList.add("wrapper")
//     },5000)
// }


// mainvideo.addEventListener("mousemove",()=>{
//     wrapper.classList.remove("wrapper")
//     wrapper.classList.add("wrappershow")
//     clearTimeout(timer);
//     hidecontrol()
// })


//   ╱|、
//  (˚ˎ 。7  
//   |、˜〵          
//   じしˍ,)ノ
//pakorn love jiratimaporn



