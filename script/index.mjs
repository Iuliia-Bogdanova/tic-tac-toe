// Получаем элементы разметки
const player1Input = document.querySelector('.player1 .player-name');
const player1StartBtn = document.querySelector('.player1 .startBtn');

const player2Input = document.querySelector('.player2 .player-name');
const player2StartBtn = document.querySelector('.player2 .startBtn');

const buttons = document.querySelectorAll(".buttons");

const text = document.querySelector(".subTitle");

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
