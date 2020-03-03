module.exports = function(app){
    var controller = app.controller.contato;
    app.get('/contatos', controller.listaConstatos);
    app.get('/contatos/:id', controller.obtemContato);

};