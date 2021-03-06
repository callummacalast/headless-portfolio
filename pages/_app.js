import "../styles/index.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
