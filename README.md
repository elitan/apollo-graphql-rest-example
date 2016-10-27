Solution to [Tutorial: How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs)


```sh
git clone git@github.com:elitan/apollo-graphql-rest-example.git
cd apollo-graphql-rest-example
npm install
npm start
```

Then open [http://localhost:8080/graphiql](http://localhost:8080/graphiql)

When you paste this on the left:

```
{
    user(id: 1) {
        name
        address {
            street
            zipcode
        }
    }
}
```

or
```
{
    post(id: 1) {
        user {
            name
            username
            phone
        },
        comments{
            body
            email
        }
    }
}
```

or .. ( you get the point).

The result should emerge on the right. You can see in the terminal where you started the server (`npm start`) what request(s) that was made.
