import { combineReducers } from "redux";
import movies from "./movieReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  movies,
  apiCallsInProgress
});

export default rootReducer;
