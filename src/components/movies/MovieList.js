import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => (
  <table className="table">
    <thead>
      <tr>        
        <th>Title</th>
        <th>Price</th>
        <th>Released year</th>       
      </tr>
    </thead>
    <tbody>
      {movies.map(movie => {
        return (
          <tr key={movie.MovieTitle}>
            <td>{movie.MovieTitle}</td>
            <td>{movie.Price}</td>
            <td>{movie.ReleasedYear}</td>       
          </tr>
        );
      })}
    </tbody>
  </table>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
