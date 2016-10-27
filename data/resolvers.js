import { API } from './connectors';

const resolvers = {
	Query: {
		user(_, args) {
			return API.getUser(args.id);
		},
	},
};

export default resolvers;
