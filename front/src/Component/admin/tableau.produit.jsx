import React, { Component } from 'react';
import axios from 'axios';


export default class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/produit')
            .then(response => {
                console.log('produit tableau :', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div>
            <div>
                <table className="table table-striped table-bordered" id="table">
                    <thead>
                        <tr>
                            <th className="thtab">Images</th>
                            <th className="thtab">Nom</th>
                            <th className="thtab">Description</th>
                            <th className="thtab">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    <td><img id="imagetab" width="200px" height="150px" src={'http://localhost:8080/produit/'+obj.photo_produit} alt={obj.photo_produit}/></td>
                                    <td>{obj.titre}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.prix}  Ar</td>
                                </tr>
                            })) : ('Aucun produit')
                        }
                    </tbody>
                </table>
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