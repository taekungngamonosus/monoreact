import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={ s.headerNaviWrap }>
        <div className={ s.globalNavi }>
          <ul>
            <li className={ s.isActive }>
              <Link className={ cx(s.link, s.postsItem) } to="/posts">
                投稿一覧
              </Link>
            </li>
            <li>
              <Link className={ cx(s.link, s.serviceItem) } to="/service">
                仕事のこと
              </Link>
            </li>
            <li>
              <Link className={ cx(s.link, s.companyItem) } to="/company">
                会社のこと
              </Link>
            </li>
            <li>
              <Link className={ cx(s.link, s.accessItem) } to="/access">
                会社を訪ねる
              </Link>
            </li>
            <li>
              <Link className={ cx(s.link, s.contactItem) } to="/contact">
                お問い合わせ
              </Link>
            </li>
            <li className={ s.disabledActive }>
              <Link className={ cx(s.link, s.monosusItem) } to="/">
                monosus
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
