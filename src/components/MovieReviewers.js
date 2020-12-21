import React, { Component } from 'react';
import { fetchReviewers } from '../services/FetchApi';

export default class MovieReviewers extends Component {
  state = {
    reviewers: {},
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log(movieId);

    fetchReviewers(movieId)
      .then(data => {
        this.setState(() => ({
          reviewers: { ...data.results[0] },
        }));
        // console.log(data.results[0]);
      })
      .catch(error => this.setState({ error: error }));
  }

  render() {
    // console.log(this.state);
    console.log(this.state.reviewers);
    return (
      <>
        <h2>MovieReviewers</h2>
        {this.state.reviewers.author && <p>{this.state.reviewers.author}</p>}
        {this.state.reviewers.content && <p>{this.state.reviewers.content}</p>}
      </>
    );
  }
}
