const typeDefinitions = `
type User {
	id: Int!
	name: String!
	username: String
	email: String
	phone: String
	website: String
}

type Post {
	id: Int
	user: User
	title: String
	body: String
}

type Query {
	user(id: Int): User
	post(id: Int): Post
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
