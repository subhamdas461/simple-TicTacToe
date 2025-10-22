let mode = "pvp"; // "pvp" = player vs player, "pvc" = player vs computer

var cube = document.getElementsByClassName("box");
var count = 0;
let turn = 1;
let green = "#5ef141";
let humanVsComputer = true; // Set to true for human vs computer
let human = 0; // O
let computer = 1; // X
let humanMoves = [];
let computerMoves = [];
let magicSquare = [8, 1, 6, 3, 5, 7, 4, 9, 2]; // Magic square mapping

function func(ths) {
    if (ths.textContent) return; // Already clicked

    if (mode === "pvp") {
        // Two-player logic
        let playerTurn = document.getElementsByClassName("player_turn");
        ths.classList.add("click-disable");
        count++;
        if (count % 2 === 0) {
            ths.innerHTML = "X";
            ths.accessKey = 1;
            turn = 1;
        } else {
            ths.innerHTML = "O";
            ths.accessKey = 0;
            turn = 2;
        }
        playerTurn[0].innerHTML = turn === 1 ? "Player 2 Turn" : "Player 1 Turn";
        checkResult();
    } else if (mode === "pvc") {
        // Player vs Computer logic
        playerMove(ths); // your existing playerMove function
    }
}


function twoPlayerMove(ths) {
    let playerTurn = document.getElementsByClassName("player_turn");
    ths.classList.add("click-disable");
    count++;

    if (count % 2 !== 0) { 
        // Player 1 (O) moves
        ths.innerHTML = "O";
        ths.accessKey = 0;
        playerTurn[0].innerHTML = "Player 2 Turn"; // next turn
    } else { 
        // Player 2 (X) moves
        ths.innerHTML = "X";
        ths.accessKey = 1;
        playerTurn[0].innerHTML = "Player 1 Turn"; // next turn
    }

    checkResult();
}



function playerMove(ths) {
    // Human move
    ths.innerHTML = "O";
    ths.accessKey = 0;
    ths.classList.add("click-disable");
    let idx = Array.from(cube).indexOf(ths);
    humanMoves.push(magicSquare[idx]);
    count++;

    if (checkWin(humanMoves)) {
        document.getElementById("result").innerText = "Human (O) wins!!";
        highlightWin(humanMoves);
        on();
        return;
    }

    if (count === 9) {
        document.getElementById("result").innerText = "It's a Draw!!";
        on();
        return;
    }

    setTimeout(computerMove, 200);
}

function computerMove() {
    let moveIdx = findBestMove();
    cube[moveIdx].innerHTML = "X";
    cube[moveIdx].accessKey = 1;
    cube[moveIdx].classList.add("click-disable");
    computerMoves.push(magicSquare[moveIdx]);
    count++;

    if (checkWin(computerMoves)) {
        document.getElementById("result").innerText = "Computer (X) wins!!";
        highlightWin(computerMoves);
        on();
        return;
    }

    if (count === 9) {
        document.getElementById("result").innerText = "It's a Draw!!";
        on();
        return;
    }
}

function findBestMove() {
    // 1. Win if possible
    for (let i = 0; i < 9; i++) {
        if (!cube[i].textContent) {
            let test = computerMoves.concat(magicSquare[i]);
            if (checkWin(test)) return i;
        }
    }
    // 2. Block human
    for (let i = 0; i < 9; i++) {
        if (!cube[i].textContent) {
            let test = humanMoves.concat(magicSquare[i]);
            if (checkWin(test)) return i;
        }
    }
    // 3. Take center
    if (!cube[4].textContent) return 4;
    // 4. Take corners
    const corners = [0, 2, 6, 8];
    for (let c of corners) {
        if (!cube[c].textContent) return c;
    }
    // 5. Take any
    for (let i = 0; i < 9; i++) {
        if (!cube[i].textContent) return i;
    }
}

function checkWin(moves) {
    if (moves.length < 3) return false;
    for (let i = 0; i < moves.length; i++) {
        for (let j = i + 1; j < moves.length; j++) {
            for (let k = j + 1; k < moves.length; k++) {
                if (moves[i] + moves[j] + moves[k] === 15) return true;
            }
        }
    }
    return false;
}

function highlightWin(moves) {
    // Highlight the winning combination
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winCombos) {
        let sum = combo.reduce((acc, idx) => {
            if (cube[idx].textContent === "O") return acc + 0;
            if (cube[idx].textContent === "X") return acc + 1;
            return acc;
        }, 0);
        if (sum === 3 || sum === 0) {
            combo.forEach(idx => cube[idx].style.backgroundColor = green);
            break;
        }
    }
}

function checkResult() {
    const keys = Array.from(cube).map(c => parseInt(c.accessKey));
    const combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of combos) {
        const sum = combo.reduce((a, idx) => a + keys[idx], 0);
        if (sum === 3) {
            combo.forEach(idx => cube[idx].style.backgroundColor = green);
            document.getElementById("result").innerText = "Player 2 (X) wins!!";
            on();
            return;
        } else if (sum === 0) {
            combo.forEach(idx => cube[idx].style.backgroundColor = green);
            document.getElementById("result").innerText = "Player 1 (O) wins!!";
            on();
            return;
        }
    }

    if (keys.every(k => k === 0 || k === 1)) {
        document.getElementById("result").innerText = "It's a Draw!!";
        on();
    }
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

//Reset the game
function restartGame(selectedMode) {
    if (confirm('Are you sure you want to restart the game?')) {
        mode = selectedMode;
        window.location.reload();
    } else {
        // Revert the radio selection visually if user cancels
        document.getElementById(mode).checked = true;
    }
}
function reloadWindow() {
    window.location.reload();
}
