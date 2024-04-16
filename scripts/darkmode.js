const body = document.querySelector('body');
const darkmodeBt = document.querySelector('#darkmode-bt')
const icone = document.querySelector('.darkmode__label')

darkmodeBt.addEventListener('click',() => {
    if(body.classList.contains('darkmode')){
        body.classList.remove('darkmode')
        body.classList.add('lightmode')
        localStorage.clear()
        localStorage.setItem('tipo','lightmode')
        icone.innerHTML = '<i class="fa-solid fa-moon  fa-2xl"></i>'
    }else{
        body.classList.remove('lightmode')
        body.classList.add('darkmode')
        localStorage.clear()
        localStorage.setItem('tipo' ,'darkmode')
        icone.innerHTML = '<i class="fa-solid fa-sun fa-2xl"></i>'
    }
})


if(localStorage.getItem('tipo')==='lightmode'){
    body.classList.remove('darkmode')
    body.classList.add('lightmode')
    icone.innerHTML = '<i class="fa-solid fa-moon  fa-2xl"></i>'


}else if (localStorage.getItem('tipo')==='darkmode'){
    body.classList.remove('lightmode')
    body.classList.add('darkmode')
    icone.innerHTML = '<i class="fa-solid fa-sun fa-2xl"></i>'
}

