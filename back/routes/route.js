module.exports = (app) => {

    const produit = require('../controller/controlleur.produit');
    const profil = require('../controller/controlleur.register');
    app.post('/produit', produit.create);
    app.get('/produit', produit.findAll);
    app.get('/produit/:image', produit.lireImage);

    app.post('/register', profil.register);
    app.post('/login', profil.login);
    app.get('/profils', profil.profils)
    
}