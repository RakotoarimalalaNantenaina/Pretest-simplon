import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Redirect } from 'react-router-dom';
const axios = require('axios');
class Headeradmin extends Component {
  constructor(props) {
   
    super(props);

    this.state = {
      nomUtilisateur: '',
      password:'',
      email:'',
    };
    this.onChange = this.onChange.bind(this)
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/admin' />
    }
  }
 
  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

register() {
  axios.post('http://localhost:8080/register', {
    nomUtilisateur: this.state.nomUtilisateur,
    email: this.state.email,
    password: this.state.password
})
    .then(function (response) {
      localStorage.setItem('Profil', response.data.nomUtilisateur);
       console.log('get item io e :',localStorage.setItem('Profil'));
    })
    .catch(function (error) {
        console.log(error);
    });
}

  render() {
    return (
      <div>
         {this.renderRedirect()}
        <MDBNavbar dark expand="md" id="navbar">
          <MDBNavbarBrand>
            <strong className="white-text">E-COM</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler/>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav center>
              <MDBNavItem active>
                <MDBNavLink to="#!" className="nav-header">ADMINISTRATION</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!" className="nav-header" >Deconnexion</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Headeradmin;