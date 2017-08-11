import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchArea.css';

class SearchArea extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Search: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={ s.searchArea }>
        <h2>
          <span className={ s.searchIcon }>キーワードで探す</span>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" className={ s.btnSearch } />
        </form>
      </div>
    );
  }
}

export default withStyles(s)(SearchArea);
