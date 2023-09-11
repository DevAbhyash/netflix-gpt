import React, { Fragment, useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useUpcommingMovies from "../hooks/useUpcommingMovies";

import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovie();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <Fragment>
          <MainContainer />
          <SecondaryContainer />
        </Fragment>
      )}
    </div>
  );
};

export default Browse;
