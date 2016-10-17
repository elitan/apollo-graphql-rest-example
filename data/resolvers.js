import { API } from './connectors';

const resolvers = {
	Query: {
		user(_, args) {
			return API.getUser(args.id);
		},
		tree(_, args) {
			return API.getTree(args.id)
		}
	},
};

export default resolvers;
