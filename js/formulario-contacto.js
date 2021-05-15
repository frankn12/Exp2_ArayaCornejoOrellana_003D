

function CambiarMayusculasNom()
{
    var a = document.getElementById("nom");
    a.value = a.value.toUpperCase();
}

function CambiarMayusculasAsunto()
{
    var a = document.getElementById("asun");
    a.value = a.value.toUpperCase();
}

function CambiarMayusculasCorreo()
{
    var a = document.getElementById("corr");
    a.value = a.value.toUpperCase();
}




document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('mi_formulario2').addEventListener('submit', 
  manejadorValidacion)
  });
  
  function manejadorValidacion(e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    msg.innerText = '';

    if(this.querySelector('[name=nombre]').value == '') {
    console.log('El nombre está vacío');
    msg.innerText = 'Debes escribir un nombre';
    return;
    }

    if(! validateNombre(this.querySelector('[name=nombre]').value)) 
        { console.log('El nombre no es válido');
        msg.innerText = 'Debes escribir un nombre válido'; 
        return;
    }

    if(this.querySelector('[name=email]').value == '') {
        console.log('El email está vacío');
        msg.innerText = 'Debes escribir un correo';
        return;
        }

    if(! validateEmail(this.querySelector('[name=email]').value)) 
        { console.log('El email no es válido');
        msg.innerText = 'Debes escribir un email válido'; 
        return;
    }

    if(this.querySelector('[name=fono]').value == '') {
        console.log('El teléfono está vacío');
        msg.innerText = 'Debes escribir un número de teléfono';
        return;
        }

    if(! validateFono(this.querySelector('[name=fono]').value)) 
        { console.log('El número ingresado no es válido');
        msg.innerText = 'Debes escribir un número de teléfono válido de minímo 9 dígitos'; 
        return;
    }
    
    
    if(this.querySelector('[name=asunto]').value == '') {
        console.log('El asunto está vacío');
        msg.innerText = 'Debes escribir un asunto';
        return;
    }

    if(this.querySelector('[name=mensaje]').value == '') {
        console.log('El mensaje está vacío');
        msg.innerText = 'Debes escribir un mensaje';
        return;
    }
    this.submit();
  }
  
  function validateEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test((email).toLowerCase());
   }

   function validateNombre(nombre) {
    var nom = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    return nom.test((nombre));
   }

   function validateFono(fono) {
    var fo = /^\d{9,14}$/;
    return fo.test((fono));
   }



