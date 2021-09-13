import React from "react";

const History = ({ history }) => {
  return (
    <ul>
      {history.map((his) => {
        return <li key={his.id}>{his}</li>;
      })}
    </ul>
  );
};

export default History;
