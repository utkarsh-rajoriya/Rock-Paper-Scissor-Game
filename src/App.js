import React from "react";
import "./App.css";
export default function App() {

  let getCompchoice = () =>{
    let arr = ["scissor", "paper" , "rock"]
    let rndind = Math.floor(Math.random() * 3);
   return arr[rndind];
  }

  let compScore = 0;
  let userScore = 0;

  let RockClick = () =>{
    // user = rock
   let compChoice =  getCompchoice();
   console.log("user: rock")
   console.log("comp: "+ compChoice)

   if(compChoice === "paper" ){
    document.body.querySelector('.msg').innerText ="You Lose";
    compScore = compScore + 1 ;
    document.body.querySelector('.comp-score').innerText =`${compScore}`
   }
   else if(compChoice ==='scissor'){
    document.body.querySelector('.msg').innerText ="You Win";
    userScore = userScore + 1 ;
    document.body.querySelector('.user-score').innerText =`${userScore}`
   }
   else{
    document.body.querySelector('.msg').innerText ="Draw";
   }

  }

  let PaperClick = () =>{
    // user = paper
   let compChoice =  getCompchoice();
   console.log("user: paper")
   console.log("comp: "+ compChoice)

   if(compChoice === "scissor" ){
    document.body.querySelector('.msg').innerText ="You Lose";
    compScore = compScore + 1 ;
    document.body.querySelector('.comp-score').innerText =`${compScore}`
   }
   else if(compChoice ==='rock'){
    document.body.querySelector('.msg').innerText ="You Win";
    userScore = userScore + 1 ;
    document.body.querySelector('.user-score').innerText =`${userScore}`
   }
   else{
    document.body.querySelector('.msg').innerText ="Draw";
   }

  }

  let ScissorClick = () =>{
    // user = scissor
   let compChoice =  getCompchoice();
   console.log("user: scissor")
   console.log("comp: "+ compChoice)

   if(compChoice === "rock" ){
    document.body.querySelector('.msg').innerText ="You Lose";
    compScore = compScore + 1 ;
    document.body.querySelector('.comp-score').innerText =`${compScore}`
   }
   else if(compChoice ==='paper'){
    document.body.querySelector('.msg').innerText ="You Win";
    userScore = userScore + 1 ;
    document.body.querySelector('.user-score').innerText =`${userScore}`
   }
   else{
    document.body.querySelector('.msg').innerText ="Draw";
   }

  }

  return (
    <div>
      <h1 className="rps-heading">Rock Paper Scissor</h1>

      <div className="choices">
        <div className="choice" id="rock" onClick={RockClick}></div>
        <div className="choice" id="paper" onClick={PaperClick}></div>
        <div className="choice" id="scissor" onClick={ScissorClick}></div>
      </div>

      <div className="score-board">
        <div className="score">
          <p className="user-score">0</p>
          <p>You</p>
        </div>
        <div className="score">
          <p className="comp-score">0</p>
          <p>Comp</p>
        </div>
      </div>

      <div className="msg-container">
        <p className="msg">Play your move</p>
      </div>
    </div>
  );
}
