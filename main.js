const form = document.getElementById('form-enviar');

let formEValido = false;

function validaCampoA(campoA,campoB) {
  
    if (campoB > campoA) {return campoA}
    else {return campoB}
    
  }
  
form.addEventListener('submit', function(e) {
     e.preventDefault();
     const CampoA = document.getElementById('campo-A');
     const CampoB = document.getElementById('campo-B');
     const mensagemSucesso = `Campo B: <b>${CampoB.value}</b> é maior que o campo A: <b>${CampoA.value}</b>`;
    
     formEValido = validaCampoA (CampoA.value)

    if (CampoA.value < CampoB.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    } else {
        CampoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})

    campoA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaCampoA(e.target.value);

    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    };
});
