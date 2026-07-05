let moves=document.querySelectorAll(".moves");
let msg=document.querySelector(".msg");
let newGame=document.querySelector("#new");

let movesArray=["Stone","Paper","Scissor"];
let userScore=0;
let compScore=0;

msg.innerText=" Pick your move";

moves.forEach((move) => {
    move.addEventListener("click", () => {
        let compMove=movesArray[Math.floor(Math.random()*movesArray.length)];
        console.log(compMove);
        let user=document.querySelector("#user");
        let computer=document.querySelector("#computer");
        checkWin(move,compMove,user,computer);
    })
})

checkWin=(userMove,comp,user,computer) => {
    let use=userMove.innerText;
    console.log(use);
    if(use==comp) {
        msg.innerText="It's a tie. Computer chooses " + comp;
        console.log("It's a tie");
        msg.style.backgroundColor="black";
    }
    else if(use==="Stone" && comp==="Scissor" ) {
        msg.innerText="Computer chooses scissor.You win!";
        msg.style.backgroundColor="green";
        console.log("You win!");
        user.innerText = "User: " + ++userScore;
    }
    else if(use=="Stone" && comp=="Paper") {
        msg.innerText="Computer chooses paper. You lose!";
        msg.style.backgroundColor="red";
        console.log("You lose!");
        computer.innerText = "Computer: " + ++compScore;
    }
    else if(use=="Paper" && comp=="Stone") {
        msg.innerText="Computer chooses stone. You win!";
        msg.style.backgroundColor="green";
        console.log("You win!");
        user.innerText = "User: " + ++userScore;
    }
    else if(use=="Paper" && comp=="Scissor") {
        msg.innerText="Computer chooses scissor. You lose!";
        msg.style.backgroundColor="red";
        console.log("You lose!");
        computer.innerText = "Computer: " + ++compScore;
    }
    else if(use=="Scissor" && comp=="Paper") {
        msg.innerText="Computer chooses paper. You win!";
        msg.style.backgroundColor="green";
        console.log("You win!");
        user.innerText = "User: " + ++userScore;
    }
    else if(use=="Scissor" && comp=="Stone") {
        msg.innerText="Computer chooses stone. You lose!";
        msg.style.backgroundColor="red";
        console.log("You lose!");
        computer.innerText = "Computer: " + ++compScore;
    }
}

newGame.addEventListener("click" , () => {
    userScore=0;
    compScore=0;
    document.querySelector("#user").innerText="User: 0";
    document.querySelector("#computer").innerText="Computer: 0";
    msg.innerText="Pick your move";
    msg.style.backgroundColor="black";
})
