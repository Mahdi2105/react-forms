import React from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouch, setNameTouch] = useState(false);

  const nameVal = enteredName.trim() !== "";
  const nameInputInvalid = !nameVal && nameTouch;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setNameTouch(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setNameTouch(true);

    if (!nameVal) {
      console.log("Please enter a value");
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setNameTouch(false);
  };

  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameInputInvalid && (
            <p className="error-text">PLEASE ENTER A NAME</p>
          )}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SimpleInput;
