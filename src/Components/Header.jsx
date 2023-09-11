import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { USER_AVATAR, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGptSearchVisible = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGptSearchClick = () => {
    ///Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    ///unsubscibe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="LOGO" />
      {user && (
        <div className="flex p-2">
          {isGptSearchVisible && (
            <select
              className="p-2 bg-gray-900 m-2 text-white"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className=" py-2 px-4 my-3 mx-4  bg-purple-800 text-white rounded-e-lg"
          >
            GPT Search
          </button>
          <img className=" w-12 h-12 " src={USER_AVATAR} alt="usericon" />
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
