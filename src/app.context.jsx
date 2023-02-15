import React, { useContext, useState, createContext, useEffect } from "react";
import { Images } from "../src/assets/images";

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
  const [guessCount, setGuessCount] = useState(0);
  const nextFishToName = initialFishes[guessCount];
  const fishNames = initialFishes.slice(guessCount).map((fish) => fish.name);

  const makeGuess = (guess) => {
    setGuessCount((previousState) => previousState + 1);
    if (guess == nextFishToName.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        makeGuess,
        incorrectCount,
        setIncorrectCount,
        correctCount,
        setCorrectCount,
        nextFishToName,
        guessCount,
        initialFishes,
        fishNames,
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
    makeGuess: context.makeGuess,
    fishNames: context.fishNames,
    initialFishes: context.initialFishes,
  };
};
