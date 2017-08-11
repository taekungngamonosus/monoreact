import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {

  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{ posts{title,url,thumb,categoryName,categoryUrl,createdAt} }',
    }),
  });

  const data = await resp.json();
  console.log(data);

  // if (!data || !data.news) throw new Error('Failed to load the news feed.');
  if (!data || !data.data.posts) throw new Error('Failed to load the news feed.');

  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Home posts={data.data.posts} />
      </Layout>
    ),
  };
}

export default action;

// <Home news={data.news} posts={data.data.posts} />
