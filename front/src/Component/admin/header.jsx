import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline } from "mdbreact";
import { MDBModal, MDBBtn,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBInput } from "mdbreact";
import { Redirect } from 'react-router-dom';
const axios = require('axios');
class SideNavPage extends Component {

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal14: false,
    collapseID: "",
  }

  constructor(props) {

    super(props);

    this.state = {
      nomUtilisateur: '',
      password: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderRedirect = () => {
    if (localStorage.getItem('nom') == 'true') {
      return <Redirect to='/admin' />
    }
    else {
      return <Redirect to='/'/>
    }
  }

  conn = () => {
    localStorage.setItem('nom', 'true')
  }


  register() {
    axios.post('http://localhost:8080/register', {
      nomUtilisateur: this.state.nomUtilisateur,
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log('response', response.data.nomUtilisateur);
        localStorage.setItem('nom', 'true')
        localStorage.setItem('utilisateur', response.data.nomUtilisateur)
        console.log('local STORAGE :', localStorage.getItem('nom'));
        console.log("Utilisateur io e: ",  localStorage.getItem('utilisateur'));
        

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login() {
    axios.post('http://localhost:8080/login', {
      nomUtilisateur: this.state.nomUtilisateur,
      password: this.state.password
    })
      .then(function (response) {
          
          console.log('data: ',this.state.nomUtilisateur);

        if (response.data) {

          console.log('test');
          
          localStorage.setItem('nom', 'true')
        
        } else {
          console.log('else io e');
          
          localStorage.setItem('nom', 'false')
        }

        console.log('response', response.data);

        //  console.log('local STORAGE :',localStorage.getItem('nom'));

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  //popops login fonction 
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  render() {
  
  
    return (
      <div className="container">
        {this.renderRedirect()}
        <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar" fixed="top" scrolling>
          <MDBNavbarBrand>
            <strong className="white-text">E-COM</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem >
                <MDBNavLink to="" className="nav-header" onClick={this.toggle(5)}>A propos</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header">Produits</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header">Contacts</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header" rounded onClick={this.toggle(2)}>Inscription</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Recherche produit" aria-label="Recherche produit" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



           {/*A PROPOS */}
        <MDBModal
          isOpen={this.state.modal5}
          toggle={this.toggle(5)}
          centered
        >   
         <MDBModalHeader toggle={this.toggle(5)} className="text-center" titleClass="w-100">A propos de E-com</MDBModalHeader>
        
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn id="boutton-inscrire">Merci de visiter e-com</MDBBtn>
          </MDBModalFooter>
        </MDBModal>


        {/* CONNEXION */}

        <MDBRow>
          <form className="mx-3 grey-text" onSubmit={e => {
            e.preventDefault()
            this.login()
            // this.conn()
          }} >
            <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
              <MDBModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold"
                toggle={this.toggle(1)}
              >
                Connexion
            </MDBModalHeader>
              <MDBModalBody>

                <MDBInput
                  label="taper votre e-mail"
                  icon="envelope"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right" value={this.state.nomUtilisateur} onChange={this.onChange} name="nomUtilisateur"
                />
                <MDBInput
                  label="taper votre mot de passe"
                  icon="lock"
                  group
                  type="password"
                  validate value={this.state.password} onChange={this.onChange} name="password"
                />
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <button id="boutton-inscrire" className="btn btn-primary" type="submit">Se connecter</button>
              </MDBModalFooter>
            </MDBModal>
          </form>
        </MDBRow>

        {/* Inscription */}

        <MDBRow id="test">
          <form className="mx-3 grey-text" onSubmit={e => {
            e.preventDefault()
            this.register()
            this.conn()
          }} >

            <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
              <MDBModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold"
                toggle={this.toggle(2)}
              >
                Inscription
              <h6>Inscrivez-vous avant de publier votre produit sur e-com</h6>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBInput
                  label="Votre nom"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right" value={this.state.nomUtilisateur} onChange={this.onChange} name="nomUtilisateur"
                />
                <MDBInput
                  label="Votre e-mail"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right" value={this.state.email} onChange={this.onChange} name="email"
                />
                <MDBInput
                  label="Votre mot de passe"
                  icon="lock"
                  group
                  type="password"
                  validate value={this.state.password} onChange={this.onChange} name="password"
                />
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <button id="boutton-inscrire" className="btn btn-primary" onClick={() => {
                  document.getElementById('test').style.display = 'none'
                }} type="submit">S'inscrire</button>
              </MDBModalFooter>
            </MDBModal>
          </form>
        </MDBRow>

      </div>
    );
  }
}

export default SideNavPage;