angular.module('ludificando', ['ngRoute','ngResource'])
.config(function($routeProvider) {

    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    })
    .when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    })
    .when('/cadastro', {
        templateUrl: 'partials/cadastro.html',
        controller: 'UsuarioController'
    })
    .otherwise({
        redirectTo: '/',
        templateUrl: 'partials/login.html'
    });
});