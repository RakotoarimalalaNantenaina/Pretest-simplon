import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './Component/admin/admin';
import Accueil from './Accueil.jsx';
import './App.css';


 class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Router>
        <div>
      <Route path="/" exact component={Accueil} /><br/>
      <Route path="/admin" component={Admin} /><br/>
      </div>
    </Router>  
    </div>   
    )
  }
}
export default App;