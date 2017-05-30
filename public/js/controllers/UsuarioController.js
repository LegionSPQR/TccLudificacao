// public/js/controllers/UsuarioController.js

angular.module('ludificando').controller('UsuarioController',function($scope, $routeParams, Usuario) {

    if($routeParams.usuarioId) {
        Usuario.get({id: $routeParams.usuarioId},
            function(usuario) {
                $scope.usuario = usuario;
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto:'Não foi possível obter o Usuário'
                };
            }
        );
    } else {
        $scope.usuario = new Usuario();
    }
    $scope.salva = function() {
        $scope.usuario.$save()
        .then(function() {
            $scope.mensagem = {texto: 'Salvo com sucesso'};
        })
        .catch(function(erro) {
            $scope.mensagem= {texto: 'Não foi possível salvar'};
        });
    };

    Usuario.query(function(usuarios) {
        $scope.usuarios = usuarios;
    });   
});