import React from "react";
import Square from "./Square";

const Board = ({ board, handleClick, winningSquares }) => {
  const renderState = (position) => {
    const isWinningSquares = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleClick(position)}
        isWinningSquares={isWinningSquares}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderState(0)}
        {renderState(1)}
        {renderState(2)}
      </div>
      <div className="board-row">
        {renderState(3)}
        {renderState(4)}
        {renderState(5)}
      </div>
      <div className="board-row">
        {renderState(6)}
        {renderState(7)}
        {renderState(8)}
      </div>
    </div>
  );
};

export default Board;
