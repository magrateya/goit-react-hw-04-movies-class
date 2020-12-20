import React, { Component } from 'react';

import { fetchFilm } from '../services/FetchApi';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchFilm(movieId)
      .then(data => {
        this.setState({ ...data });
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <>
        <h1>1 MovieDetailsPage page {this.props.match.params.movieId}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w300${this.state.poster_path}`}
          alt={this.state.title}
        ></img>
        <h2>{this.state.title}</h2>
        {this.state.overview && <p>{this.state.overview}</p>}
        <p>{this.state.popularity}</p>
        <p>{this.state.movie.genres}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
