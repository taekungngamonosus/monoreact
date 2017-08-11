import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './OtherLink.css';

import Link from '../Link';

class OtherLink extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ s.otherLink }>
        <ul>
          <li>
            <Link className={s.category} to="http://www.monosus.co.jp/posts/category/">
              <span>コーナーで探す</span>
            </Link>
          </li>
          <li>
            <Link className={s.author} to="http://www.monosus.co.jp/posts/author/author4fde1/">
              <span>投稿者で探す</span>
            </Link>
          </li>
          <li>
            <Link className={s.date} to="http://www.monosus.co.jp/posts/2017/07/">
              <span>カレンダーで探す</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(OtherLink);
