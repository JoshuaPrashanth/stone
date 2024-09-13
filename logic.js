let user_score = 0;
let comp_score = 0;
let choice = document.querySelectorAll(".choice");
let u = document.querySelector(".you");
let c = document.querySelector(".comp");
let result = document.querySelector(".result");


// User input
choice.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        let v = rand();
        check(choiceId, v);
    });
});

// Computer input
const rand = () => {
    let list = ["stone", "paper", "scissor"];
    let i = Math.floor(Math.random() * 3);
    let comp = list[i];
    return comp;
};

// Check both 
const check = (n, j) => {
    if (n === j){
        result.innerText = "Draw";
        result.style.backgroundColor = "#001B2E";
    }
    else if (n === "stone" && j === "paper"){
        comp_score += 1;
        c.innerText = comp_score;
        result.innerText = "Stone wrapped by Paper";
        result.style.backgroundColor = "red";
    }
    else if (n === "paper" && j === "scissor"){
        comp_score += 1;
        c.innerText = comp_score;
        result.innerText = "Paper sliced by Scissor";
        result.style.backgroundColor = "red";
    }
    else if (n === "scissor" && j === "stone"){
        comp_score += 1;
        c.innerText = comp_score;
        result.innerText = "Scissor crused by Stone";
        result.style.backgroundColor = "red";
    }

    else if (n === "stone" && j === "scissor"){
        user_score += 1;
        u.innerText = user_score;
        result.innerText = "Stone crushed Scissor";
        result.style.backgroundColor = "green";
    }
    else if (n === "paper" && j === "stone"){
        user_score += 1;
        u.innerText = user_score;
        result.innerText = "Paper wrapped Stone";
        result.style.backgroundColor = "green";
    }
    else if (n === "scissor" && j === "paper"){
        user_score += 1;
        u.innerText = user_score;
        result.innerText = "Scissor sliced paper";
        result.style.backgroundColor = "green";
    }
}