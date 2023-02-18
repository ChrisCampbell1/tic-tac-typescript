/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [1,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


/*-------------------------------- Variables --------------------------------*/
let board: (number | null)[]
let turn: number
let winner: boolean
let tie: boolean

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.getElementById('message') as HTMLHeadingElement



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init():void {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render()
}

function render():void {
  updateBoard()
  updateMessage()
}

function updateBoard():void {
  squareEls.forEach((square, idx) => {
    if(board[idx] === null) {
      square.textContent = ""
    } else if (board[idx] === 1) {
      square.textContent = "X"
    } else if (board[idx] === -1) {
      square.textContent = "O"
    }
  })
}

function updateMessage():void {
  if (winner === false && tie === false) {
    if (turn === 1) messageEl.textContent = "It's X's Turn"
    if (turn === -1) messageEl.textContent = "It's O's Turn"
  } else if (winner === false && tie === true) {
    messageEl.textContent = "Cat's game, MEOW!"
  } else if (winner === true) {
    if (turn === 1) messageEl.textContent = "X Wins!"
    if (turn === -1) messageEl.textContent = "O Wins!"
  }
}

function handleClick(evt: Event):void {
  
}

init()


// Step 6 - Handle a player clicking a square with a `handleClick` function

  // 6a) Create a function called `handleClick`. It will have an `evt`
  //     parameter.

  // 6b) Attach an event listener to the game board (you can do this to each
  //     one of the existing `squareEls` with a `forEach` loop OR add a new
  //     cached element reference that will allow you to take advantage of 
  //     event bubbling). On the `'click'` event, it should call the 
  //    `handleClick` function you created in 6a.

  // 6c) Obtain the index of the square that was clicked by "extracting" the 
  //     index from an `id` assigned to the target element in the HTML. Assign 
  //     this to a constant called `sqIdx`.

  // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
  //     because that square is already taken. Also, if `winner` is `true`
  //     immediately `return` because the game is over.


// Step 6.1 - `placePiece`

  // 6.1a) Create a function named placePiece that accepts an `idx` parameter.

  // 6.1b) Update the `board` array at the `idx` so that it is equal to the 
  //       current value of `turn`.


// 6.2 - `checkForTie`

  // 6.2a) Create a function named `checkForTie`.

  // 6.2b) Check if the `board` array still contains any `null` elements. If
  //       it does, we can leave `tie` as false. Otherwise, set `tie` to true.


// 6.3 - `checkForWinner`

  // 6.3a) Create a function called `checkForWinner`

  // 6.3b) Determine if a player has won using one of the two options below.
  //       Option 1 is a more elegant method that takes advantage of the 
  //       `winningCombos` array you wrote above in step 5. Option 2 might 
  //       be a little simpler to comprehend, but you'll need to write more 
  //       code. This option won't take advantage of the winningCombos array, 
  //       but using it as a reference will help you build a solution.
  //       Ensure you choose only one path.

  //       Option 1) Loop through each of the winning combination arrays 
  //       defined in the `winningCombos` array. Total up the three board 
  //       positions using the three indexes in the current combo. Convert 
  //       the total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.

  //       Option 2) For each one of the winning combinations you wrote in 
  //       step 5, find the total of each winning combination. Convert the 
  //       total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.


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
