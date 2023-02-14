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
let fishies = initialFishes.map((fish) => fish.name);

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const nextFishToName = initialFishes[guessCount];

  const makeGuess = (guess) => {
    fishies = fishies.filter((fish) => fish !== nextFishToName.name);
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
        fishies,
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
    fishies: context.fishies,
    initialFishes: context.initialFishes,
  };
};
