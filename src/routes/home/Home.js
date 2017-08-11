import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import SearchArea from '../../components/SearchArea';
import PostCard from '../../components/PostCard';
import Pagination from '../../components/Pagination';
import OtherLink from '../../components/OtherLink';

class Home extends React.Component {

  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        categoryName: PropTypes.string.isRequired,
        categoryUrl: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={ s.contentIn }>
        <h1>投稿一覧</h1>
        <SearchArea />
        <div className={ s.postList }>
          <ul className={ s.postAlign }>
          {
            this.props.posts.map((item) =>
              <li key={ item.url }>
                <PostCard
                  title={ item.title }
                  url={ item.url }
                  thumb={ item.thumb }
                  categoryName={ item.categoryName }
                  categoryUrl={ item.categoryUrl }
                  createdAt={ item.createdAt } />
              </li>
            )
          }
          </ul>
        </div>
        <Pagination />
        <OtherLink />
      </div>
    );
  }
}

export default withStyles(s)(Home);
