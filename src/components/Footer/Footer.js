import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends Component {
  render() {
    return (
      <div className={ s.root }>
        <div className={ s.container }>
          <div className={ s.footerNavi }>
            <Link className={ s.link } to="http://www.monosus.co.jp/posts/">
              投稿一覧
            </Link>
            <Link className={ s.link } to="http://www.monosus.co.jp/service/">
              仕事のこと
            </Link>
            <Link className={ s.link } to="http://www.monosus.co.jp/company/">
              会社のこと
            </Link>
            <Link className={ s.link } to="http://www.monosus.co.jp/access/">
              会社を訪ねる
            </Link>
            <Link className={ s.link } to="http://www.monosus.co.jp/contact/">
              お問い合わせ
            </Link>
            <Link className={ s.link } to="http://www.monosus.co.jp/privacy/">
              個人情報保護方針
            </Link>
          </div>
          <p className={ s.copyright }>Copyright &copy; 2017 monosus, inc. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
