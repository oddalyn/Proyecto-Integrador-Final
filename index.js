
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

// var myModal = new bootstrap.Modal(document.getElementById('modal'), options)
// myModal.toggle()
// myModal.show();

// var myModal = document.getElementById('modal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


