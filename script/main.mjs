// объявляем переменные

let currentPlayer;
let player1;
let player2;
let cells;
let gameEnded = false;

// начало игры и обработчики событий для ячеек

function startGame() {
    player1 = document.querySelector(".player1 .player-name").value;
    player2 = document.querySelector(".player2 .player-name").value;

    currentPlayer = player1;

    document.querySelector(".player1 .startBtn").innerHTML = "X";
    document.querySelector(".player2 .startBtn").innerHTML = "0";

    cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", cellClicked);
    });
}

// Вызовите функцию startGame после нажатия кнопки "start" каждого игрока
document.querySelector('.player1 .startBtn').addEventListener('click', startGame);
document.querySelector('.player2 .startBtn').addEventListener('click', startGame);

// Создайте функцию cellClicked, которая будет вызываться при клике на ячейку игрового поля. Функция будет проверять, есть ли уже знак в ячейке и если нет, то помещать знак текущего игрока и проверять, закончилась ли игра.

function cellClicked(event) {
    const cell = event.target;

    if (cell.innerHTML === '-' && !gameEnded) {
        // Помещение знака текущего игрока в ячейку
        cell.innerHTML = currentPlayer;
        
        // Проверка окончания игры
        if (checkWin(currentPlayer)) {
        endGame(currentPlayer);
        } else if (checkDraw()) {
        endGame('draw');
        } else {
        // Переключение игрока
        currentPlayer = (currentPlayer === player1 ? player2 : player1);
        }
    }
}

// Создайте функцию checkWin, которая будет проверять, выиграл ли игрок. Функция должна проверять все возможные комбинации для выигрыша и возвращать true, если одна из комбинаций совпадает.

function checkWin(player) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные комбинации
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные комбинации
        [0, 4, 8], [2, 4, 6] // диагональные комбинации
    ];

    return winCombinations.some(combination => {
        const cell1 = cells[combination[0]].innerHTML;
        const cell2 = cells[combination[1]].innerHTML;
        const cell3 = cells[combination[2]].innerHTML;
        
        return (cell1 === player && cell2 === player && cell3 === player);
    });
}

// Создайте функцию checkDraw, которая будет проверять, закончилась ли игра вничью. Функция должна возвращать true, если все ячейки заполнены и никто не выиграл.

function checkDraw() {
    return Array.from(cells).every(cell => cell.innerHTML !== '-');
}

// Создайте функцию endGame, которая будет вызываться, когда игра закончена. Функция будет выводить сообщение о победе определенного игрока или о ничьей.

function endGame(result) {
    gameEnded = true;
    
    let message = '';
    
    if (result === 'draw') {
        message = 'It\'s a draw!';
    } else {
        message = `Congrats! ${result} won!`;
    }
    
    const winnerElement = document.querySelector('.congrat .winner');
    winnerElement.innerHTML = result;
    
    document.querySelector('.congrat').style.display = 'block';
    document.querySelector('.restartBtn').style.display = 'block';
    
    // Удаление обработчиков событий для ячеек поля
    cells.forEach(cell => {
        cell.removeEventListener('click', cellClicked);
    });
}
