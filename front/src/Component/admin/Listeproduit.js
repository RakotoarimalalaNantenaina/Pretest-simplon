import React, { Component } from 'react';
import axios from 'axios';

export default class ListTous extends Component {
    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }

    state = {
        flipped2: false
      }
      
      handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
      }
      

    componentDidMount() {
        axios.get('http://localhost:8080/produit')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div className="container-fluid">
           
                <div className="row view-group" id="colonne">
                    {this.state.profil.length > 0 ? (

                        this.state.profil.map(user => (

                            <div class="item col-xs-2 col-lg-2" id="carte">

                                <div className="card card-cascade narrower card-ecommerce">

                                        <img width="auto" id="imageproduit" height="150px" src={'http://localhost:8080/user/' + user.photo_produit} alt="ima" />
                                        
                                    <div className="card-body card-body-cascade">

                                        <h6 id="description"><span id="nomproduit">{user.titre}</span></h6>

                                        <p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point">{user.description}</div> </p>
                                        <span className="spanprix">
                                            <strong>Prix: </strong>
                                        </span><br />

                                        <span class="float-right">

                                            <span class="float-right">
                                                <a data-toggle="tooltip" data-placement="top" title="Ajouter au panier">
                                                    <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                                </a>
                                                <a data-toggle="tooltip" data-placement="top" title="J'adore">
                                                </a>
                                            </span>

                                        </span>

                                        <div className="card-footer px-1">
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))
                    ) : (
                            <div></div>
                        )}
                </div>
          
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}