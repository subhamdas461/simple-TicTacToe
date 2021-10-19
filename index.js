var cube = document.getElementsByClassName("box");
var count = 0;
let turn = 1;

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
<<<<<<< HEAD
        if (a + b + c == 3) {
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".two").style.backgroundColor = "#5ef141";
            document.querySelector(".three").style.backgroundColor = "#5ef141";
        }else if(d + e + f == 3){
            document.querySelector(".four").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".six").style.backgroundColor = "#5ef141";
        }else if(g + h + i == 3){
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
            document.querySelector(".eight").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(a + d + g == 3){
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".four").style.backgroundColor = "#5ef141";
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
        }else if(b + e + h == 3){
            document.querySelector(".two").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".eight").style.backgroundColor = "#5ef141";
        }else if(c + f + i == 3){
            document.querySelector(".three").style.backgroundColor = "#5ef141";
            document.querySelector(".six").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(a + e + i == 3){
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(c + e + g == 3){
            document.querySelector(".three").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
        }

=======
>>>>>>> 1363942c1b3e06678fe32aeb9099108c60c092e5
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
<<<<<<< HEAD

        if (a + b + c == 3) {
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".two").style.backgroundColor = "#5ef141";
            document.querySelector(".three").style.backgroundColor = "#5ef141";
        }else if(d + e + f == 0){
            document.querySelector(".four").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".six").style.backgroundColor = "#5ef141";
        }else if(g + h + i == 0){
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
            document.querySelector(".eight").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(a + d + g == 0){
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".four").style.backgroundColor = "#5ef141";
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
        }else if(b + e + h == 0){
            document.querySelector(".two").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".eight").style.backgroundColor = "#5ef141";
        }else if(c + f + i == 0){
            document.querySelector(".three").style.backgroundColor = "#5ef141";
            document.querySelector(".six").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(a + e + i == 0){
            document.querySelector(".one").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".nine").style.backgroundColor = "#5ef141";
        }else if(c + e + g == 0){
            document.querySelector(".three").style.backgroundColor = "#5ef141";
            document.querySelector(".five").style.backgroundColor = "#5ef141";
            document.querySelector(".seven").style.backgroundColor = "#5ef141";
        }
=======
>>>>>>> 1363942c1b3e06678fe32aeb9099108c60c092e5
    } else if (a + b + c + d + e + f + g + h + i) {
        //alert("Its a Draw !!!");
        document.getElementById("result").innerText = "It's a Draw!!";
        on();
    }
}

function on(){
    document.getElementById("overlay").style.display = "block";
}

function restart() {
    window.location.reload();
}
