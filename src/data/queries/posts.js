import { GraphQLList as List } from 'graphql';
import fetch from 'isomorphic-fetch';
import PostType from '../types/PostType';

// import database from '../database.json';
const url = 'http://demo3644099.mockable.io/monosusapi';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const posts = {
  type: new List(PostType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
      // lastFetchTask = fetch(database)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            items = data.posts;
          }

          lastFetchTask = null;
          return items;
        })
        .catch(err => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default posts;
