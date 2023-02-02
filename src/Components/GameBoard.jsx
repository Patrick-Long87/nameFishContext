import "./styles/game-board.css";
import { Images } from "../assets/images";
import React from "react";
import { useAppContext } from "../app.context";
import { useState } from "react";

export const GameBoard = () => {
  const [fishGuess, setFishGuess] = useState('');
  const { makeGuess, nextFishToName } = useAppContext();
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault();
        makeGuess(fishGuess);
        setFishGuess('')
      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" 
        onChange={(e)=> {
          setFishGuess(e.target.value);
        }}/>
        <input type="submit"/>
      </form>
    </div>
  );
};
