import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
function Home() {
  return (
    <div className="App">
          Home
     </div>
  );
}

export default Home;
