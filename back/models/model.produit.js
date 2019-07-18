const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    _id: {type:Number},
    titre: { type: String},
    description: { type: String},
    prix: { type: Number},
    photo_produit:String,
},
{
    timestamps: true
}
);

module.exports = mongoose.model('produit', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
