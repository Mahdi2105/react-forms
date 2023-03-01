import React from "react";
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState();
  const [nameVal, setNameVal] = useState(false);
  const [nameTouch, setNameTouch] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setNameTouch(true);

    if (nameInputRef.current.value.trim() !== "") {
      setNameVal(true);
      const enteredValue = nameInputRef.current.value;
      console.log(enteredValue);
      // nameInputRef.current.value = "";
      console.log(`Name state: ${enteredName}`);
    } else {
      setNameVal(false);
      console.log("Please enter a value");
      return;
    }
  };

  const nameInputInvalid = !nameVal && nameTouch;

  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
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
