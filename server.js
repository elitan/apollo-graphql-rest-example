import express from 'express';
import Schema from './data/schema';
import Resolvers from './data/resolvers';
// import Mocks from './data/mocks';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = 8081;

const graphQLServer = express();
graphQLServer.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200);
    } else {
      next();
    }
});

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: false,
  printErrors: true,
});


// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: executableSchema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
