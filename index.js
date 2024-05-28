
let title = document.getElementById("title-nebula")
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
     luna.style.right = value  * 2.5  + 'px' 
    // onda.style.left = value * 1.2  + 'px' 
})

// let divs  = document.getElementsByClassName()
// window.onscroll = () => {
  
//     divs.forEach(sec => {
      
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 180;
//         let height = sec.offsetHeight;

//         console.log(top)
//         console.log(offset)
//         if(top > offset && top < offset + height){
//             sec.classList.add('show-animate')
//         }else{
//             sec.classList.remove('show-animate')
//         }
  
        
//     })
// }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



