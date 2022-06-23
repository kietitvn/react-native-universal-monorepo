import React from "react";
import "./locales";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import RootComponent from "./App";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
};
