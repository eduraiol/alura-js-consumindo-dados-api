let logradouro = document.getElementById('endereco');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

let mensagemErro = document.getElementById('erro');
mensagemErro.innerHTML = "";

async function buscaEndereco(cep) {

    try{
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const consultaCep = await fetch(url);
        const consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error('CEP não existente!');
        }

        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;
        //console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }catch(erro){
        limpaCampos();
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente </p>`
        //console.log(erro);
    }

}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function limpaCampos(){
    logradouro.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
}


// let ceps = ['66635902', '66620590', '66080007'];
// let conjuntoCeps = ceps.map(valor => buscaEndereco(valor));
// Promise.all(conjuntoCeps)
//     .then(respostas => console.log(respostas));
