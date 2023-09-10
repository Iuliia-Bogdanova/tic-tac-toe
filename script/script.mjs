import { player1Input } from "./vars.mjs";
import { player1StartBtn } from "./vars.mjs";
import { player2Input } from "./vars.mjs";
import { player2StartBtn } from "./vars.mjs";
import { buttons } from "./vars.mjs";
import { text } from "./vars.mjs";
import { gameCells } from "./vars.mjs";
import { restartBtn } from "./vars.mjs";
  
let currentPlayer = "X";
let nextPlayer = "0";
let playerTurn = currentPlayer;
let winnerName = "";
const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// обновляем содержимое subTitle
const updateTitle = (msg) => {
  text.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
  text.textContent = msg;
  text.classList.add("animate");
};

// записываем значения полей ввода в формате toUpperCase
document.querySelectorAll(".player-name").forEach(function (player) {
    player.addEventListener("input", function () {
        this.value = this.value.toUpperCase();
    });
});

// проверяем заполненность полей ввода
const checkInputs = () => {
  
  if (!player1Input.value || !player2Input.value) {
    updateTitle("enter names for both players");
    return false;
  }
  return true;
};

// слушаем события для кнопки "start" 1 игрока
player1StartBtn.addEventListener("click", function () {
  const player1Name = player1Input.value.toUpperCase();
  const player2Name = player2Input.value.toUpperCase();

  if (player1Name && player2Name) {
    updateTitle(player1Name + " starts the game with X");
    currentPlayer = "X";
    nextPlayer = "0";
    playerTurn = currentPlayer;
  } else {
    updateTitle("enter names for both players");
  }
});

// слушаем события для кнопки "start" 2 игрока
player2StartBtn.addEventListener("click", function () {
  const player1Name = player1Input.value.toUpperCase();
  const player2Name = player2Input.value.toUpperCase();

  if (player1Name && player2Name) {
    updateTitle(player2Name + " starts the game with X");
    currentPlayer = "X";
    nextPlayer = "0";
    playerTurn = currentPlayer;
  } else {
    updateTitle("enter names for both players");
  }
});

// слушаем события клика на каждую кнопку
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // удаляем класс 'active' у всех кнопок
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
      btn.classList.add("inactive");
    });
    // добавляем класс 'active' к нажатой кнопке
    button.classList.add("active");
    button.classList.remove("inactive");
  });
});

// начинаем игру
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
};

// обновляем содержимое ячейки - вместо e.target.textContent = playerTurn;
const updateCellContent = (cell) => {
  cell.textContent = playerTurn;
};

// обрабатываем клики
const handleClick = (e) => {
  if (player1Input.value && player2Input.value) {
    if (e.target.textContent === "") {
      // e.target.textContent = playerTurn;
      updateCellContent(e.target);

      if (checkWin()) {
        winnerName =
          playerTurn === "X" ? player1Input.value : player2Input.value;
        updateTitle(`${winnerName} is a winner!`);
        disableCells();
      } else if (checkDraw()) {
        updateTitle('drawn game!');
        disableCells();
      } else {
        changePlayerTurn();
      }
    }
  } else {
    updateTitle("enter names for both players");
  }
};

// переключаемся между игроками
const changePlayerTurn = () => {
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};

// проверяем победителя
const checkWin = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3] = winningConditions[i];

    if (
      gameCells[pos1].textContent !== "" &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};

// проверяем ничью
const checkDraw = () => {
  let emptyCellsCount = 0;
  gameCells.forEach((cell) => {
    if (cell.textContent === "") {
      emptyCellsCount++;
    }
  });

  return emptyCellsCount === 0 && !checkWin();
};

// отключаем ячейки поля
const disableCells = () => {
  gameCells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.classList.add(".disabled");
  });
};

// сбрасываем игру
const resetGame = () => {
  // очищаем игровое поле
  gameCells.forEach((cell) => {
    cell.textContent = "";
  });
  // делаем игровое поле снова активным
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
  // обновляем содержимое subTitle
  updateTitle("press the start button");
  // удаляем класс 'active' у всех кнопок
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
    btn.classList.add("inactive");
  });
};

// слушаем события для кнопки "restart"
restartBtn.addEventListener("click", resetGame);

// вызываем функцию начала игры
startGame();
