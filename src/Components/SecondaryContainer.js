import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.popularMovies);

  return (
    <div className="  bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"NOW PLAYING"} movies={movies.nowPlayingMovies} />{" "}
        <MovieList title={"POPULAR"} movies={movies.popularMovies} />{" "}
        <MovieList title={"TRENDING"} movies={movies.trendingMovies} />{" "}
        <MovieList title={"UPCOMMING"} movies={movies.upcommingMovies} />{" "}
      </div>{" "}
    </div>
  );
};

export default SecondaryContainer;
