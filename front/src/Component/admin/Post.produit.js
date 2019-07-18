import React from 'react';
import { MDBIcon,MDBCol,MDBInput,MDBCard, MDBCardBody} from "mdbreact";

class PostFrontToBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: '',
      description:'',
      photo_produit:'',
      prix: ''

    };

    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo_produit', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('prix',this.state.prix);
  
    fetch('http://localhost:8080/produit', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_produit: `http://localhost:8080/produit/${body.photo_produit}` });
        console.log('ity ilay body.fil',body.photo_produit);
        
      });
    });
  }

  render() {
    return (
        <div> 
        <center>
      <MDBCol md="6">
            <MDBCard width="50%">
              <MDBCardBody>
                <form  onSubmit={this.handleUploadImage}>
                  <p className="h4 text-center py-4">Ajouter votre produit</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Nom du produit"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right" value={this.state.value}  onChange={this.onChange} name="titre"
                    />
                    <MDBInput
                      label="Déscription"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange} name="description"
                    />
                    <MDBInput
                      label="Prix"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="prix"
                    />
                  <label>Images de votre produit : </label>  
                  <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_produit"/>
                  </div>
                  <div className="text-center">
                  <div className="text-center mt-4">
                <button className="btn btn-outline-warning" type="submit">
                  Ajouter
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
              </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </center>
      </div>
    );
  }
}

export default PostFrontToBack;
