import React from "react";

function RestartButton({ restartGame }) {
  return (
    <div className="restart">
      <button className="pushable"
        onClick={() => { restartGame()}}
      >
        <span className="front">
          Comenzar Otra Partida
        </span>
      </button>
    </div>
  );
}

export default RestartButton;
