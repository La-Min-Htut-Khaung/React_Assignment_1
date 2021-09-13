import React from "react";
import Square from "./Square";

const Board = ({ board, handleClick }) => {
  const renderState = (position) => {
    return (
      <Square value={board[position]} onClick={() => handleClick(position)} />
    );
  };
  return (
    <div>
      <div>
        {renderState(0)}
        {renderState(1)}
        {renderState(2)}
      </div>
      <div>
        {renderState(3)}
        {renderState(4)}
        {renderState(5)}
      </div>
      <div>
        {renderState(6)}
        {renderState(7)}
        {renderState(8)}
      </div>
    </div>
  );
};

export default Board;
