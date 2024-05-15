import React, { useState } from "react";

function GuessInput({ handleAddGuess, gameStatus }) {
  const [guess, setGuess] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
  };
  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus === "lost"}
        required
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => {
          setGuess(e.target.value.toLocaleUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
