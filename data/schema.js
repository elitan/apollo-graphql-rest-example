const typeDefinitions = `
type User {
	id: Int
	name: String
	username: String
	email: String
	phone: String
	website: String
}

type Query {
	user(id: Int, name: String): User
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
