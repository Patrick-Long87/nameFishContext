import React from "react";
import { useAppContext } from "../app.context";

export const FinalScore = () => {
  const  { correctCount, totalCount, isGameOver } = useAppContext();
      return(
        <div id="final-score">
          <h1>Your Final Score Was</h1>
          <div id="score">
            <p>{correctCount}</p>
            <hr />
            <p>{totalCount}</p>
          </div>
        </div>
      )
};
