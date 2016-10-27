import { API } from './connectors';

const resolvers = {
	Query: {
		user(_, args) {
			return API.getUser(args.id);
		},
		post(_, args) {
			return API.getPost(args.id);
		}
	},
	Post: {
		user(post) {
			return API.getUser(post.userId);
		}
	}
};

export default resolvers;
