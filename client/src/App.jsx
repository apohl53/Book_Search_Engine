import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { apolloClient } from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;

// App.jsx: Create an Apollo Provider to make every request work with the Apollo server.
