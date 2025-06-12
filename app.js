let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highestScore = 0;
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let btns = ["red","blue","purple","yellow"];


document.addEventListener("keypress", function (){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randbtn);
}

function btnPress() {
    console.log("btn was pressed");
    let btn = this;
    let userColor = btn.getAttribute("id")
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    btnFlash(btn);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function checkAns(idx) {
    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        console.log("same color");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Oops! You lost the game.☹ <br/>Press any key to restart your game. <br/> Your Score = ${level}`;
        console.log("wrong Color!");
        if (highestScore <= level) {
            highestScore = level;
        } else {
            highestScore = highestScore;
        }
        p.innerText = `Highest Score is: ${highestScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 75);
        reset();
    }
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}