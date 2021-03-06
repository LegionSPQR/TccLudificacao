// app/routes/usuario.js
module.exports = function(app)
{
    var controller = app.controllers.usuario;
    
    app.route('/usuarios')
    .get(controller.listaTodos)
    .post(controller.cadastraUsuario);

    app.route('/usuarios/:id')
    .get(controller.obtemUsuario)
    .delete(controller.removeUsuario);
};