// what do I need ?
// A game board with 9 blocks.
// A way to track where a click happened.
// A way to switch between players after each click.
// A socre keeping system.
// A way to track the winner.

const board = document.getElementById('board');
const statusText = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""]

const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initializeBoard(){
    gameState.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    });
}

function handleCellClick(event){
    const cell = event.target;
    const index = cell.dataset.index;

    if(!gameActive || gameState[index] !== "") return;

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkResult();
}

function checkResult(){
    let roundWon = false;

    for(let condition of winningMoves){
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]){
            roundWon = true;
            break;
        }
    }

    if (roundWon){
        statusText.textContent = `Player ${currentPlayer} wins`;
        gameActive = false;
        return;
    }

    if (!gameState.includes("")){
        statusText.textContent = "It's a draw";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
})