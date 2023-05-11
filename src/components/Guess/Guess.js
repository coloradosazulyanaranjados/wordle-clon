import React from "react";
import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const answerData = checkGuess(word, answer);

  function statusClass(index, answerData) {
    if (answerData === null || answerData.length != 5) return 'cell';
    const charStatus = answerData[index].status;
    return `cell ${charStatus}`
  }
  
  return (
    <p className="guess">
      {range(5).map((index) => {
        const char = word ? word[index] : undefined
        return(
          <span className={statusClass(index, answerData)} key={index}>
            { char }
          </span>
        )
      })}
  </p>
  );
}

export default Guess;
