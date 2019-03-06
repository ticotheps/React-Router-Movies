import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    console.log("Constructor in SavedList.js is running.");
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink exact activeClassName="saved-active" to={`/movies/${movie.id}`}>
            <span id={movie.id} className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to="/"><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
