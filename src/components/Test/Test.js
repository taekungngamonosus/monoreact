import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.css';

class Test extends Component {

  render() {
    return (
      <div>
        <p>asdas</p>
      </div>
    );
  }
}

export default withStyles(s)(Test);
