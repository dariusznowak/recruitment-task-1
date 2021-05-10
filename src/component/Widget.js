import React, { useState } from "react";
import "./Widget.css";

const Widget = () => {
  const [srcNumSystem, setSrcNumSystem] = useState("");
  const [targetNumSystem, setTargetNumSystem] = useState("");
  const [numToConvert, setNumToConvert] = useState("");
  const [resultNumber, setResultNumber] = useState("");

  const handleInput = (event) => {
    if (event.target.name === "sourceNumSys") {
      setSrcNumSystem(event.target.value);
    } else if (event.target.name === "targetNumSys") {
      setTargetNumSystem(event.target.value);
    } else if (event.target.name === "numToConvert") {
      setNumToConvert(event.target.value);
    }
  };

  const convertNumber = (event) => {
    const convertedNumber = parseInt(numToConvert, srcNumSystem).toString(
      targetNumSystem
    );
    console.log(convertedNumber);
    setResultNumber(convertedNumber);
    event.preventDefault();
  };

  const clearInput = (event) => {
    setSrcNumSystem("");
    setTargetNumSystem("");
    setNumToConvert("");
    event.preventDefault();
  };

  return (
    <form className="widget">
      <div className="input-div">
        <h3>Enter your source numeral system</h3>
        <input
          className="input-area"
          name="sourceNumSys"
          onChange={handleInput}
          value={srcNumSystem}
        ></input>
      </div>
      <div className="input-div">
        <h3>Enter your target numeral system</h3>
        <input
          className="input-area"
          name="targetNumSys"
          onChange={handleInput}
          value={targetNumSystem}
        ></input>
      </div>
      <div className="input-div">
        <h3>Enter a number to convert</h3>
        <input
          className="input-area"
          name="numToConvert"
          onChange={handleInput}
          value={numToConvert}
        ></input>
      </div>
      <div className="buttons">
        <button
          className="button convert-button"
          onClick={convertNumber}
          disabled={
            !srcNumSystem ||
            !srcNumSystem.trim() ||
            !targetNumSystem ||
            !targetNumSystem.trim() ||
            !numToConvert ||
            !numToConvert.trim()
          }
        >
          Convert
        </button>
        <button className="button clear-button" onClick={clearInput}>
          Clear
        </button>
      </div>
      <div className="result-box">
        Result: <span>{resultNumber}</span>
      </div>
    </form>
  );
};

export default Widget;
