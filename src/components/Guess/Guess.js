import React from "react";
import { range } from '../../utils';

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          { word ? word[index] : undefined }
        </span>
      ))}
  </p>
  );
}

export default Guess;
