import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pagination.css';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.pageIndex = [1, 2, 3, 4, 5, 6, 7];
  }

  renderItem() {
    let isActiveClass = s.isActive;
    return this.pageIndex.map( (row, index) =>
      <li>
        <a href={ index } className={ index===0 ? isActiveClass:'' }>{ row }</a>
      </li>
    )
  }

  render() {
    return (
      <div className={ s.pagination }>
        <ul>
          { this.renderItem() }
          <li className={ s.next }>
            <a href="#">next</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Pagination);
