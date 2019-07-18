import React, { Component } from 'react';
import Header from './Component/admin/header';
import Produit from './Component/admin/Listeproduit';


class Accueil extends Component {
  
  render() {
    let imgUrl = 'https://mdbootstrap.com/img/Photos/Others/forest2.jpg'; 
    return (
      <div className="">
      <Header/>
        <div class="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
              <h4 class="h5 orange-text"><i class="fas fa-camera-retro"></i> E-COM</h4>
              <h2 class="card-title h2 my-4 py-2">Bienvenue sur E-COM</h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">Ici vous voyez toutes sortes des produits: <span id="spanheader">Produits technologiques, des vêtements, ...</span></p>
              <a class="btn peach-gradient" href="#!"><i class="fas fa-clone left"></i>Voir les produits</a>
            </div>
          </div>
        </div>
        <Produit/>
      </div>
    )
  }
}
export default Accueil; 