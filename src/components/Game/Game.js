import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [results, setResults] = React.useState([]);

  function addResult(guess) {
    const nextResults = [...results, guess];
    setResults(nextResults);
  }

  return (
    <div>
      <GuessResults results={results} />
      <GuessInput addResult={addResult} />
    </div>
  );
}

export default Game;
