import React, { useState } from "react";
import Board from "./components/Board";
import "./root.css";
import { calculateWinner } from "./shared/CalculateWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next Player is ${winner}`;

  const handleClick = (position) => {
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) return isXNext ? "X" : "O";
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };
  return (
    <>
      <h2>{message}</h2>
      <Board board={board} handleClick={handleClick} />
    </>
  );
}

export default App;
