import React, { useContext, useState, createContext, useEffect } from "react";
import { Images } from "../src/assets/images";

const answersLeft = ["trout", "salmon", "shark", "tuna"];

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [guessCount, setGuessCount] = useState(1);
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [filteredFish, setFilteredFish] = useState(answersLeft);

  const makeGuess = (guess) => {
    setGuessCount((previousState) => previousState + 1);
    guess == nextFishToName.name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
    setFish();
    checkGameState();
  };

  const checkGameState = () => {
    if (guessCount >= initialFishes.length) {
      setIsGameOver(true);
      return;
    }
    setNextFishToName(initialFishes[guessCount]);
  };

  const setFish = () => {
    setFilteredFish(
      filteredFish.filter((fish) => fish !== nextFishToName.name)
    );
  };

  return (
    <AppContext.Provider
      value={{
        isGameOver,
        makeGuess,
        incorrectCount,
        setIncorrectCount,
        correctCount,
        setCorrectCount,
        nextFishToName,
        guessCount,
        filteredFish,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    incorrectCount: context.incorrectCount,
    setIncorrectCount: context.setIncorrectCount,
    correctCount: context.correctCount,
    setCorrectCount: context.setCorrectCount,
    nextFishToName: context.nextFishToName,
    guessCount: context.guessCount,
    answersLeft: context.answersLeft,
    makeGuess: context.makeGuess,
    isGameOver: context.isGameOver,
    filteredFish: context.filteredFish,
  };
};
