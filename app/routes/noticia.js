module.exports = function(app) {
    app.get('/noticia', function(request, response) {

        var connection = app.config.databases.connections();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result) {
            response.render("noticias/noticia", {noticia : result});
        }); 
    });
};