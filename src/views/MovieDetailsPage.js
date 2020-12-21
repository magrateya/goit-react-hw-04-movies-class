import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { fetchFilm } from '../services/FetchApi';
import MovieCast from '../components/MovieCast';
import MovieReviewers from '../components/MovieReviewers';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchFilm(movieId)
      .then(data => {
        this.setState({ ...data });
        // console.log(data);
      })
      .catch(error => console.log(error));
  }
  render() {
    // console.log(this.props.match.url);
    // console.log(this.state);
    return (
      <>
        <h1>1 MovieDetailsPage page {this.props.match.params.movieId}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w300${this.state.poster_path}`}
          alt={this.state.title}
        ></img>
        <h2>
          {this.state.title} ({this.state.release_date})
        </h2>
        {this.state.overview && <p>{this.state.overview}</p>}
        <p>{this.state.popularity}</p>
        <p>{this.state.movie.genres}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          // path="/movies/:movieId/cast"
          path={`${this.props.match.path}/cast`}
          component={MovieCast}
        ></Route>
        <Route
          path={`${this.props.match.path}/reviews`}
          component={MovieReviewers}
        ></Route>
      </>
    );
  }
}

export default MovieDetailsPage;
