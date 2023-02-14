import "./styles/score-board.css";
import React from "react";
import { useAppContext } from "../app.context";

//  Where the score is presented

export const ScoreBoard = () => {
  const { incorrectCount, correctCount, fishies, nextFishToName } =
    useAppContext();

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fishies.map((fish, index) => (
          <div key={index} className="choice">
            {fish}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
