import React,{ useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { Images } from "../src/assets/images";
import { FinalScore } from "./Components/FinalScore";


const answersLeft = ["trout", "salmon", "shark", "tuna"];

const  initialFishes = [
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

export const AppProvider =({children}) => {
   const [incorrectCount, setIncorrectCount] = useState(0);
   const [correctCount, setCorrectCount] = useState(0);
   const [guessCount, setGuessCount] = useState(1)
   const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
   const [totalCount, setTotalCount] = useState(0);
   const [ isGameOver, setIsGameOver ] = useState(false);

   
   
   const makeGuess = (guess) => {
      setGuessCount(previousState => previousState + 1);
      setTotalCount(previousState => previousState + 1);
      answersLeft.splice(answersLeft.indexOf(nextFishToName.name), 1);
      guess == nextFishToName.name ? setCorrectCount(correctCount + 1) : setIncorrectCount( incorrectCount + 1);
      checkGameState();
   }
   const checkGameState = () => {
      if(guessCount >= initialFishes.length){
         setIsGameOver(true);
         return
      }
         setNextFishToName(initialFishes[guessCount])
   }
   return <AppContext.Provider value = {{ isGameOver, makeGuess, incorrectCount, setIncorrectCount, correctCount, setCorrectCount, nextFishToName, totalCount, setTotalCount, answersLeft}}>
      {children}
   </AppContext.Provider>
   }

export const useAppContext = () => {
   const context = useContext(AppContext);
   return {
      incorrectCount: context.incorrectCount,
      setIncorrectCount: context.setIncorrectCount,
      correctCount: context.correctCount,
      setCorrectCount: context.setCorrectCount,
      nextFishToName: context.nextFishToName,
      totalCount: context.totalCount,
      setTotalCount: context.setTotalCount,
      answersLeft: context.answersLeft,
      makeGuess: context.makeGuess,
      isGameOver: context.isGameOver
   }
};