"use strict";//força uso da versão 5 do javascript

//pesquisa o cep digitado na tela html
function PesquisaCep() {
    let dados = document.getElementById("cep").value.replace("-","");
    ColetarCep(dados);
}

//Busca pelo cep na API da VIACEP e retorna no formato objeto json.
async function ColetarCep(dados) {
    //Biblioteca fetch é usada para buscar a API ou WebService e armazenar como objeto.
    const cep = await fetch(`https://viacep.com.br/ws/${dados}/json/`).then(
        (Response) => Response.json()
    );
    DadosTela(cep);
}

//Envia os dados retornado para a tela html.
function DadosTela(cep) {
    console.log(cep);
    document.getElementById("logradouro").value = cep.logradouro;
    document.getElementById("bairro").value = cep.bairro;
    document.getElementById("localidade").value = cep.localidade;
    document.getElementById("uf").value = cep.uf;
}
