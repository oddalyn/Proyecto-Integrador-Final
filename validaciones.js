
//Validaciones 



function validaciones() {
    console.log("dsazd")
    let status = true;
  
    let nombre = document.getElementById('name')
    let apellido = document.getElementById('apellido')
    let mail = document.getElementById('mail')
    let tel = document.getElementById('tel')
    let consulta = document.getElementById('consulta')
    
    
    if(nombre.value == '' || apellido.value == '' || mail.value == '' || tel.value == '' || consulta.value == ''){
        console.log("asd llega")
      status= false;
      alert("Se requiere que ingrese los datos correctamente")
    }
  
    return status 
  
  }
  