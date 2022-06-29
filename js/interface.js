// // DOMContentLoaded
// O evento DOMContentLoaded é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento. Um evento muito diferente - load - deve ser usado apenas para detectar uma página completamente carregada. É um engano comum as pessoas usarem load quando DOMContentLoaded seria muito mais apropriado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecionamos todos os square com document.querySelectorAll e armazenamos na let squares
    let squares = document.querySelectorAll(".square");


    // Utilizamos o forEach na let squares para percorrer o array 
    // O método forEach() executa uma dada função em cada elemento de um array.

    squares.forEach((square) => {
        // adicionaremos o addEventListener para escutar o evento de click, quando o evento ocorrer executaremos a função handleClick
        square.addEventListener('click', handleClick);
    })
});

// Criamos a função handleClick que sera executada quando ouver um click
function handleClick(event){

    // aqui temos o target que é o elemento que recebeu o evento, vamos colocalo dentro de square
    let square = event.target;
    // vamos pegar o id dele e chamar de posicão
    let position = square.id;


    // vamos passar para a função handleMove o id do campo que foi clicado, que foi armazenado na let position
    // Vamos executar a função handleMove que vai pegar a posição que a gente passou, vai pegar no board a posição e colocar o simbolo do jogador da vez
    if(handleMove(position)){

        setTimeout(() => {
            alert("O jogo Acabou! 🛑 - O vencedor foi o player: " + playerTime + " 🏆")
        }, 10)
        
    }
    // Executamos a function updateSquares que será reponsável de inserir a div no nosso HTML
    updateSquares();

}

// Essa é a função responsavel por inserir os simbolos nos tabuleiros
function updateSquares(){

    // Selecionamos novamente todos os squares com document.querySelectorAll
    let squares = document.querySelectorAll(".square");

    // Vazemos uma varredura na let squares executando uma arrow function (square) => {}
    squares.forEach((square) => {

        // Armazenamos a posição na let position pegando o square.id do tabuleiro
        let position = square.id;

        // Pegamos o simbolo que foi inserido no nosso board e armazenamos na let symbols
        let symbol = board[position];

        // Verificamos sé o symbolo está vazio
        if (symbol != ''){
        // Se o symbol for diferente de vazio inserimos a div com innerHTML passando como classe o valor de symbol que pode ser x ou o dependendo da vez do jogador
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

// function updateSquare(position) {

//     let square = document.getElementById(position.toString());
//     let symbol = board[position];

//     square.innerHTML = `<div class='${symbol}'></div>`
// }
