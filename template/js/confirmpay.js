function pricecal(){
    const price = document.querySelectorAll('#cal')
    const priceall =document.querySelector('#calall')
    let sum = 0
    for(let i = 0;i<price.length;i++){
        sum += parseInt(price[i].innerText)
    }
    const text = `฿ ${sum}.00`
    priceall.innerText = text
}
pricecal()