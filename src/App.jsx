import React from "react";
import { AppProvider } from "./app.context";
import { useAppContext } from "./app.context";
import "./App.css";
import { FinalScore } from "./Components/FinalScore";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";

const Game = () => {
  const { isGameOver } = useAppContext();
  if (isGameOver) {
    return <FinalScore />;
  } else {
    return (
      <div>
        <ScoreBoard />
        <GameBoard />
      </div>
    );
  }
};

function App() {
  return (
    <AppProvider>
      <header>
        <Game />
      </header>
    </AppProvider>
  );
}

export default App;
