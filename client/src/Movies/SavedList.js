import React, { Component } from 'react';

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
          <span id={movie.id} className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button">Home</div>
      </div>
    );
  }
}
