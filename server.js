import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';

import resolvers from './data/resolvers';

import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';


const GRAPHQL_PORT = 8081;

const graphQLServer = express();

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: resolvers,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  preserveResolvers: true,
});

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {}, //at least(!) an empty object
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// const graphQLServer = express();
// graphQLServer.use('/graphql', apolloServer({
// 	graphiql: true,
// 	pretty: true,
// 	schema: Schema,
// 	resolvers: resolvers,
// 	//mocks: Mocks,
// }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
	`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
