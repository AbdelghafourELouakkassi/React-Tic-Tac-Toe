import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squaresArray, setSquaresArray] = useState([ "","","","","","","","",""]);
  const [go, setGo] = useState("circle");
  const [winMessage, setWinMessage] = useState(null);

  const winingCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    winingCombos.forEach((combo) => {
      const circleWins = combo.every(
        (square) => squaresArray[square] === "circle"
      );
      const crossWins = combo.every(
        (square) => squaresArray[square] === "cross"
      );
      const squaresNotEmpty = squaresArray.every((square) => square !== "");

      if (circleWins) {
        setWinMessage("Cricle has won");
      } else if (crossWins) {
        setWinMessage("Cross has won");
      } else if (squaresNotEmpty && winMessage === null) {
        setWinMessage("Draw!");
      }
    });
  }, [squaresArray]);

  return (
    <div className="container">
      <h1>tic-tac-toe</h1>
      <div className="board">
        {squaresArray.map((square, index) => {
          return (
            <Square
              id={index}
              square={square}
              go={go}
              setGo={setGo}
              squaresArray={squaresArray}
              setSquaresArray={setSquaresArray}
              winMessage={winMessage}
              key={index}
            />
          );
        })}
      </div>
      {winMessage === null ? (
        <h2>it's now {go} turn</h2>
      ) : (
        <h2>{winMessage}</h2>
      )}
    </div>
  );
}



export default App;
