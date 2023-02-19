const url = 'https://viacep.com.br/ws/66620590/json/';

const consultaCep = fetch(url)
.then(response => response.json())
.then(data => {
    if(data.erro){
        throw Error('Esse CEP não existe!');
    }else{
        console.log(data)
    }
 })
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'));

//console.log(consultaCep);
