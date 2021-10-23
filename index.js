var cube = document.getElementsByClassName("box");
var count = 0;
let turn = 1;
let green = "#5ef141";

function func(ths) {
    let playerTurn = document.getElementsByClassName("player_turn");
    if (turn === 1) playerTurn[0].innerHTML = "Player 2 Turn";
    else if (turn === 2) playerTurn[0].innerHTML = "Player 1 Turn";
    ths.classList.add("click-disable");
    ths.classList.add("click-disable");
    count++;
    if (count % 2 == 0) {
        ths.innerHTML = "X";
        ths.accessKey = 1;
        turn = 1;
    } else {
        ths.innerHTML = "O";
        ths.accessKey = 0;
        turn = 2;
    }
    const a = parseInt(cube[0].accessKey);
    const b = parseInt(cube[1].accessKey);
    const c = parseInt(cube[2].accessKey);
    const d = parseInt(cube[3].accessKey);
    const e = parseInt(cube[4].accessKey);
    const f = parseInt(cube[5].accessKey);
    const g = parseInt(cube[6].accessKey);
    const h = parseInt(cube[7].accessKey);
    const i = parseInt(cube[8].accessKey);
    if (
        a + b + c == 3 ||
        d + e + f == 3 ||
        g + h + i == 3 ||
        a + d + g == 3 ||
        b + e + h == 3 ||
        c + f + i == 3 ||
        a + e + i == 3 ||
        c + e + g == 3
    ) {
        if (a + b + c == 3) {
            cube[0].style.backgroundColor = green;
            cube[1].style.backgroundColor = green;
            cube[2].style.backgroundColor = green;
        }else if(d + e + f == 3){
            cube[3].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[5].style.backgroundColor = green;
        }else if(g + h + i == 3){
            cube[6].style.backgroundColor = green;
            cube[7].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(a + d + g == 3){
            cube[0].style.backgroundColor = green;
            cube[3].style.backgroundColor = green;
            cube[6].style.backgroundColor = green;
        }else if(b + e + h == 3){
            cube[1].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
           cube[7].style.backgroundColor = green;
        }else if(c + f + i == 3){
            cube[2].style.backgroundColor = green;
            cube[5].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(a + e + i == 3){
            cube[0].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(c + e + g == 3){
            cube[2].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[6].style.backgroundColor = green;
        }

        //alert("X wins!! ");
        document.getElementById("result").innerText = "Player 2 (X) wins!!";
        on();
    } else if (
        a + b + c == 0 ||
        d + e + f == 0 ||
        g + h + i == 0 ||
        a + d + g == 0 ||
        b + e + h == 0 ||
        c + f + i == 0 ||
        a + e + i == 0 ||
        c + e + g == 0
    ) {
        //alert("O wins!!  ");
        document.getElementById("result").innerText = "Player 1 (O) wins!!";
        on();

        if (a + b + c == 0) {
            cube[0].style.backgroundColor = green;
            cube[1].style.backgroundColor = green;
            cube[2].style.backgroundColor = green;
        }else if(d + e + f == 0){
            cube[3].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[5].style.backgroundColor = green;
        }else if(g + h + i == 0){
            cube[6].style.backgroundColor = green;
            cube[7].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(a + d + g == 0){
            cube[0].style.backgroundColor = green;
            cube[3].style.backgroundColor = green;
            cube[6].style.backgroundColor = green;
        }else if(b + e + h == 0){
            cube[1].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
           cube[7].style.backgroundColor = green;
        }else if(c + f + i == 0){
            cube[2].style.backgroundColor = green;
            cube[5].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(a + e + i == 0){
            cube[0].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[8].style.backgroundColor = green;
        }else if(c + e + g == 0){
            cube[2].style.backgroundColor = green;
            cube[4].style.backgroundColor = green;
            cube[6].style.backgroundColor = green;
        }
    } else if (a + b + c + d + e + f + g + h + i) {
        //alert("Its a Draw !!!");
        document.getElementById("result").innerText = "It's a Draw!!";
        on();
    }
}

function on(){
    document.getElementById("overlay").style.display = "block";
}

// Reseting the game after users confirmation
function restart() {
    if (confirm('Are you sure yo want to restart the game?')) {
        window.location.reload();
    }
}
