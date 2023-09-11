import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux/es/hooks/useSelector";
import openai from "../utils/openAi";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.config.lang);
  const inputValue = useRef(null);

  //Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchText = inputValue.current.value;
    // //Make an Api call to get movie results rom the chatGPT.
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the query" +
    //   searchText +
    //   "only give me names of 5 movies,comma seperated like the example result.Example Result:Gaddar,Sholay,Don,Golmaal,Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResults) {
    //   <p> Error occured ? ? Cant fetch </p>;
    // }
    // const gptMovies = gptResults.choices.messages.content.split(",");
    const gptMovies = ["don", "tamasha", "Sultan", "jab tak hai jaan", "hero"];
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2  bg-black grid grid-cols-12"
      >
        <input
          ref={inputValue}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />{" "}
        <button
          className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {" "}
          {lang[currentLanguage].search}{" "}
        </button>{" "}
        x{" "}
      </form>{" "}
    </div>
  );
};

export default GptSearchBar;
