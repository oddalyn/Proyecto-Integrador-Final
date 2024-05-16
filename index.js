
let title = document.getElementById("title")
let nubes = document.getElementById("nubes")
let montania = document.getElementById("montania")
let onda = document.getElementById("onda")
let luna = document.getElementById("luna")

window.addEventListener('scroll', ()=>{
    let value = window.scrollY; 

    title.style.marginTop = value  * 3.5  + 'px' 
    nubes.style.top = value  * -1.5  + 'px' 
    //  montania.style.top = value  * 1  + 'px' 
     luna.style.top = value  * -2.5  + 'px' 
     luna.style.left = value  * 2.5  + 'px' 
    // onda.style.left = value * 1.2  + 'px' 
})

let divs  = document.querySelectorAll('section')
window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 180;
        let height = sec.offsetHeight;

        if(top > offset && top < offset + height){
            sec.classList.add('show-animate')
        }else{
            sec.classList.remove('show-animate')
        }
    })
}


