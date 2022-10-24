const form = document.getElementById('form-enviar');
const nomeCompleto = document.getElementById('nome-interessado');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function validaSenha(Senha) {
    const senhaComoArray = senha.split(' ');
    return senhaComoArray.length >= 1;
}

function validaidade(idade) {
    const idadeComoArray = idade.split(' ');
    return idadeComoArray.length >= 1;
}

form.addEventListener('submit', function(e) {
     e.preventDefault();

    const senha = document.getElementById('numero-senha');
    const idade = document.getElementById('numero-idade');
    const mensagemSucesso = `Numero da idade: <b>${idade.value}</b> enviado por: <b>${nomeCompleto.value}</b> - Senha: <b>${senha.value}</b>`;
    
    formEValido = validaNome(nomeCompleto.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
 
        nomeCompleto.value = '';
        senha.value = '';
        idade.value = '';

    } else {
        nomeCompleto.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeCompleto.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeCompleto.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeCompleto.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

    if(campoidade > camposenha){
        console.log("idade é maior que senha");
     }else {
         console.log("senha é maior que idade");
         console.log("os dois são iguais");
     }
});

