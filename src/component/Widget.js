import React, { useState } from "react";
import "./Widget.css";

const Widget = () => {
  const [srcNumSystem, setSrcNumSystem] = useState("");
  const [targetNumSystem, setTargetNumSystem] = useState("");
  const [numToConvert, setNumToConvert] = useState("");
  const [resultNumber, setResultNumber] = useState("");

  const handleInput = (event) => {
    try {
      let value = " ";
      //preventing pasting floating point numbers
      if (event.target.name !== "numToConvert" && event.target.value !== "") {
        console.log("tera " + event.target.value);
        value = Math.round(event.target.value);
      } else {
        value = event.target.value;
      }

      if (
        value === 0 ||
        event.target.value === "0" ||
        event.target.value.startsWith("0")
      ) {
        throw new UserException("The number must be greater than 0!");
      }

      if (event.target.name === "sourceNumSys") {
        setSrcNumSystem(value);
      } else if (event.target.name === "targetNumSys") {
        setTargetNumSystem(value);
      } else if (event.target.name === "numToConvert") {
        setNumToConvert(value);
      }
    } catch (e) {
      alert(e.message);
      console.log(e.message, e.name);
    }
  };

  function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }

  const convertNumber = (event) => {
    try {
      const convertedNumber = parseInt(numToConvert, srcNumSystem).toString(
        targetNumSystem
      );
      setResultNumber(convertedNumber);
      if (isNaN(convertedNumber)) {
        throw new UserException(
          "Unknown calculation error\nHINT: Check if a given number to convert is in a correct numeral system!"
        );
      }
    } catch (e) {
      alert(e.message);
      console.log(e.message, e.name);
    }
    event.preventDefault();
  };

  const clearInput = (event) => {
    setSrcNumSystem("");
    setTargetNumSystem("");
    setNumToConvert("");
    setResultNumber("");
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
          type="number"
          placeholder="write a whole number > 0..."
          onKeyDown={(e) => {
            if (e.key.match(/^[0-9]+$/) === null && e.key === "27") {
              e.preventDefault();
            }
          }}
          maxLength="30"
        ></input>
      </div>
      <div className="input-div">
        <h3>Enter your target numeral system</h3>
        <input
          className="input-area"
          name="targetNumSys"
          onChange={handleInput}
          value={targetNumSystem}
          type="number"
          placeholder="write a whole number > 0..."
          onKeyDown={(e) => {
            if (e.key.match(/^[0-9]+$/) === null && e.key === 27) {
              e.preventDefault();
            }
          }}
          maxLength="30"
        ></input>
      </div>
      <div className="input-div">
        <h3>Enter a number to convert</h3>
        <input
          className="input-area"
          name="numToConvert"
          onChange={handleInput}
          value={numToConvert}
          type="text"
          placeholder="write a number > 0..."
          onKeyDown={(e) => {
            if (e.key.match(/^[A-Za-z0-9]+$/) === null) {
              e.preventDefault();
            }
          }}
          maxLength="30"
        ></input>
      </div>
      <div className="buttons">
        <button
          className="button convert-button"
          onClick={convertNumber}
          disabled={!srcNumSystem || !targetNumSystem || !numToConvert}
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
