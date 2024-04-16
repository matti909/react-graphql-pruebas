import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import Clients from "./components/Client";
import Header from "./components/Header";
import AddClient from "./components/addClient";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClient />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
