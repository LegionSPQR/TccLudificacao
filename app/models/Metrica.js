// app/models/Metrica.js

var mongoose = require('mongoose');
module.exports = function() {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        descrição: {
            type: Date,
            default: Date.now,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        inclusao: {
            type: Date,
            default: Date.now
        },
        gerenciador: {
            type: Boolean,
            required: true
        },        
    });
    return mongoose.model('Metrica', schema);
};