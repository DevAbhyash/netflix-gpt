import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/9070283d-82ca-47f7-8a99-d49ea3afa60a/AU-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  w-full bg-gray-500"
          />
        )}
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Phone Number"
            className="p-4 my-4  w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-500"
        />
        <button className="p-4 m-4 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
