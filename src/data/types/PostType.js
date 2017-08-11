import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PostType = new ObjectType({
  name: 'Post',
  fields: {
    title: { type: new NonNull(StringType) },
    url: { type: new NonNull(StringType) },
    thumb: { type: new NonNull(StringType) },
    categoryName: { type: new NonNull(StringType) },
    categoryUrl: { type: new NonNull(StringType) },
    createdAt: { type: new NonNull(StringType) },
  }
});

export default PostType;
