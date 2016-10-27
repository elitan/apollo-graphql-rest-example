const typeDefinitions = `
type User {
	id: Int!
	name: String!
	username: String
	email: String
	phone: String
	website: String
	address: UserAddress
}

type UserAddress {
	street: String
	suite: String
	city: String
	zipcode: String
}

type Post {
	id: Int
	user: User
	title: String
	body: String
	comments: [Comment]
}

type Comment {
	id: Int
	post: Post
	name: String
	email: String
	body: String
}

type Query {
	user(id: Int): User
	post(id: Int): Post
	comment(id: Int): Comment
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
