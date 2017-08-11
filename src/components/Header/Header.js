import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

class Header extends Component {
  render() {
    return (
      <header className={ s.header }>
        <div className={ s.headerWrap }>
          <div className={ s.headerInner }>
            <h1>
              <Link to="/">ものさす</Link>
            </h1>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
