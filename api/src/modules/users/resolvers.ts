import User from '../../models/user.model';
import Post from '../../models/post.model';
import { USER_ADDED } from './channels';

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
    post: async (user) => await Post.find({ author: user._id }),
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }, { pubsub }) => {
      const user = await User.create(data);

      pubsub.publish(USER_ADDED, {
        userAdded: user,
      });

      return user;
    },
    updateUser: async (_, { id, data }) =>
      await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id)),
  },
  //  Para subscriptions tem que seguir essa estrutura
  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED),
    },
  },
};
