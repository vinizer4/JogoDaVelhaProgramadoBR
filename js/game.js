// init variables

// Array board são as posicões do tabuleirio
let board = ['','','','','','','','',''];
// Player Time é a rodada
let playerTime = 0;
// Let symbols são os simbolos
let symbols = ["o","x"];
// Declaramos a variavel gameOver como false,, para mudarmos para true quando o jogo acabar
let gameOver = false;


// Esse função recebe como parametro a posição que foi capturada na função handleClick
function handleMove(position) {

    // Verificamos se gameOver é igual a false, se gameOver for igual a true vamos retornala nesse trecho impedindo o inicio do jogo
    if(gameOver) {
        return;
    }

    // Verificamos se o board possition está vazio para executarmos, se ele não estiver vazio não faremos nada pois significa que esse campo já foi preenchido pelo jogador
    if(board[position] == ''){

        // Vamos pegar o array board e passar a posição que recebemos como parametro da função handleClick como index do array
        // Depois de definido o index vamos colocar o simbolo do jogador da vez nesse index
        board[position] = symbols[playerTime]

        // chamamos a variavel gameOver que executara a função IsWin(), que retornada false ou true conforme a lógica dela
        gameOver = isWin();

        // Só vamos trocar de jogador se o gameOver for igual a false
        if(gameOver == false) {       
        
        // Essa é logica de para trocar a vez do jogador alternando entre 0 e 1
        playerTime = ( playerTime == 0 ) ? 1 : 0;

        }   

    }

    return gameOver;
}


// Vamos criar a função que definira a lógica papra decidir o vencedor da rodada
function isWin() {

    // Nessa variavel vamos definir quais sequencias dão a vitoria para o jogador armazenando dentro de um array outros arrays com as sequencias de vitoria
    let winStates = [
        [0,1,2], // Sequencia vitoria horizontal
        [3,4,5], // Sequencia vitoria horizontal
        [6,7,8], // Sequencia vitoria horizontal
        [0,3,6], // Sequencia vitoria vertical
        [1,4,7], // Sequencia vitoria vertical
        [2,5,8], // Sequencia vitoria vertical
        [0,4,8], // Sequencia vitoria diagonal
        [2,4,6], // Sequencia vitoria diagonal
    ]

    // Agora vamos dar um for nessa sequencia de vitorias e verificar se elas são iguais as posiçõoes armazenadas na variavel board

    // Nesse for atribuimos a variavel let i, i que significa o nosso index e vamos executar ele enquando for menor que o array winStates ao final de cada for vamos adicionar uma posição ao index i
    for(let i = 0; i < winStates.length; i++) {

        // Cada vez que for executado um for vamos armazenar uma sequencia de vitoria na variavel seq, armazenando nela a sequencia que está no index i do array winStates
        // Resumindo sé i do nosso for ser igual a 0, iremos armazenar o winStates index 0 na variaval seq
        let seq = winStates[i];

        // Quando seq for igual ao winStates[0] = [0,1,2], vamos armazenar nessa let pos1, e respectivamente para as outras posições
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        // Aqui estamos verificando se os elementos armazenados são iguais e se são diferentes de vazio, pois como sabemos seão armazenados conforme o jogador x ou o
        if(board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && board[pos1] != ''){

                return true;

            }
    }

    return false;

}
