const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const methodOverride = require('method-override')
const config = require('./config/database.config')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');


app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./routes/route')(app);
mongoose.Promise = global.Promise;
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("connexion avec la base de donnée avec succes");  
}).catch(err => {
    console.log('erreur de la connexion', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send('bienvenue')
});

app.listen(8080, () => {
    console.log("Serveur demarrer");
});