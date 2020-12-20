import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchPopular from '../services/FetchApi';

export default class PopularFilmsList extends Component {
  state = {
    filmsList: [],
    error: null,
  };

  componentDidMount() {
    fetchPopular
      .fetchFilms()
      .then(data => {
        this.setState(() => ({
          filmsList: [...data],
        }));
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    console.log(this.props);

    return (
      <ul>
        {this.state.filmsList.map(film => (
          <li key={film.id}>
            <Link to="">{film.title ?? film.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
