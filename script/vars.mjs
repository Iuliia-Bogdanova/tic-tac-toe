const player1Input = document.querySelector(".player1 .player-name");
const player1StartBtn = document.querySelector(".player1 .startBtn");
const player2Input = document.querySelector(".player2 .player-name");
const player2StartBtn = document.querySelector(".player2 .startBtn");
const buttons = document.querySelectorAll(".buttons");
const text = document.querySelector(".subTitle");
const gameCells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restartBtn");

let currentPlayer = "X";
let nextPlayer = "0";
let playerTurn = currentPlayer;
let winnerName = "";

export {
    player1Input,
    player1StartBtn,
    player2Input,
    player2StartBtn,
    buttons,
    text,
    gameCells,
    restartBtn,
    currentPlayer,
    nextPlayer,
    playerTurn,
    winnerName
};