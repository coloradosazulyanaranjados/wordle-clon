import React from "react";

function GameStatus({ answer, countGuesses, gameStatus }) {
  if (gameStatus === 'win') {
    return(
      <div className='happy banner'>
        <p>
          <strong> Felicitaciones!</strong> Lo lograste en
          {' '}
          <strong>{countGuesses === 1 ? 'tu primer intento' : `${countGuesses} intentos`}</strong>.
        </p>
      </div>
    )
  }

  if (gameStatus === 'lost') {
    return (
      <div className='sad banner'>
        <p>
          Lo siento, la respuesta correcta era < strong > { answer }</strong >.
        </p>
      </div>
    )
  }
}

export default GameStatus;
