let boxs= document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGamebtn =document.querySelector(".res");
let msg =document.querySelector(".msg");
let ms = document.querySelector("#ms");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}

boxs.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){//player O
            box.innerText="O";
            turnO=false;
        }else{//player X
            box.innerText="X";
            turnO= true;
        }
        box.disabled =true;
        checkWinner();
    })
})

const disableBoxes =() =>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableBoxes =() =>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText ="";
    }
}

const showWinner= (winner) =>{
    ms.innerText =`Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for (let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxs[patterns[0]].innerText,
        //     boxs[patterns[1]].innerText,
        //     boxs[patterns[2]].innerText
        //     );
        let pos1Val =boxs[patterns[0]].innerText;
        let pos2Val =boxs[patterns[1]].innerText;
        let pos3Val =boxs[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);