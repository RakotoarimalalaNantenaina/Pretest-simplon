import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import { Redirect } from 'react-router-dom';
class Headeradmin extends Component {

  renderRedirect = () => {
    if (localStorage.getItem('nom')==="false") {
      return <Redirect to='/' />
    }
  }
  deconnexion = () => {
    localStorage.setItem('nom', "false")
  }

  redirectlocal = ()=>{
    return <Redirect to='/'/>
  }

  state = {
    modal1: false
  }
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <div>
         {this.renderRedirect()}
        <MDBNavbar dark expand="md" id="navbar" fixed="top" scrolling>
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
                <MDBNavLink to="#!" className="nav-header" onClick={this.toggle(1)}>Deconnexion</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



        <MDBModal id="test1"
          isOpen={this.state.modal1}
          toggle={this.toggle(1)}
          centered
        >   
         <MDBModalHeader toggle={this.toggle(1)} className="text-center" titleClass="w-100">Déconnexion</MDBModalHeader>
        
          <MDBModalBody className="text-center" titleClass="w-100">
                  Voulez-vous vraiment deconnecter <strong>{localStorage.getItem('utilisateur')}</strong> ??
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">

         <a href="/" onClick={()=>{
            this.redirectlocal()
            this.deconnexion()
                         }} className="btn btn-danger">Oui</a>
            <button id="boutton-inscrire" className="btn btn-primary" onClick={this.toggle(1)}>Non</button>
          </MDBModalFooter>
        </MDBModal>

      </div>
    );
  }
}

export default Headeradmin;