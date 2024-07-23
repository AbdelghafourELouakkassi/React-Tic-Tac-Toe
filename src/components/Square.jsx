import React from "react";

function Square({go,setGo,square,id,squaresArray,setSquaresArray,winMessage}) {

  const handleClick = () => {
    if (winMessage !== null) {
      return;
    }

    const notTaken = !squaresArray[id];

    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };
  const handleCellChange = (squareType) => {
    let copySquareArray = [...squaresArray];
    copySquareArray[id] = squareType;
    setSquaresArray(copySquareArray);
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={square}>
        {square == "circle" ? "o" : square == "cross" && "x"}
      </div>
    </div>
  );
}

export default Square;
