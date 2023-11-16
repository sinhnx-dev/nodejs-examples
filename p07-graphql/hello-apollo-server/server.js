import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
type Product {
  id: String!
  name: String
  price: Float
  description: String
}
type Query {
  products: [Product]
}
`;

const products = [
  {
    id: "1",
    name: 'PlayStation 5',
    price: 599,
    description: 'Sony',
  }, {
    id: "2",
    name: 'Xbox',
    price: 499,
    description: 'Microsoft',
  }, {
    id: "3",
    name: 'Switch',
    price: 399,
    description: 'Nintendo',
  },
];

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server)

console.log(`🚀 Server ready at ${url}`)