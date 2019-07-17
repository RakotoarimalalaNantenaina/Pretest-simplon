import React from 'react';

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
      <form onSubmit={this.handleUploadImage}>
        <label>Titre:</label>
        <input type="text" value={this.state.value}  onChange={this.onChange} name="titre" /><br></br>
        <label>Description:</label>
        <input type="text" value={this.state.value} onChange={this.onChange}  name="description" /><br></br>
        <input type="text" value={this.state.value} onChange={this.onChange}  name="prix" /><br></br>
        <label>Images de votre produit</label>
             
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_produit"/><br/>
       
          <button>Ajouter votre produit</button>
      </form>
    );
  }
}

export default PostFrontToBack;
