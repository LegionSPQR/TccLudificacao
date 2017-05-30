// public/js/services/UsuarioService.js

angular.module('ludificando').factory('Usuario', function($resource) {
    return $resource('/usuarios/:id');
});