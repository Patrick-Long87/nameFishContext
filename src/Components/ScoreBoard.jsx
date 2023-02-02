import "./styles/score-board.css";
import React from "react";
import { useAppContext } from "../app.context";

//  Where the score is presented

export const ScoreBoard = () => {
  const {incorrectCount, correctCount, answersLeft} = useAppContext();
  
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
