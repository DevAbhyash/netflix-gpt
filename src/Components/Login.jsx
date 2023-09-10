import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { validate } from "../utils/Validate";
import { useNavigate } from "react-router-dom";
import { BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isValidated, setIsValidated] = useState();
  ///
  const email = useRef();
  const password = useRef();
  const name = useRef();
  ///
  const navigate = useNavigate();
  ///
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  ///
  function handleClick() {
    const message = validate(email.current.value, password.current.value);
    setIsValidated(message);
    if (message) return;

    if (!isSignInForm) {
      ///sign in
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up logic
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setIsValidated(errorCode + "-" + errorMessage);
        });
    } else {
      ///signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setIsValidated("Successfully Logged In now");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsValidated(errorCode + "-" + errorMessage);
        });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={(e) => {
          return e.preventDefault();
        }}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  w-full bg-gray-500"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-500"
        />
        <button
          onClick={handleClick}
          className="p-4 m-4 bg-red-600 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="  text-red-600 font-bold  ">{isValidated}</p>

        <p className="py-4 font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " Are you new to netflix?Sign Up Now."
            : "Already a User?Please Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
