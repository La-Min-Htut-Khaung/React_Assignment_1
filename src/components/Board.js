import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (position) => {
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) return isXNext ? "X" : "O";
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };
  const renderState = (position) => {
    return (
      <Square value={board[position]} onClick={() => handleClick(position)} />
    );
  };
  return (
    <div>
      <div>
        {renderState(1)}
        {renderState(2)}
        {renderState(3)}
      </div>
      <div>
        {renderState(4)}
        {renderState(5)}
        {renderState(6)}
      </div>
      <div>
        {renderState(7)}
        {renderState(8)}
        {renderState(9)}
      </div>
    </div>
  );
};

export default Board;
