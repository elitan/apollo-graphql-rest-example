import { API } from './connectors';

const resolvers = {
	Query: {
		user(_, args) {
			return API.getUser(args.id);
		},
		post(_, args) {
			return API.getPost(args.id);
		},
		comment(_, args) {
			return API.getComment(args.id);
		},
	},
	User: {
		address(user) {
			return user.address;
		}
	},
	Post: {
		user(post) {
			return API.getUser(post.userId);
		},
		comments(post) {
			return API.getCommentsFromPost(post.id)
		}
	},
	Comment: {
		post(comment) {
			return API.getPost(comment.postId);
		},
	}
};

export default resolvers;
