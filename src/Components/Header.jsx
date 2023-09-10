import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className=" w-12 h-12 "
            src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className=" w-20 h-12 font-bold text-white  border-2 border-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
