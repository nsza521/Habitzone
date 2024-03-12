function openbasket(){
    const cartout = document.querySelector(".cartout")
    const cartleftnoactive = document.querySelector(".cartleftnoactive")
    cartout.classList.toggle("cartoutactive")
    cartleftnoactive.classList.toggle("cartleft")
}
function pricecal(){
    const price = document.querySelectorAll('.price')
    const priceall = document.getElementById('priceall')
    let sum = 0
    for(let i = 0;i<price.length;i++){
        sum += parseInt(price[i].innerText)
    }
    const text = `฿ ${sum}.00`
    priceall.innerText = text
}
const btnopenbasket = document.getElementById('btnopenbasket')
const closebtncart = document.querySelector('.closebtncart')
btnopenbasket.addEventListener('click',openbasket)
closebtncart.addEventListener('click',openbasket)
btnopenbasket.addEventListener('click',pricecal)
