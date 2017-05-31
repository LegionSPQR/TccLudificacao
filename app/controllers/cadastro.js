// app/controllers/cadastro.js

module.exports = function (app) {

    var Usuario = app.models.Usuario;

    var controller = {};

    controller.listaTodos = function (req, res) {
        Usuario.find().exec()
            .then(
            function (usuarios) {
                res.json(usuarios);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
            );
    };

    controller.obtemUsuario = function (req, res) {
        var _id = req.params.id;
        Usuario.findById(_id).exec()
            .then(
            function (usuario) {
                if (!usuario) throw new Error("Usuário não encontrado");
                res.json(usuario);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
            );
    };

    controller.removeUsuario = function (req, res) {
        var _id = req.params.id;
        console.log(_id);
        Usuario.remove({ "_id": _id }).exec()
            .then(
            function () {
                res.end();
            },
            function (erro) {
                return console.error(erro);
            }
            );
    };

    controller.salvaUsuario = function (req, res) {
        var _id = req.body._id;

        if (_id) {
            Usuario.findByIdAndUpdate(_id, req.body).exec()
                .then(
                function (usuario) {
                    Usuario.findById(_id);
                    res.json(usuario);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
                );
        } else {
            Usuario.create(req.body)
                .then(
                function (usuario) {
                    res.status(201).json(usuario);
                },
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
                );
        }
    };

    return controller;
};

/* Como buscar com filtro
   Usuario.find()
   .select("nome email")
   .where("email").equals(/cont/)
   .exec()
   .then(function(nomeEemail) {
       console.log(nomeEemail);
   });
*/