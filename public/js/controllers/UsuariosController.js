//public/js/controllers/UsuariosController.js

angular.module('ludificando').controller('UsuariosController',
    function($scope, Usuario) {

        $scope.usuarios = [];
        $scope.filtro = '';
        $scope.mensagem = {texto:''};
        
        function buscaUsuarios() {
            Usuario.query(
                function(usuarios) {
                    $scope.usuarios = usuarios;
                },
                function(erro) {
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não foi possível obter a lista'
                    };
                }
            );
        }
        buscaUsuarios();

        $scope.remove = function(usuario) {
            Usuario.delete({id: usuario._id},
                buscaUsuarios,
                function(erro) {
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não foi possível remover o usuario'
                    }; 
                }
            );
        };
});
