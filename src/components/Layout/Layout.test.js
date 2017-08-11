import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <App context={{ insertCss: () => {} }}>
          <Layout>
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
