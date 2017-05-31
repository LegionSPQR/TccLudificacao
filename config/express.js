var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function() {
    var app = express();
    
    //Setando Variáveis de Ambiente
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    //Configurando Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')())
    app.use(cookieParser());
    app.use(session(
        { secret: 'homem avestruz',
          resave: true,
          saveUninitialized: true
        }
    ));
    
    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);
    return app;
};