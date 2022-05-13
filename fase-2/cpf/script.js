console.log('Carregou o arquivo');

function validaCPF(cpf) {
    console.log(cpf.length);
    if(cpf.length !== 11) {
        return false;
    } else {
        var numeros = cpf.substring(0,9);
        
        return true;
    }
}

function validacao() {
    console.log('iniciando validacao cpf');
    var cpf = document.getElementById('cpf_digitado').value

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}
