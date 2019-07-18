import React, { Component } from 'react'
import Post from './Post.produit';
import Tableau from './tableau.produit';
import Headeradmin from './header.admin';

class Admin extends Component {
    render() {
      return (
        <div className="container-fluid">
            <Headeradmin/><br/>
            <Post/><br/><br/>
            <Tableau/>
        </div>
      )
    }
  }
  export default Admin;