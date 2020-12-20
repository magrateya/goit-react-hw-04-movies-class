import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchFilms } from '../services/FetchApi';

// import PopularFilmsList from '../components/PopularFilmsList';

class HomePage extends Component {
  // return (
  //   <>
  //     <h1>home page</h1>
  //     <PopularFilmsList />
  //   </>
  // );
  state = {
    filmsList: [],
    error: null,
  };

  componentDidMount() {
    fetchFilms()
      .then(data => {
        console.log(data);
        this.setState(() => ({
          filmsList: [...data],
        }));
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    console.log(this.props.match.url);

    return (
      <ul>
        {this.state.filmsList.map(film => (
          <li key={film.id}>
            <Link to={`${this.props.match.url}movies/${film.id}`}>
              {film.title ?? film.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
