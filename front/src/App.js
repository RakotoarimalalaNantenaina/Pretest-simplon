import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Component/admin/header';
import Admin from './Component/admin/admin';
import Accueil from './Accueil.jsx';
import Produit from './Component/admin/Listeproduit';
import './App.css';


 class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="container-fluid">
      <Header/>
      <Route path="/" exact component={Accueil} /><br/>
      <Route path="/admin" component={Admin} /><br/>
      </div>
    </Router>  
    <Produit/>
    </div>   
    )
  }
}
export default App;