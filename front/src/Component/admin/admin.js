import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Post from './Post.produit';
import Get from './Listeproduit';

class Admin extends Component {
    render() {
      return (
        <Router>
        <div className="container-fluid">
        <button>Deconnexion</button>
          <Route path="/admin"  component={Post} /><br/>
          <Route path="/admin"  component={Get} />
        </div>
      </Router>     
      )
    }
  }
  export default Admin;