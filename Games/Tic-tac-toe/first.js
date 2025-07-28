let turn = "O";
total_turn = 0;

const board_value = new Array(9).fill("E");

const board = document.querySelector(".board");

const winnerMsg = document.querySelector("#winnerMsg");

// printing O and X
const printer = (event) => {
    const element = event.target;
    total_turn++;
    if (board_value[element.id] === "E") {

        if (turn === "O") {
            element.innerHTML = "O";
            board_value[element.id] = "O";
            if (checkWinner()) {
                winnerMsg.innerHTML = "Winner is O";
                board.removeEventListener("click", printer);
                return;
            }
            turn = "X";
        }
        else {
            element.innerHTML = "X";
            board_value[element.id] = "X";
            if (checkWinner()) {
                winnerMsg.innerHTML = "Winner is X";
                board.removeEventListener("click", printer);
                return;
            }
            turn = "O";
        }
        if (total_turn == 9) {
            winnerMsg.innerHTML = "Match is Draw";
        }
    }
}

board.addEventListener("click", printer);

// Patterns
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// checking for winner
function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        if (
            board_value[index0] !== "E" &&
            board_value[index0] === board_value[index1] &&
            board_value[index1] === board_value[index2]
        ) {
            return 1;
        }
    }
}

// restar button
const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
    const cell = document.getElementsByClassName("cell");
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    });
    turn = "O";
    total_turn = 0;
    board_value = new Array(9).fill("E");
    winnerMsg.innerHTML = "";
    board.addEventListener("click", printer);
});