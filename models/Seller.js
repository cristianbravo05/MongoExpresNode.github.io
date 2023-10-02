const mongoose = require('mongoose');

const SellerSchema = mongoose.Schema({
    Nombres: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
        required: true
    },
    Empresa: {
        type: String,
        required: true
    },
    Departamento: {
        type: String,
        required: true
    },
    Ciudad: {
        type: String,
        required: true
    },
    Dirrecion: {
        type: String,
        required: true
    },
    Telefono: {
        type: String,
        required: true
    },
    Telefono2: {
        type: String,
        required: true
    },
    Telefono3: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Seller', SellerSchema);