module.exports = new function() 
{
    var controller = {};
    controller.index = function(req,res)
    {
        //retorna a página index.ejs
        res.render('index', {nome: 'Express'});
    };
    
    return controller;
    
}