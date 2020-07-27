import Post from '../../models/post.model';

export default {
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { data }) => await Post.create(data),
    updatePost: async (_, { id, data }) =>
      await Post.findByIdAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
  },
};
