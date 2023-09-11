import React from "react";
import lang from "../utils/languageConstants";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />{" "}
        <button className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3">
          {" "}
          {lang[currentLanguage].search}{" "}
        </button>{" "}
        x{" "}
      </form>{" "}
    </div>
  );
};

export default GptSearchBar;
