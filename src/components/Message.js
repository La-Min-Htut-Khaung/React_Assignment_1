import React from "react";

const Message = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next Step is{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green"> X </span> &
          <span className="text-orange"> O </span> tied
        </>
      )}
    </div>
  );
};

export default Message;
