import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const jsonData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await jsonData.json();
    console.log(data);
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useNowPlayingMovies;
