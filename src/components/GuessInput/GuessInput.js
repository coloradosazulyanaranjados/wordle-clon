import React from "react";

function GuessInput({ addResult, gameStatus }) {

  const [input, setInput] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        addResult(input);
        setInput('');
      }}
    >
      <label htmlFor="guess-input">Ingresa intento:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-zA-Z]{5}"
        disabled={gameStatus != 'running'}
        onChange={event => {
          const nextInput = event.target.value
          setInput(nextInput.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
