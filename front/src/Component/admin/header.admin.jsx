import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Redirect } from 'react-router-dom';
class Headeradmin extends Component {

  renderRedirect = () => {
    if (localStorage.getItem('nom')=='false') {
      return <Redirect to='/' />
    }
  }
  deco = () => {
    localStorage.setItem('nom', 'false')
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
          <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav center>
              <MDBNavItem active>
                <MDBNavLink to="" className="nav-header">ADMINISTRATION</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header" onClick={this.deco}>Deconnexion</MDBNavLink>
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