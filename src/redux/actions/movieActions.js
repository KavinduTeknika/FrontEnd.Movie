import * as types from "./actionTypes";
import * as movieApi from "../../api/movieApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadMovieSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function loadMovies() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return movieApi
      .getMovies()
      .then(movies => {
        dispatch(loadMovieSuccess(movies));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
