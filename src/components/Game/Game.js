import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameStatus from '../GameStatus/GameStatus';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import RestartButton from '../RestartButton/RestartButton';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => {
    const firstAnswer = sample(WORDS);
    console.info({firstAnswer});
    return firstAnswer;
  })

  function restartGame () {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGameStatus('running');
    setResults([]);
    console.info({ nextAnswer });
  }

  function addResult(guess) {
    const nextResults = [...results, guess];
    setResults(nextResults);
    if (guess === answer) {
      setGameStatus('win');
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <div>
      <GuessResults results={results} answer={answer} />
      <GuessInput addResult={addResult} gameStatus={gameStatus} />
      { gameStatus != 'running' &&
        <>
          <GameStatus 
            gameStatus={gameStatus}
            answer={answer}
            countGuesses={results.length}
          />
          <RestartButton restartGame={restartGame} />
        </>
      }
    </div>
  );
}

export default Game;
