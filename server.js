import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';

import resolvers from './data/resolvers';

const GRAPHQL_PORT = 8081;

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
	graphiql: true,
	pretty: true,
	schema: Schema,
	resolvers: resolvers,
	//mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
	`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
