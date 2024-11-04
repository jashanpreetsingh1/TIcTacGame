let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-Container ");
let msg=document.querySelector("#msg");
let turnaudio = new Audio("ting.mp3");
let gamewin = new Audio("wingame.wav");

// let arr2=[["jashan","Raman"],["developer","manager"],[2500000,2300000]];
let turnX=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    turnX=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        
        console.log("box was clicked");
        if (turnX){ //playero
            box.innerText="X";
            turnX=false;
        }else{  //playerX
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true; 
        checkWinner();
        turnaudio.play();
    });
});

const disableBoxes =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    gamewin.play();
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText);
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" &&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner!",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);