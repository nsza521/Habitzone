const addsuccess = document.querySelector('#asc')
const addsuccess2 = document.querySelector('#asc2')

function deleteclass(){
    addsuccess.classList.remove('addsuccess')
    addsuccess.classList.add('addsuccess2')
    addsuccess2.classList.remove('overlayaddsuccess')
    addsuccess2.classList.add('overlayaddsuccess2')
}
function addclass(){
    addsuccess.classList.remove('overlayaddsuccess')
    addsuccess.classList.add('overlayaddsuccess')
    addsuccess2.classList.remove('overlayaddsuccess')
    addsuccess2.classList.add('overlayaddsuccess2')
}

addsuccess.addEventListener('click',deleteclass)
addsuccess2.addEventListener('click',deleteclass)