// Получаем элементы разметки
const player1Input = document.querySelector('.player1 .player-name');
const player1StartBtn = document.querySelector('.player1 .startBtn');

const player2Input = document.querySelector('.player2 .player-name');
const player2StartBtn = document.querySelector('.player2 .startBtn');

const buttons = document.querySelectorAll(".buttons");

const text = document.querySelector(".subTitle");

const gameCells = document.querySelectorAll('.cell');

const restartBtn = document.querySelector('.restartBtn');

// переменные
let currentPlayer = "X";
let nextPlayer = "0";
let playerTurn = currentPlayer;
let winnerName = "";

// обновляем содержимое subTitle
const updateTitle = (msg) => {
    text.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 }); // анимация появления
    text.textContent = msg;
    text.classList.add("animate"); // добавляем класс с анимацией
};

// обработчик события для кнопки "start" 1 игрока
player1StartBtn.addEventListener('click', function() {
    const player1Name = player1Input.value.toUpperCase();
    const player2Name = player2Input.value.toUpperCase();

    if (player1Name && player2Name) {
        updateTitle(player1Name + " starts the game with X");
        currentPlayer = 'X';
        nextPlayer = '0';
        playerTurn = currentPlayer;
    } else {
        updateTitle('enter names for both players');
    }
});

// Обработчик события для кнопки "start" 2 игрока
player2StartBtn.addEventListener('click', function() {
    const player1Name = player1Input.value.toUpperCase();
    const player2Name = player2Input.value.toUpperCase();

    if (player1Name && player2Name) {
        updateTitle(player2Name + " starts the game with X");
        currentPlayer = 'X';
        nextPlayer = '0';
        playerTurn = currentPlayer;
    } else {
        updateTitle('enter names for both players');
    }
});

// обработчик события клика на каждую кнопку
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    
    // удаляем класс 'active' у всех кнопок
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
        btn.classList.add('inactive');
    });
    
    // добавляем класс 'active' к нажатой кнопке
    button.classList.add('active');
    button.classList.remove('inactive');
    });
});

// начало игры
const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (player1Input.value && player2Input.value) {
                if (e.target.textContent === "") {
                    e.target.textContent = playerTurn;
                    
                    if (checkWin()) {
                        const winnerName = playerTurn === "X" ? player1Input.value : player2Input.value;
                        updateTitle(`${winnerName} is a winner!`);
                        }
                        changePlayerTurn();
                    }
                } else {
                updateTitle("enter names for both players");
            }
        });
    });
};

// переключение между игроками
const changePlayerTurn = () => {
    // if(playerTurn === currentPlayer) {
    //     playerTurn = nextPlayer;
    // }else{
    //     playerTurn = currentPlayer;
    // }

    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};

// check win
const checkWin = () => {
    const winningConditions = 
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], 
            [0, 4, 8],
            [2, 4, 6], 
        ];
    for (let i = 0; i < winningConditions.length; i++) {
        const [pos1, pos2, pos3] = winningConditions[i];

        if (gameCells[pos1].textContent !== '' &&    
            gameCells[pos1].textContent === gameCells[pos2].textContent && 
            gameCells[pos2].textContent === gameCells[pos3].textContent) {
                return true;
        }
    }
    return false;
};

startGame();