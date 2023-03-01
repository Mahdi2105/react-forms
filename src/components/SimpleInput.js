import React from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");

  // // const [nameTouch, setNameTouch] = useState(false);
  // const [emailTouch, setEmailTouch] = useState(false);
  // const [formVal, setFormVal] = useState(false);

  // const nameVal = enteredName.trim() !== "";
  // const nameInputInvalid = !nameVal && nameTouch;

  // const emailVal = enteredEmail.includes("@");
  // const emailInputInvalid = !emailVal && emailTouch;

  let formVal = false;

  // This would be used if I had more than 1 form input
  // useEffect(() => {
  if (nameIsValid && emailIsValid) {
    formVal = true;
  }
  // Don't need else case as it's set to false anyways (line 12)
  // else {
  //   formVal = false;
  // }
  // }, [nameVal]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      console.log("Please enter a name");
      return;
    }

    if (!emailIsValid) {
      console.log("Please enter a valid email");
      return;
    }

    console.log(`Name: ${enteredName} Email: ${enteredEmail}`);
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
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
          {nameHasError && <p className="error-text">PLEASE ENTER A NAME</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {emailHasError && (
            <p className="error-text">PLEASE ENTER AN EMAIL WITH @</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formVal}>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SimpleInput;
