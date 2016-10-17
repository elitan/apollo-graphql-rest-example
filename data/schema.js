const typeDefinitions = `
type User {
	id: Int
	name: String
	username: String
	email: String
	phone: String
	website: String
}

type Tree {
	id: Int
	name: String
}

type Query {
	user(id: Int, name: String): User
	tree(id: Int): Tree
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
