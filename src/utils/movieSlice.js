import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    upcommingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: function (state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: function (state, action) {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: function (state, action) {
      state.trendingMovies = action.payload;
    },
    addUpcommingMovies: function (state, action) {
      state.upcommingMovies = action.payload;
    },
    addTrailerVideo: function (state, action) {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpcommingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
