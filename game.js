let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let result=document.querySelector("#result");
let random;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let userscr=0;
let compscr=0;

rock.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3+1);
    if(random==1){
        console.log("DRAW");
        result.innerHTML="<b><i>DRAW</b><i>";

    }
    else if(random==2){
        console.log("YOU LOSE");
        result.innerHTML="<b><i>YOU LOSE</b><i>";
        compscr++;
        comp_score.innerHTML=`<b>${compscr}</b>`
        
    }
    else{
        console.log("YOU WIN");
        result.innerHTML="<b><i>YOU WIN</b><i>";
        userscr++;
        user_score.innerHTML=`<b>${userscr}</b>`
    }
})

paper.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3+1);
    if(random==2){
        console.log("DRAW");
        result.innerHTML="<b><i>DRAW</b><i>";
    }
    else if(random==3){
        console.log("YOU LOSE");
        result.innerHTML="<b><i>YOU LOSE</b><i>";
        compscr++;
        comp_score.innerHTML=`<b>${compscr}</b>`
    }
    else{
        console.log("YOU WIN");
        result.innerHTML="<b><i>YOU WIN</b><i>";
        userscr++;
        user_score.innerHTML=`<b>${userscr}</b>`
    }
})

scissor.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3+1);
    if(random==3){
        console.log("DRAW");
        result.innerHTML="<b><i>DRAW</b><i>";
    }
    else if(random==1){
        console.log("LOSE");
        result.innerHTML="<b><i>YOU LOSE</b><i>";
        compscr++;
        comp_score.innerHTML=`<b>${compscr}</b>`
    }
    else{
        console.log("WIN");
        result.innerHTML="<b><i>YOU WIN</b><i>";
        userscr++;
        user_score.innerHTML=`<b>${userscr}</b>`
    }
})