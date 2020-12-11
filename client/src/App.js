import logo from './logo.svg';
import './App.css';

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";
import SearchFile from "./components/search-pubmed-files.component";

function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={UserList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/user" component={CreateUser} />
          <Route path="/search" component={SearchFile} />
        </div>
      </Router>
  );
}

export default App;

