import React from "react";

function GuessInput({ addResult }) {

  const [input, setInput] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log(input);
        addResult(input);
        setInput('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-zA-Z]{5}"
        onChange={event => {
          const nextInput = event.target.value
          setInput(nextInput.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
