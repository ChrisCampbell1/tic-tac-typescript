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
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const boardEl = document.querySelector('.board');
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick);
// function squareElsListeners() {
//   squareEls.forEach((square) => {
//     square.addEventListener('click', handleClick)
//   })
// }
// squareElsListeners()
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
}
function updateBoard() {
    squareEls.forEach((square, idx) => {
        if (board[idx] === null) {
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
    if (!evt.target || !('id' in evt.target))
        return;
    if (evt.target.textContent !== "")
        return;
    if (winner === true || tie === true)
        return;
    let sqIdx = evt.target.id.slice(2);
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
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
init();
// Step 6 - Handle a player clicking a square with a `handleClick` function
// 6.3 - `checkForWinner`
// 6.4 - `switchPlayerTurn`
// 6.4a) Create a function called `switchPlayerTurn`.
// 6.4b) If `winner` is true, return out of the function - we don’t need 
//       to switch the turn anymore!
// 6.4c) If `winner` is false, change the turn by multiplying `turn` by 
//       `-1` (this flips a `1` to `-1`, and vice-versa).
// 6.5 - Tying it all together
// 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, 
//       `checkForWinner`, and `switchPlayerTurn`. Don’t forget that 
//       `placePiece` needs `sqIdx` as an argument! 
// 6.5b) Finally, now that all the state has been updated we need to 
//       render that updated state to the user by calling the `render` 
//       function that we wrote earlier.
// Step 7 - Create Reset functionality
// 7a) Add a reset button to the HTML document.
// 7b) Store the new reset button element as a cached element reference in
//     a constant named `resetBtnEl`.
// 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
//     it should call the `init` function you created in step 3.
