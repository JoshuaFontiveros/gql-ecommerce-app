const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { products, categories, reviews } = require("./db");
// const { products, categories } = require("./db");

// resolvers has three parameters = parent, args, context

// Scalar types - String, Int, Float, Boolean, ID
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
