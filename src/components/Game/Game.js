import React, { useState } from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleAddGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    if (guess === answer) {
      setGameStatus("won");
    } else if (newGuesses.length === 6) {
      setGameStatus("lost");
    }

    setGuesses([...newGuesses]);
  };
  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput
        handleAddGuess={handleAddGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
