"use strict";
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
/*-------------------------------- Variables --------------------------------*/
let board;
let turn;
let winner;
let tie;
let scoreBoard = {
    xWins: 0,
    oWins: 0,
    ties: 0
};
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const boardEl = document.querySelector('.board');
const resetBtnEl = document.getElementById('reset');
const xScore = document.getElementById("x");
const oScore = document.getElementById("o");
const tiesScore = document.getElementById("ties");
const resetScoreBoardBtn = document.getElementById("resetscoreboard");
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick);
resetBtnEl.addEventListener('click', init);
resetScoreBoardBtn.addEventListener('click', resetScoreBoard);
/*-------------------------------- Functions --------------------------------*/
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
    renderScoreBoard();
}
function updateBoard() {
    squareEls.forEach((square, idx) => {
        if (board[idx] === 0) {
            square.textContent = "";
        }
        else if (board[idx] === 1) {
            square.textContent = "X";
        }
        else if (board[idx] === -1) {
            square.textContent = "O";
        }
    });
}
function updateMessage() {
    if (winner === false && tie === false) {
        if (turn === 1)
            messageEl.textContent = "It's X's Turn";
        if (turn === -1)
            messageEl.textContent = "It's O's Turn";
    }
    else if (winner === false && tie === true) {
        messageEl.textContent = "Cat's game, MEOW!";
    }
    else if (winner === true) {
        if (turn === 1)
            messageEl.textContent = "X Wins!";
        if (turn === -1)
            messageEl.textContent = "O Wins!";
    }
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    if (evt.target.textContent !== "")
        return;
    if (winner === true || tie === true)
        return;
    let sqIdx = parseInt(evt.target.id.slice(2));
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
    updateScore();
    switchPlayerTurn();
    render();
}
function placePiece(idx) {
    board[idx] = turn;
}
function checkForTie() {
    if (!board.includes(0)) {
        tie = true;
    }
}
function checkForWinner() {
    winningCombos.forEach((combo) => {
        let total = 0;
        combo.forEach((position) => {
            total += board[position];
            if (Math.abs(total) === 3) {
                winner = true;
                return;
            }
        });
    });
}
function switchPlayerTurn() {
    if (winner === true || tie === true)
        return;
    turn = turn * -1;
}
function updateScore() {
    if (winner === false && tie === false)
        return;
    if (tie === true)
        scoreBoard.ties++;
    if (winner === true) {
        if (turn === 1) {
            scoreBoard.xWins++;
        }
        else if (turn === -1) {
            scoreBoard.oWins++;
        }
    }
}
function renderScoreBoard() {
    xScore.textContent = `X: ${scoreBoard.xWins}`;
    oScore.textContent = `O: ${scoreBoard.oWins}`;
    tiesScore.textContent = `Ties: ${scoreBoard.ties}`;
}
function resetScoreBoard() {
    scoreBoard = {
        xWins: 0,
        oWins: 0,
        ties: 0
    };
    init();
}
init();
