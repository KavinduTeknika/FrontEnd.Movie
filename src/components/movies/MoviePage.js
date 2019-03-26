import React from "react";
import { connect } from "react-redux";
import * as movieActions from "../../redux/actions/movieActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MovieList from "./MovieList";
import Spinner from "../common/Spinner";
import TextInput from "../common/TextInput";

class MoviePage extends React.Component {
  state = { };

  componentDidMount() {
    const { movies, actions } = this.props;

    if (movies.length === 0) {
      actions.loadMovies().catch(error => {
        alert("Loading movies failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Movies</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <MovieList movies={this.props.movies}
            />
          </>
        )}
      </>
    );
  }
}

MoviePage.propTypes = {
  movies: PropTypes.array.isRequired  
};

function mapStateToProps(state) {
  return {
    movies: state.movies.map(movie => {
              return {
                  ...movie
            };
          }),
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: bindActionCreators(movieActions.loadMovies, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
