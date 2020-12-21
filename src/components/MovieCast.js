import React, { Component } from 'react';
import { fetchCast } from '../services/FetchApi';

export default class MovieCast extends Component {
  state = {
    film: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log(movieId);

    fetchCast(movieId)
      .then(data => {
        this.setState(() => ({
          film: [...data.cast],
        }));
        // console.log(data);
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    // console.log(this.state.film);
    return (
      <>
        <h2>MovieCast</h2>
        <ul>
          {this.state.film.map(film => (
            <li key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${film.profile_path}`}
                alt={film.character}
              ></img>
              {film.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
