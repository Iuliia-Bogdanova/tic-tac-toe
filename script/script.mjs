// получаем элементы разметки

const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('player1');
const player2 = document.querySelector("player2");
const restartBtn = document.querySelector("restartBtn");

// создаем переменные

let currentPlayer = 'X';
let nextPlayer = '0';
let playerTurn = currentPlayer;

// начало игры

const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            console.log(e.target);
        });
    });
}

startGame();
