let mode = "pvp"; // "pvp" = player vs player, "pvc" = player vs computer
let cube = document.getElementsByClassName("box");
let count = 0;
let turn = 1;
let green = "#5ef141";
let humanMoves = [];
let computerMoves = [];
let magicSquare = [8, 1, 6, 3, 5, 7, 4, 9, 2]; // Magic square mapping

// Disable mode selection after the first click
let gameStarted = false;

function func(ths) {
    if (!gameStarted) {
        // Disable mode selection radios
        document.querySelectorAll('input[name="mode"]').forEach(r => r.disabled = true);
        gameStarted = true;
    }

    if (ths.textContent) return; // Already clicked

    if (mode === "pvp") {
        twoPlayerMove(ths);
    } else if (mode === "pvc") {
        playerMove(ths);
    }
}

function twoPlayerMove(ths) {
    let playerTurn = document.getElementsByClassName("player_turn");
    ths.classList.add("click-disable");
    count++;

    if (count % 2 !== 0) { 
        // Player 1 (O)
        ths.innerHTML = "O";
        ths.accessKey = 0;
        playerTurn[0].innerHTML = "Player 2 Turn";
    } else { 
        // Player 2 (X)
        ths.innerHTML = "X";
        ths.accessKey = 1;
        playerTurn[0].innerHTML = "Player 1 Turn";
    }

    checkResult();
}

function playerMove(ths) {
    ths.innerHTML = "O";
    ths.accessKey = 0;
    ths.classList.add("click-disable");
    let idx = Array.from(cube).indexOf(ths);
    humanMoves.push(magicSquare[idx]);
    count++;

    if (checkWin(humanMoves)) {
        endGame("Human (O) wins!!", humanMoves);
        return;
    }

    if (count === 9) {
        endGame("It's a Draw!!");
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
        endGame("Computer (X) wins!!", computerMoves);
        return;
    }

    if (count === 9) {
        endGame("It's a Draw!!");
        return;
    }
}

function findBestMove() {
    for (let i = 0; i < 9; i++) {
        if (!cube[i].textContent && checkWin(computerMoves.concat(magicSquare[i]))) return i;
    }
    for (let i = 0; i < 9; i++) {
        if (!cube[i].textContent && checkWin(humanMoves.concat(magicSquare[i]))) return i;
    }
    if (!cube[4].textContent) return 4;
    const corners = [0, 2, 6, 8];
    for (let c of corners) if (!cube[c].textContent) return c;
    for (let i = 0; i < 9; i++) if (!cube[i].textContent) return i;
}

// Common win checker
function checkWin(moves) {
    if (moves.length < 3) return false;
    for (let i = 0; i < moves.length; i++)
        for (let j = i + 1; j < moves.length; j++)
            for (let k = j + 1; k < moves.length; k++)
                if (moves[i] + moves[j] + moves[k] === 15) return true;
    return false;
}

// Highlight winning combination
function highlightWin(moves) {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
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

// Common result checker for PvP
function checkResult() {
    const keys = Array.from(cube).map(c => parseInt(c.accessKey));
    const combos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let combo of combos) {
        const sum = combo.reduce((a, idx) => a + keys[idx], 0);
        if (sum === 3) {
            combo.forEach(idx => cube[idx].style.backgroundColor = green);
            endGame("Player 2 (X) wins!!");
            return;
        } else if (sum === 0) {
            combo.forEach(idx => cube[idx].style.backgroundColor = green);
            endGame("Player 1 (O) wins!!");
            return;
        }
    }

    if (keys.every(k => k === 0 || k === 1) && count === 9) {
        endGame("It's a Draw!!");
    }
}

// Show overlay and stop further moves
function endGame(message, winningMoves=[]) {
    document.getElementById("result").innerText = message;
    if (winningMoves.length) highlightWin(winningMoves);
    document.getElementById("overlay").style.display = "block";

    // Disable all remaining cubes
    Array.from(cube).forEach(c => c.classList.add("click-disable"));
}

// Restart the game properly
function restart(fromOverlay) {
    // Reset variables
    count = 0;
    turn = 1;
    humanMoves = [];
    computerMoves = [];
    gameStarted = false;

    // Clear the board
    Array.from(cube).forEach(c => {
        c.textContent = "";
        c.accessKey = "";
        c.classList.remove("click-disable");
        c.style.backgroundColor = "";
    });

    // Reset player turn display
    document.getElementsByClassName("player_turn")[0].innerText = "Player 1 Turn";

    // Hide overlay if restart is from popup
    if (fromOverlay) {
        document.getElementById("overlay").style.display = "none";
    }

    // Re-enable mode selection
    document.querySelectorAll('input[name="mode"]').forEach(r => r.disabled = false);
}

