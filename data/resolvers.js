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
			console.log('comment: ', comment);
			console.log('post id: ', comment.postId);
			const post = API.getPost(comment.postId)
			return API.getPost(comment.postId);
		},
	}
};

export default resolvers;
