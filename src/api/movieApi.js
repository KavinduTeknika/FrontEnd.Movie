import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/movies";

export function getMovies(movie) {
  return fetch(baseUrl )//+ (movie || movie.fromReleasedYear || "") + (movie.toReleasedYear || ""))
    .then(handleResponse)
    .catch(handleError);
}
