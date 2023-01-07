import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/list" element={<List />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
