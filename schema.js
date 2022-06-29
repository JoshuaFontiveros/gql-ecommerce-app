const { gql } = require("apollo-server");
// Scalar Types - String, Int, Float, Boolean, ID!
exports.typeDefs = gql`
  #  If you want to be strict in types, prepend ! at the end.
  type Query {
    hello: [String!]!
    products(filter: ProductsFilterInput): [Product!]!
    # Below, product with parameter id query a specific product
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    reviews: [Review!]!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean!
  }
`;
