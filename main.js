const form = document.getElementById('form-enviar');

let formEValido = false;

function validaCampoA(campoA) {
    const campoAComoArray = campoA.split(' ');
    return campoAComoArray.length >campoA ;
}

function validaCampoB(campoB) {
    const campoBComoArray = campoB.split(' ');
    return campoBComoArray.length  <campoB ;
}

form.addEventListener('submit', function(e) {
     e.preventDefault();
     const CampoA = document.getElementById('campo-A');
     const CampoB = document.getElementById('campo-B');
     const mensagemSucesso = `Campo B: <b>${CampoB.value}</b> é maior que o campo A: <b>${CampoA.value}</b>`;
    
    formEValido = validaCampoA (CampoA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

 
        CampoA.value = '';
        CampoB.value = '';

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
