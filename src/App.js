import React, { useState } from "react";
import "./App.css";
import rockImg from './Components/rock.png';
import paperImg from './Components/paper.png';
import scissorImg from './Components/scissors.png';

export default function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState("Play your move");

  const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * 3)];
  };

  const playRound = (userChoice) => {
    const compChoice = getCompChoice();

    if (
      (userChoice === "rock" && compChoice === "scissor") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissor" && compChoice === "paper")
    ) {
      setUserScore(userScore + 1);
      setMessage(`You Win! ${userChoice} beats ${compChoice}`);
    } else if (userChoice === compChoice) {
      setMessage("It's a Draw!");
    } else {
      setCompScore(compScore + 1);
      setMessage(`You Lose! ${compChoice} beats ${userChoice}`);
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setCompScore(0);
    setMessage("Play your move");
  };

  return (
    <div className="container">
      <h1 className="rps-heading">Rock Paper Scissors</h1>

      <div className="score-board">
        <div className="score">
          <p className="user-score">{userScore}</p>
          <p>You</p>
        </div>
        <div className="score">
          <p className="comp-score">{compScore}</p>
          <p>Computer</p>
        </div>
      </div>

      <div className="choices">
      <img src={rockImg} alt="rock" className="choice-img" onClick={() => playRound("rock")} />
      <img src={paperImg} alt="paper" className="choice-img" onClick={() => playRound("paper")} />
      <img src={scissorImg} alt="scissor" className="choice-img" onClick={() => playRound("scissor")} />
      </div>

      <div className="msg-container">
        <p className="msg">{message}</p>
      </div>

      <div className="reset-container">
        <button className="reset-btn" onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}
