//criando/declarando a função tocasom com parâmetro idElementoAudio
function tocasom( idElementoAudio ) {
    document.querySelector( idElementoAudio).play() ;
}
//criando a referência constante listadeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');
//criando referência variável contador, atribuindo o valor inicial como "0"

//criando o código de repetição Wile
//enquanto o contador for menos que o comprimento da lista, tocará o som.
for(let contador= 0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama a classe do indice 1 do
    const idAudio = `#som_${efeito}`; //junção com template string
    tecla.onclik = function(){ //função anônima para tocasom
    |   tocasom(idAudio);
    }

