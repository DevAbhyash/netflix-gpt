import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useUpcommingMovies from "../hooks/useUpcommingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovie();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
