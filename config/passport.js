// config/passport.js

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {
    
    passport.use(new GitHubStrategy({
        clientID: 'SEU CLIENTE ID',
        clientSecret: 'SEU CLIENTE PASSWORD',
        callbackURL: 'SUA REDIRECT_URL'
    }, function(accessToken, refreshToken, profile, done) {

    }));
};