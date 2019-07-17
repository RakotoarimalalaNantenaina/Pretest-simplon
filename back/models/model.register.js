const mongoose = require('mongoose');

const Register = mongoose.Schema({
    
    _id: {type:Number},
    nomUtilisateur: { type: String},
    password: { type: String},
    email:String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('profil', Register);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
