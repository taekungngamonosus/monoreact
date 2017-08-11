import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PostCard.css';

class PostCard extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    categoryUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={ s.postCard }>
        <figure className={ s.postImage }>
          <a href={ this.props.url }>
            <img src={ this.props.thumb } />
          </a>
        </figure>
        <div className={ s.cardInfo }>
          <p className={ s.date }>{ this.props.createdAt }</p>
          <a href={ this.props.url }>
            <h2 className={ s.title }
              dangerouslySetInnerHTML={{ __html: this.props.title }} />
          </a>
          <a href={ this.props.categoryUrl } className={ s.category }>
            <span>{ this.props.categoryName }</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PostCard);
