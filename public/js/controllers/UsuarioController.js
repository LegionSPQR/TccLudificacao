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
    //Função Salva o Usuário durante o Cadastro de novo Usuário.
    $scope.salva = function() {
        //Checa se a Senha e a Confirmação digitadas pelo Usuário são iguais.
        if($scope.usuario.senha === $scope.confsenha){
            //Limpa mensagem de erro anterior, se foi utilizada.
            $scope.errosenha = null;
            $scope.usuario.$save()
            .then(function() {
                $scope.mensagem = 'Salvo com sucesso';
            })
            .catch(function(erro) {
                $scope.mensagem = 'Não foi possível salvar';
                //Colocar Mensagem de Chave Duplicada ou outros erros possíveis.
            });
        //Se não forem iguais Emite mensagem de Aviso e não salva o Usuário.
        } else{
            $scope.errosenha = 'Senha e Confirmação não são iguais!' 
        }
    };

    Usuario.query(function(usuarios) {
        $scope.usuarios = usuarios;
    });   
});