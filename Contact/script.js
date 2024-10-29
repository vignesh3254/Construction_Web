const home=document.querySelectorAll('a');


home[1].addEventListener("click",(e)=>{
    home[0].classList.remove('home')
    home[1].classList.add('home')
})

home[2].addEventListener("click",(e)=>{
    home[1].classList.remove('home')
    home[2].classList.add('home')
})

home[3].addEventListener("click",(e)=>{
    home[2].classList.remove('home')
    home[3].classList.add('home')
})

