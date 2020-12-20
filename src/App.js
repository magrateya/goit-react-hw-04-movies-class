// import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';

import s from './App.module.css';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to="/" className={s.navLink} activeClassName={s.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={s.navLink} activeClassName={s.active}>
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
