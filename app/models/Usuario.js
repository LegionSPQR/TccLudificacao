// app/models/Usuario.js

var mongoose = require('mongoose');
module.exports = function() {
    var schema = mongoose.Schema({
        login: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        usuario: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        },
        datanasc: {
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
            default: Date.now,
            required: true
        },        
        grupos: {
            type: [String]
        }
    });
    return mongoose.model('Usuario', schema);
};