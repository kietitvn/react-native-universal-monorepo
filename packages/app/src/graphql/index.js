import { ApolloClient, InMemoryCache } from "@apollo/client";

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "https://api.graphql.guide/graphql",
  cache: new InMemoryCache(),
});
