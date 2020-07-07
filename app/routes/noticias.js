module.exports = function(app) {  

    app.get('/noticias', function(request, response) {

        var connection = app.config.databases.connections();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result) {
            response.render("noticias/noticias", {news : result});
        });        
    });
};
